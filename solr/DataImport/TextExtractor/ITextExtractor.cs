using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DataImport.TextExtractor
{
    interface ITextExtractor
    {
        string GetPDFText(string FileLocation);
    }
}
