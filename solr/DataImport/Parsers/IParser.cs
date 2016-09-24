using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DataImport.Parsers
{
    interface IParser
    {
        void ParseDocument(string DocumentText, DataType DataToFind);
    }
}
