const fs = require('fs');
const PDFDocument = require('pdfkit');

// Etap 1: Metadane dokumentu
const document = new PDFDocument({
  size: 'B5',
  margin: 30,
  autor:"Wiki"
});

document.font('ss/Lato-Regular.ttf') 
  .fontSize(20)
  .text('Wiki Polowczyk 4tp', { align: 'center' })

document.font('ss/Lato-Regular.ttf')
  .fontSize(20)
  .text('Zespół Szkół Elektrycznych', { align: 'center' });

const logoPath = 'ss/zse-logo.png'; 
document.image(logoPath, {
  width: document.page.width * 0.3,
  align: 'left',
});
const linkText = 'wiecej';
const linkUrl = 'https://edu.gplweb.pl/?svc=courses';
const listItems=['Tekst3', 'Tekst2', 'Tekst',{}];
document.fontSize(14)
  .text('Znane mi technologie Web:', { underline: true, bold: true })
  .list(['Tekst3', 'Tekst2', 'Tekst',])
  ;



document.text(linkText, { link: linkUrl });

const outputPath = 'Moj_pdf.pdf';
document.pipe(fs.createWriteStream(outputPath));
document.end();

console.log(`PDF został wygenerowany i zapisany w: ${outputPath}`);
