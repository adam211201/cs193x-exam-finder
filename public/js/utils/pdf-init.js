/* The following code was taken from a PDF.js demo and modified to work as a function that accepts a url. */
const loadPDF = async (elem, url) => {
  const pdfjsLib = window["pdfjs-dist/build/pdf"];

  pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.12.313/pdf.worker.min.js";

  const loadingTask = pdfjsLib.getDocument(url);
  
  loadingTask.promise.then(pdf => {
    const pageNumber = 1;

    pdf.getPage(pageNumber).then((page) => {
      const scale = 1.5;
      const viewport = page.getViewport({scale: scale});
      const canvas = elem;
      const context = canvas.getContext("2d");

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: context,
        viewport: viewport
      };
      const renderTask = page.render(renderContext);

      renderTask.promise.then(() => {
        console.log("Page rendered.");
      });
    });
  }, (reason) => {
    console.error(reason);
  });
}

export default loadPDF;