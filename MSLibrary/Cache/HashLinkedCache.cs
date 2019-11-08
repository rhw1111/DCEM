using System;
using System.Collections.Generic;
using System.Collections.Concurrent;
using System.Text;
using System.Linq;
using System.Threading.Tasks;
using MSLibrary.Collections;

namespace MSLibrary.Cache
{
    /// <summary>
    /// 实现基于hash和双向链表存储的缓存容器
    /// </summary>
    public class HashLinkedCache<TKey, TValue> : ICache<TKey, TValue>
    {
        private ConcurrentDictionary<TKey, LinkedListNode<KeyValuePair<TKey, TValue>>> _dict;
        private NLinkedList<KeyValuePair<TKey, TValue>> _linked;
        private INLinkedListStrategy _linkedStrategy;
        private int _length;
        public HashLinkedCache()
        {
            _linked = new NLinkedList<KeyValuePair<TKey, TValue>>();
            _dict = new ConcurrentDictionary<TKey, LinkedListNode<KeyValuePair<TKey, TValue>>>();
            _linkedStrategy = new NLinkedListStrategyLRU();
            _length = 1000;
            _linked.MaxLength = _length;

            _linked.OnAdded = (node, value) =>
            {
                _dict[value.Key] = node;
            };
            _linked.OnRemoved = (value) =>
            {
                _dict.TryRemove(value.Key, out LinkedListNode<KeyValuePair<TKey, TValue>>  v);
            };
        }
        public Dictionary<TKey, LinkedListNode<KeyValuePair<TKey, TValue>>> Dict
        {
            get { return _dict.ToDictionary((keyVaue) => keyVaue.Key, (keyValue) => keyValue.Value); }
        }
        public NLinkedList<KeyValuePair<TKey, TValue>> Linked
        {
            get
            {
                return _linked;
            }
        }
        public INLinkedListStrategy LinkedStrategy
        {
            set
            {
                _linkedStrategy = value;
            }
        }

        public int Length
        {
            get
            {
                return _length;
            }

            set
            {
                _length = value;
                _linked.MaxLength = value;
            }
        }

        public int CurrentLength
        {
            get
            {
                return _dict.Count;
            }
        }

        public TValue GetValue(TKey key)
        {
            TValue result = default(TValue);

            //从hash表中取数据


            if (_dict.TryGetValue(key, out LinkedListNode<KeyValuePair<TKey, TValue>>  tNode))
            {
                result = tNode.Value.Value;
                //异步使用策略
                Task.Run(() =>
                {
                    lock (_dict)
                    {
                        _linkedStrategy.Hit(tNode, _linked);
                    }
                });
            }

            return result;
        }

        public void SetValue(TKey key, TValue value)
        {
            KeyValuePair<TKey, TValue> pair = new KeyValuePair<TKey, TValue>(key, value);
            //从hash表中取数据
            if (!_dict.TryGetValue(key, out LinkedListNode<KeyValuePair<TKey, TValue>> tNode))
            {
                //异步使用策略
                Task.Run(() =>
                {
                    lock (_dict)
                    {
                        if (!_dict.TryGetValue(key, out tNode))
                        {
                            _linkedStrategy.Add(pair, _linked);
                        }
                        else
                        {
                            tNode.Value = pair;
                            _linkedStrategy.Hit(tNode, _linked);
                        }
                    }
                });
            }
            else
            {
                tNode.Value = pair;
                //异步使用策略
                Task.Run(() =>
                {
                    lock (_dict)
                    {
                        _linkedStrategy.Hit(tNode, _linked);
                    }
                });
            }
        }

        public void Remove(TKey key)
        {
            if (_dict.TryGetValue(key, out LinkedListNode<KeyValuePair<TKey, TValue>> tNode))
            {
                Task.Run(() =>
                {
                    lock (_dict)
                    {
                        if (_dict.TryGetValue(key, out tNode))
                        {
                            _linked.Remove(tNode);
                        }
                    }
                });
            }



        }

        public void Clear()
        {
            //Task.Run(() =>
            //{
                lock (_dict)
                {
                    _dict.Clear();
                    _linked.Clear();
                }
            //});
        }
    }
}
