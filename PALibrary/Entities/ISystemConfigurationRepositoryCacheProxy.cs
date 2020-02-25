﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PALibrary.Entities
{
    public interface ISystemConfigurationRepositoryCacheProxy
    {
        SystemConfiguration QueryByName(string name);
    }
}
