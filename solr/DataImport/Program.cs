using System;

namespace DataImport
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var node = new Uri("http://127.0.0.1:9200");
            var settings = new ConnectionSettings(node);
            var client = new ElasticClient(settings);

            MeetingNote meeting = new MeetingNote()
            {
                FullText = "This is a sample meeting note",
                MeetingDate = DateTime.Now

            };

            var response = client.Index(meeting, idx => idx.Index("meetingNotes"));
            Console.WriteLine(response);
        }
    }
}
