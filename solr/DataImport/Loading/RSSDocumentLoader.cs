using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DataImport.Loading
{
    public class RSSDocumentLoader : IDocumentLoader
    {
        private IEnumerable<string> _documentTitles;

        public string GetNextDocument()
        {
            throw new NotImplementedException();
        }

        public bool MoreDocumentsExist()
        {
            throw new NotImplementedException();
        }

        public void SetAlreadyEnteredDocuments(IEnumerable<string> DocumentTitles)
        {
            _documentTitles = DocumentTitles;
        }
    }
}
