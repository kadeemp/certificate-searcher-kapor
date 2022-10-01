import { Document } from 'react-pdf'
import { Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { Worker, Viewer } from '@react-pdf-viewer/core';


function PDFPage() {

  return (
    <div style= {{height:550}}>
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js">
     <Viewer fileUrl="https://firebasestorage.googleapis.com/v0/b/kapor-center-cert-search.appspot.com/o/cert-pdfs%2F%23000001.pdf?alt=media&token=94b5fb97-c266-49dc-a203-8e1d2a9328f7" />

    ...
    </Worker>
    </div>
  );
}

export default PDFPage;
