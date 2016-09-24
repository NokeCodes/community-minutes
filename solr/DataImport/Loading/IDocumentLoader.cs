using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DataImport.Loading
{
    interface IDocumentLoader
    {
        void SetAlreadyEnteredDocuments(IEnumerable<string> DocumentTitles);
        string GetNextDocument();
        bool MoreDocumentsExist();

    }
}
