using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace DataImport.TextExtractor
{
    public class TextExtractor : ITextExtractor
    {
        public string GetPDFText(string FileLocation)
        {
            string convertCmdText;
            
            convertCmdText = $"/usr/bin/tesseract -density 300 {FileLocation.ToString()} -depth 8 /tmp/file.tiff ";
            Process ConvertProcess = new Process();
            ConvertProcess.StartInfo.UseShellExecute = false;
            ConvertProcess.StartInfo.FileName = convertCmdText;
            ConvertProcess.Start();
            //System.Diagnostics.Process.Start("convert", convertCmdText);
            ConvertProcess.WaitForExit();

            string tesseractCmdText;
            tesseractCmdText = $"tesseract /tmp/file.tiff /tmp/scanned.txt -l eng";
            Process tesseractProcess = System.Diagnostics.Process.Start("bin/sh", tesseractCmdText);
            tesseractProcess.WaitForExit();
            return File.ReadAllText("/tmp/scanned.txt");
        }
    }
}
