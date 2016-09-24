using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DataImport.Parsers
{
    public class Parser : IParser
    {
        public void ParseDocument(string DocumentText, DataType DataToFind)
        {
            if(DataToFind == DataType.Votes)
            {

            }
        }
    }
}
