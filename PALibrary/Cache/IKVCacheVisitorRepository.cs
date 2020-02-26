using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PALibrary.Cache
{
    public interface IKVCacheVisitorRepository
    {
        KVCacheVisitor QueryByNameSync(string name);
    }
}
