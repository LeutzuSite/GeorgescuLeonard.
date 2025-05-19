// Buton pentru descărcare CV
document.getElementById('btn-cv').addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'cv_Georgescu_Leonard.pdf';
    link.download = 'CV_Leonard_Georgescu.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
  ;
  
  