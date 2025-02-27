let testingData = [];
let imgsValues=[]
let usedImages=[]

var prow=0;
var pcol=0

//let principalImage;
var tileSizeFactor
var tileNumberRow;
var tileNumberCol;
var tileDimensionH;
var tileDimensionV;
var canvasWidth
var canvasHeight

var start =0

let video
let img
var frame

var keepCamera=0

var comparedPixels=[]
var pixelsToCompare=[]

var timeCounter=0
var forLoopCounter = 0
var forLoopIncrementer = 40
var pixelDensityValue = 0

let uploadedImg;
var renderUploadedImg =0


var formats =[]

const sketch = (p) => {


p.preload = () => {
  console.log("preload has started")
  // Load tiles images into the testingData array
  for (let i = 0; i < 50; i++) {
    testingData[i] = p.loadImage('./data/' + i + '.jpeg')
    //testingData[i] = p.loadImage('https://thispersondoesnotexist.com/')

    //console.log(testingData)
  }
}

p.setup=() =>{

  video = p.createCapture({video:true, audio:false})
  video.hide()
  console.log(video.width,video.height)
  video.elt.onloadedmetadata = () => {console.log("video is fully loaded")

    p.createCanvas(p.windowWidth, p.windowHeight);
    p.canvas.getContext('2d', { willReadFrequently: true })
  };

  console.log(video.width,video.height)
  console.log(video, video.width, video.height)

  //HERE WE SET TILE NUMBER FOR WIDTH

  if(p.windowWidth>p.windowHeight){

  tileSizeFactor = p.windowWidth/150

  } else{
    tileSizeFactor = p.windowHeight/150
  }
  
  
  formats =[1,1]
    //  formats =[4,3]
    //  formats =[3,4]
    //  formats =[16,9]
    //  formats =[9,16]
    //formats =[2,3]
  
  // SetUp apporximate TileNumber
  tileNumberRow = p.windowWidth/tileSizeFactor;
  tileNumberCol = p.windowHeight/tileSizeFactor;

  console.log(tileNumberCol,tileNumberCol)
  
  //Calculate tile ratio
  tileDimensionH = Math.abs(p.windowWidth / tileNumberRow);
  tileDimensionV = tileDimensionH*formats[1]/formats[0];
  
  //Adjust TileNumber according to Formats, once they are calculated
  
  tileNumberRow = p.windowWidth/tileDimensionH;
  tileNumberCol = p.windowHeight/tileDimensionV;
  
  console.log("Tile dimesions:", tileDimensionV, tileDimensionH);
  
  console.log("Tile number:", tileNumberRow, tileNumberCol)
  
  getTonalityFromImages()
  
  
    //THIS IS NOW IN DRAW() Display the principal image on the entire canvas
    //p.image(principalImage, 0, 0, canvasWidth,canvasHeight);
    
    // Call pixelize function
    //pixelizePrinc(p,tileNumberRow, tileNumberCol);

    for(i=0;i<tileNumberRow;i++){
      for(j=0;j<tileNumberCol;j++){
        var row=i
        var col=j

        var pixelData = [row,col]
        pixelsToCompare.push(pixelData)

      }
    }
    shuffle(pixelsToCompare)
    console.log(pixelsToCompare)

    if(video.width*video.height<200000){
      p.pixelDensity(pixelDensityValue+3)
    }else{
      p.pixelDensity(pixelDensityValue+1)
    }
    video.hide()



    const fileInput = p.select('#imageUpload');
    const uploadButton = p.select('#upload');
  
    // Trigger file input click when the div is clicked
    uploadButton.mousePressed(() => fileInput.elt.click());
  
    // Handle file input change
    fileInput.changed(() => p.handleFile(fileInput.elt.files[0]));
  
}

p.draw =() =>{

  if (uploadedImg && renderUploadedImg==0) {
    keepCamera =1
    renderUploadedImg = 1
    p.image(uploadedImg, 0, 0, p.windowWidth, p.windowHeight);
  }


    if(keepCamera==0){ 

      if(p.windowWidth>p.windowHeight){
        frame = p.image(video, 0, (p.windowHeight - (p.windowWidth * video.height / video.width)) / 2, p.windowWidth, p.windowWidth * video.height / video.width);
      } else{
        frame = p.image(video, (p.windowWidth - (p.windowHeight * video.width / video.height)) / 2, 0, p.windowHeight * video.width / video.height, p.windowHeight);
      }
      
    }

    if(start==1){

        video.pause()

        timeCounter=timeCounter+1
        console.log(timeCounter)

        if(comparedPixels.length<pixelsToCompare.length){

          if(pixelsToCompare.length-comparedPixels.length<forLoopIncrementer){
            forLoopIncrementer=pixelsToCompare.length-comparedPixels.length
          }
            for(i=0;i<forLoopIncrementer;i++){
              var row = pixelsToCompare[forLoopCounter+i][0]
              var col=  pixelsToCompare[forLoopCounter+i][1]
    
              var pixelData = [row,col]
               
              comparedPixels.push(pixelData);
    
              let pixel = p.get(row * tileDimensionH + tileDimensionH / 2, col * tileDimensionV + tileDimensionV / 2)
    
    
              let pixelTonality = 0
        
              const r =  pixel[0];
              const g =  pixel[1];
              const b =  pixel[2];
              // Calculate grayscale value using the luminosity formula
              const brightness = Math.floor(0.299 * r + 0.587 * g + 0.114 * b);
              pixelTonality += brightness;
        
              //Compare single Pixel
              comparePixel(p,pixel, row, col, pixelTonality)
    
                
            }
            console.log(comparedPixels);

            forLoopCounter = forLoopCounter +forLoopIncrementer

            if(timeCounter%250==0){
             // checkIfToStop()
            }
        } else{

          //const imageUUID = crypto.randomUUID()

          console.log("CODE WAS STOPPED")
          start=0

          img = p
          console.log(img)

          img.save()

          //keepCamera=0
          video.play()
          //printCanvas()
          comparedPixels=[]
          forLoopCounter=0
        }



      //console.log(p, prow * tileDimensionH + tileDimensionH / 2, pcol * tileDimensionV + tileDimensionV / 2)
      
      //console.log(tileDimensionH,tileDimensionV, pcol, prow)



    }


 


}


p.handleFile= (file) => {
  console.log(file)

  renderUploadedImg = 0
  if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png' || file.type === 'image/tiff' ) {
    
    video.pause()
    p.background(0)
    uploadedImg = p.loadImage(URL.createObjectURL(file), () => {
      // Image loaded successfully, draw it to the canvas

      if(p.windowWidth>p.windowHeight){
        p.image(uploadedImg, 0, (p.windowHeight - (p.windowWidth * uploadedImg.height / uploadedImg.width))/2, p.windowWidth,  p.windowWidth * uploadedImg.height / uploadedImg.width);
      } else{
        p.image(uploadedImg, (p.windowWidth - (p.windowHeight * uploadedImg.width / uploadedImg.height))/2, 0 , p.windowHeight * uploadedImg.width / uploadedImg.height, p.windowHeight);
      }
      
    });
  } else {
    console.log('Not an image file!');
  }
}



}

