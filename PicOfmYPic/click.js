let testingData = [];
let imgsValues=[]
let usedImages=[]


var prow=0;
var pcol=0

let principalImage;
var tileSizeFactor
var tileNumberRow;
var tileNumberCol;
var tileDimensionH;
var tileDimensionV;
var canvasWidth
var canvasHeight

var start =0

let video



var formats =[]

new p5((p) => {



var fileFormats =["jpg","jpeg","png"]

p.preload = () => {
  console.log("preload has started")
  //var imageToload= Math.floor(Math.random()*200)

  // Load the principal image
//  principalImage = loadImage('./data/'+ imageToload +'.jpeg');

  principalImage = p.loadImage('./antonio/157.jpeg');

//  principalImage = loadImage('https://thispersondoesnotexist.com/');
  //principalImage = loadImage('./B2.png');



  // Load other images into the testingData array
  for (let i = 0; i < 50; i++) {
    testingData[i] = p.loadImage('./data/' + i + '.jpeg')

//    console.log(testingData)
  }
}

p.setup=() =>{




  console.log(principalImage.width)


  //HERE WE SET TILE NUMBER FOR WIDTH
  tileSizeFactor = principalImage.width/100
  console.log("tileSizeFactor:", tileSizeFactor)


    //Let's Create the IMAGE BIGGER AS POSSIBLE
    canvasWidth=principalImage.width
    canvasHeight=principalImage.height

    if(canvasWidth>2000){

      //console.log("Canvas Size is too big, reducing it to the max accettable scale")
      canvasWidth = 2000
      canvasHeight = (canvasWidth*principalImage.height)/principalImage.width

    //  console.log("new canvas width and height are:", canvasWidth, canvasHeight)
    }


    formats =[1,1]
  //  formats =[4,3]
  //  formats =[3,4]
  //  formats =[16,9]
  //  formats =[9,16]
  //formats =[2,3]

    //console.log(formats)

  // SetUp apporximate TileNumber
    tileNumberRow = principalImage.width/tileSizeFactor;
    tileNumberCol = principalImage.height/tileSizeFactor;

  tileDimensionH = Math.abs(canvasWidth / tileNumberRow);
  tileDimensionV = tileDimensionH*formats[1]/formats[0];

  //Adjust TileNumber according to Formats, once they are calculated

  tileNumberRow = canvasWidth/tileDimensionH;
  tileNumberCol = canvasHeight/tileDimensionV;



  console.log("Tile dimesions:", tileDimensionV, tileDimensionH);

  console.log("Tile number:", tileNumberRow, tileNumberCol)

  getTonalityFromImages()


  p.createCanvas(canvasWidth, canvasHeight);
  p.canvas.getContext('2d', { willReadFrequently: true })

  // Display the principal image on the entire canvas
  p.image(principalImage, 0, 0, canvasWidth,canvasHeight);
  
  // Call pixelize function
  //pixelizePrinc(p,tileNumberRow, tileNumberCol);
 
}

p.draw =() =>{
    //console.log(start)

    if(start==1){
        let pixel = p.get(prow * tileDimensionH + tileDimensionH / 2, pcol * tileDimensionV + tileDimensionV / 2)


        let pixelTonality = 0
    
        const r =  pixel[0];
        const g =  pixel[1];
        const b =  pixel[2];
        // Calculate grayscale value using the luminosity formula
        const brightness = Math.floor(0.299 * r + 0.587 * g + 0.114 * b);
        pixelTonality += brightness;
    
        //Compare single Pixel
        comparePixel(p,pixel, prow, pcol, pixelTonality)
    
    
        if(prow>tileNumberRow){pcol=pcol+1, prow =0} else{
        prow=prow+1
      }

      if(prow==tileNumberRow && pcol==tileNumberCol){
        start=0
      }

    }


 


}

p.mouseClicked =()=>{
    start=1
}


})

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
function mouseClicked() {
    console.log("Code to run")
  }

