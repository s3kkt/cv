var cvPdf = $(#cvPdf)


if(PDFObject.supportsPDFs){
   console.log("Yay, this browser supports inline PDFs.");
} else {
   console.log("Boo, inline PDFs are not supported by this browser");
}
