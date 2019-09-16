using System;
using System.Collections.Generic;
using System.Collections.Concurrent;
using System.Threading.Tasks;
using MSLibrary.Thread;

namespace DCEM.ConsoleApp
{
    class Program
    {
        async static Task  Main(string[] args)
        {

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
}
