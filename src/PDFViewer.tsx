import React from 'react';

interface PDFViewerProps {
  className?: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ className }) => {
  // Assuming you copied the PDF to public/pdfs/
  const pdfPath = process.env.PUBLIC_URL + '/pdfs/Models.pdf';

  return (
    <div className={`pdf-viewer ${className || ''}`}>
      <div style={{ position: 'relative', width: '100%', height: '600px' }}>
        <iframe
          src={pdfPath}
          title="Accessibility Documentation"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        />
      </div>
    </div>
  );
};

export default PDFViewer;