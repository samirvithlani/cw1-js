//upload --> handle...
//jpg png pdf

const pdfhandler = (fileName)=>{

    console.log("pdf handler called for file: "+fileName)
}
const pnghandler = (fileName)=>{

    console.log("png handler called for file: "+fileName)
}
const jpghandler = (fileName)=>{

    console.log("jpg handler called for file: "+fileName)

}

const uploadFile=(fileName,cb)=>{

    cb(fileName)
}

var file = "abc.pdf"
if(file.endsWith(".pdf")){

    uploadFile(file,pdfhandler)

}
if(file.endsWith(".png")){

    uploadFile(file,pnghandler)

}
if(file.endsWith(".jpg")){

    uploadFile(file,jpghandler)

}
    




