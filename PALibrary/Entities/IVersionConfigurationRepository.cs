using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PALibrary.Entities
{
    public interface IVersionConfigurationRepository
    {
        VersionConfiguration QueryByName(string name);
    }
}
