using DataImport.Loading;
using Nest;
using System;

namespace DataImport
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var node = new Uri("http://127.0.0.1:9200");
            var settings = new ConnectionSettings(node);

            settings.MapDefaultTypeIndices(m => m.Add(typeof(MeetingNote), "meeting_notes_index"));
            var client = new ElasticClient(settings);

            IDocumentLoader loader = new RSSDocumentLoader();
            while(loader.MoreDocumentsExist())
            {
                Document doc = loader.GetNextDocument();
                
            }
            
            var response = client.Search<MeetingNote>(s => s
                .From(0)
                .Size(10)
                .Query(q =>
                        q.Term(t => t.FullText, "Note2")
                        
                    )
                );

            //MeetingNote meeting = new MeetingNote()
            //{
            //    FullText = "This is a sample meeting note2",
            //    MeetingDate = DateTime.Now

            //};

            //IndexName meetingNotesIndex = new IndexName();
            //meetingNotesIndex.Name = "meeting_notes_index";

            //var response = client.Index(meeting, idx => idx.Index(meetingNotesIndex));
            Console.WriteLine(response);
        }
    }
}