function getTonalityFromImages(){
  //CHECK THE AVERAGE COLOR OF EACH IMAGE

  for(imgToCheck=0;imgToCheck<testingData.length;imgToCheck++){

    //DEFINE CURRENT IMAGE
    let currImg=testingData[imgToCheck]
    //console.log(testingData[imgToCheck])

    currImg.loadPixels()

    //console.log(pixels)

    //CALCULATE PIXEL TONALITY OF CURRENT IMAGE
    let totalBrightness = 0;
     const numPixels = currImg.width * currImg.height;

     for (let i = 0; i < numPixels; i++) {
          const index = i * 4;
          const r = currImg.pixels[index];
          const g = currImg.pixels[index + 1];
          const b = currImg.pixels[index + 2];

          // Calculate grayscale value using the luminosity formula
          const brightness = 0.299 * r + 0.587 * g + 0.114 * b
          totalBrightness += brightness;

      }

      // Calculate average tonality
      const averageTonality = Math.floor(totalBrightness / numPixels);
  //    console.log(`The average tonality of the ${imgToCheck} image is: ${averageTonality}`);

      //assign it to array
      imgsValues[imgToCheck] = averageTonality
    }


    console.log(imgsValues)
    console.log("principal image tonality was checked")

}

function printCanvas(){
  let inputCanvas=document.getElementById("defaultCanvas0")
  let outputCanvas=document.getElementById("outputCanvas")

  //const sourceCtx = c.getContext('2d');
  const outputCtx = outputCanvas.getContext('2d');
  
  outputCtx.drawImage(inputCanvas,0,0)
}


