import { Document } from 'react-pdf'
import { Page, Text, View, StyleSheet } from '@react-pdf/renderer';

function PDFPage() {

  return (
    <div>
      <Document file={{
      url:
        'https://firebasestorage.googleapis.com/v0/b/kapor-center-cert-search.appspot.com/o/cert-pdfs%2F%23000001.pdf?alt=media&token=94b5fb97-c266-49dc-a203-8e1d2a9328f7',
    }} onLoadError={console.error} >
      </Document>
    </div>
  );
}

export default PDFPage;
