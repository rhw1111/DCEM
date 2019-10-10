using System;
using System.Collections.Generic;
using System.Collections.Concurrent;
using System.Threading.Tasks;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging.Console;
using MSLibrary.Thread;
using MSLibrary.Serializer;

namespace DCEM.ConsoleApp
{
    class Program
    {
        async static Task  Main(string[] args)
        {

            MemoryCache cache = new MemoryCache(new MemoryCacheOptions()
            {
                SizeLimit = 1
            });

            cache.Set(1, new CacheItem() { Number=1 }, new MemoryCacheEntryOptions()
            {
                AbsoluteExpirationRelativeToNow = new TimeSpan(0, 0, 100),
                 Size=1
                 
            });


            cache.Set("1", new CacheItem() { Number = 2 }, new MemoryCacheEntryOptions()
            {
                AbsoluteExpirationRelativeToNow = new TimeSpan(0, 0, 100),
                Size=1

            });


           var citem= cache.Get<CacheItem>(1);
         citem = cache.Get<CacheItem>("1");
            ParallelHelper parallelHelper = new ParallelHelper(40);

            ConcurrentDictionary<int, int> dict = new ConcurrentDictionary<int, int>(); 


            await parallelHelper.RunForward<int>(
                async(item)=>
                {
                    Random r = new Random(DateTime.Now.Millisecond);
             
                    await Task.Delay(r.Next(3000, 4000));
                    dict.TryAdd(item, item);
                },
                async(index)=>
                {

                    Random r = new Random(DateTime.Now.Millisecond);

                    await Task.Delay(r.Next(1000, 2000));

                    List<int> list = new List<int>();

                    for(var i=index*10;i< (index+1) * 10;i++)
                    {
                        list.Add(i);
                    }

                    if (index>=10)
                    {
                        return await Task.FromResult( (list, false));
                    }
                    else
                    {
                        return await Task.FromResult((list, true));
                    }
                }
                );

            Console.Read();
        }
    }


    public class CacheItem
    {
        public int Number { get; set; }
    }

    public enum E
    {
        A=0,
        B=1
    }
}