function comparePixel(c, pixel,i,j,pixelTonality){

  let okImgs =[]
  let img

  //console.log(pixel,i,j,pixelTonality)


    // COMPARE "ANALYZED" IMAGE WITH CURRENT TILE
    let closestValue = imgsValues[0];
    let closestDifference = Math.abs(closestValue - pixelTonality);
    let indexOfClosestDifference = 0
    let imageToAssign = 0

    for (let k = 1; k < imgsValues.length; k++) {
    //  console.log(k)
      let currentDifference = Math.abs(imgsValues[k] - pixelTonality);
    //  console.log("current Tonality Difference:",currentDifference )


  // CHECK IF SOME IMAGES ARE CLOSE TO PIXELTONALITY DESTINATION
    if(pixelTonality<40){

        if(currentDifference < 20){
          okImgs.push(k)
        }  else if(okImgs.length==0 && currentDifference<40 ){
          okImgs.push(k)
        }else if(okImgs.length==0 && currentDifference<60 ){
          okImgs.push(k)
        }

        }



        else if(pixelTonality>150) {
        if(currentDifference < 10){
          okImgs.push(k)
        }  else if(okImgs.length==0 && currentDifference<20){
          okImgs.push(k)
        }else if(okImgs.length==0 && currentDifference<40){
          okImgs.push(k)
        }

      }


      // Otherwise just get the closest value
      if (currentDifference < closestDifference) {
        closestDifference = currentDifference;
        indexOfClosestDifference = k;
        closestValue = imgsValues[k];

      }


    }


  //console.log("images that are close to pass the test:",okImgs )

    console.log(
      `The closest average tonality to The Tonality ${pixelTonality} FROM PIXEL ${i} ${j} is: ${closestValue} from image number${indexOfClosestDifference}`
);
//tint(255, 190)




  function pickRandom(){
  var elementToPick = Math.floor(Math.random()*okImgs.length)
  imageToAssign = okImgs[elementToPick]
  //console.log(okImgs[elementToPick])

}
pickRandom()

//console.log(imageToAssign)

if(okImgs.length>0){
  img = testingData[imageToAssign]
 if(usedImages.includes(img) ){}
  else{usedImages.push(img)}
  }
  else{
    img = testingData[indexOfClosestDifference]
    if(usedImages.includes(img) ){
 }
     else{usedImages.push(img)}
  }

    //console.log("Already USED IMAGES", usedImages)

//console.log(img.width/img.height);
//console.log(formats[0]/formats[1]);


//CODE TO SET TILE ACCORDING TO FORMATS
if(formats[0]/formats[1]>img.width/img.height){
  //console.log("image is tighter than the Tile , RUN SPECIFIC CODE OR iT WILL BE SHRKINKED")

      c.image(img, i * tileDimensionH, j * tileDimensionV, tileDimensionH, tileDimensionV,0,img.height/2- Math.abs(img.width/formats[0]*formats[1])/2, img.width,img.width/formats[0]*formats[1])

} else{
  c.image(img, i * tileDimensionH, j * tileDimensionV, tileDimensionH, tileDimensionV,img.width/2-Math.abs(img.height/formats[1]*formats[0])/2,0,  img.height/formats[1]*formats[0],img.height)
}


}

//This function is never called
function pixelizePrinc(c,tileNumberRow, tileNumberCol) {
  for (let i = 0; i < tileNumberRow; i++) {
    for (let j = 0; j < tileNumberCol; j++) {

      // Get the color at the center of each tile
      let pixel = c.get(i * tileDimensionH + tileDimensionH / 2, j * tileDimensionV + tileDimensionV / 2);

      //GET THE AVERAGE TONALITY OF EACH PIXEL
      let pixelTonality = 0

      const r =  pixel[0];
      const g =  pixel[1];
      const b =  pixel[2];
      // Calculate grayscale value using the luminosity formula
      const brightness = Math.floor(0.299 * r + 0.587 * g + 0.114 * b);
      pixelTonality += brightness;


        comparePixel(c,pixel,i,j,pixelTonality)

    }
  }

  //save("faces.jpg")
}



  function saveCanvasImage(c) {
    c.save('myCanvasImage.png');
  }
  function windowResized() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  }

  function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }



  let sketchInstance; // To hold the current p5 instance

  function redrawSketch() {
    if (sketchInstance) {
      video.stop();
      sketchInstance.remove(); // Remove the current sketch instance
    }

    pixelsToCompare = [];
    comparedPixels = [];
    timeCounter = 0;
    forLoopCounter = 0;

    sketchInstance = new p5(sketch); // Reinitialize the sketch
  }

document.addEventListener("DOMContentLoaded", () => {

  var highResActive=0

  document
      .getElementById('highResCheckBox')
      .addEventListener('click', () => {
        if(highResActive==0){
          highResActive=1
          pixelDensityValue = 10 ; // Increase pixel density
          redrawSketch(); // Redraw the sketch with the updated value
        } else{
          highResActive=0
          pixelDensityValue = 0 ; // Increase pixel density
          redrawSketch(); // Redraw the sketch with the updated value
        }
      });
});

redrawSketch()
