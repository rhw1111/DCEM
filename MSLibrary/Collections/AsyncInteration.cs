using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace MSLibrary.Collections
{
    public class AsyncInteration<T> : IAsyncEnumerator<T>, IAsyncEnumerable<T>
    {
        private Func<int, Task<IList<T>>> _getDataFun;
        private int _index = 0;
        private int _getIndex = 0;
        private IList<T> _datas;
        private T _current;


        public T Current
        {
            get
            {
                return _current;
            }
        }

        public async ValueTask DisposeAsync()
        {
             await new ValueTask();
        }

        public IAsyncEnumerator<T> GetAsyncEnumerator(CancellationToken cancellationToken = default)
        {
            return this;
        }

        public async ValueTask<bool> MoveNextAsync()
        {
            if (_datas == null || _index > _datas.Count - 1)
            {
                _datas = await _getDataFun(_getIndex);
                _getIndex++;
                _index = 0;
            }

            if (_datas == null || _datas.Count == 0)
            {
                _current = default(T);
                return false;
            }

            _current = _datas[_index];
            _index++;
            return true;
        }
    }
}
