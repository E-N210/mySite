let testingData = [];
let imgsValues=[]

let principalImage;
var tileSizeFactor
var tileNumberRow;
var tileNumberCol;
var tileDimensionH;
var tileDimensionV;
var canvasWidth
var canvasHeight

var formats =[]

function preload() {
  console.log("preload has started")
  var imageToload= Math.floor(Math.random()*200)
  // Load the principal image
  //principalImage = loadImage('./data/'+ imageToload +'.jpeg');
  principalImage = loadImage('./dataOP/doffy.jpg');



  // Load other images into the testingData array
  for (let i = 0; i < 80; i++) {
    testingData[i] = loadImage('./dataG/' + i + '.png');
//    console.log(testingData)
  }
}

function setup() {

  console.log(testingData)
  console.log(principalImage.width)


  //HERE WE SET TILE NUMBER FOR WIDTH
  tileSizeFactor = principalImage.width/150
  console.log("tileSizeFactor:", tileSizeFactor)


  //Let's Create the IMAGE BIGGER AS POSSIBLE
  canvasWidth=principalImage.width*20
    canvasHeight=principalImage.height*20

    if(canvasWidth>2000){

      console.log("Canvas Size is too big, reducing it to the max accettable scale")
      canvasWidth = 2000
      canvasHeight = (canvasWidth*principalImage.height)/principalImage.width

      console.log("new canvas width and height are:", canvasWidth, canvasHeight)
    }


//CHOSE TIL Formats


    formats =[1,1]
  //  formats =[4,3]
  //  formats =[3,4]
  //  formats =[16,9]
  //  formats =[9,16]

// SetUp apporximate TileNumber
    tileNumberRow = principalImage.width/tileSizeFactor;
    tileNumberCol = principalImage.height/tileSizeFactor;



  // Setup tile dimensions

//  tileDimensionV = Math.abs(canvasHeight / tileNumberCol);
//  tileDimensionH = tileDimensionV*formats[0]/formats[1];


  tileDimensionH = Math.abs(canvasWidth / tileNumberRow);
  tileDimensionV = tileDimensionH*formats[1]/formats[0];


  tileNumberRow = canvasWidth/tileDimensionH;
  tileNumberCol = canvasHeight/tileDimensionV;


  //Adjust TileNumber according to Formats, once they are calculated

  console.log("Tile dimesions:", tileDimensionV, tileDimensionH);

  console.log("Tile number:", tileNumberRow, tileNumberCol)

  getTonalityFromImages()
  console.log(imgsValues)


  createCanvas(canvasWidth, canvasHeight);

  // Display the principal image on the entire canvas
  image(principalImage, 0, 0, canvasWidth,canvasHeight);
  colorMode(RGB);

  // Call pixelize function
  pixelizePrinc(tileNumberRow, tileNumberCol);








}


function getTonalityFromImages(){
  //CHECK THE AVERAGE COLOR OF EACH IMAGE

  for(imgToCheck=0;imgToCheck<testingData.length;imgToCheck++){

    //DEFINE CURRENT IMAGE
    let currImg=testingData[imgToCheck]
    console.log(testingData[imgToCheck])

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

}


function comparePixel(pixel,i,j,pixelTonality){

  let okImgs =[]

  //console.log(pixel,i,j,pixelTonality)


    // COMPARE "ANALYZED" IMAGE WITH CURRENT TILE
    let closestValue = imgsValues[0];
    let closestDifference = Math.abs(closestValue - pixelTonality);
    let indexOfClosestDifference = 0
    let imageToAssign = 0

    for (let k = 1; k < imgsValues.length; k++) {
    //  console.log(k)
      let currentDifference = Math.abs(imgsValues[k] - pixelTonality);
//      console.log("current Tonality Difference:",currentDifference )


  if(pixelTonality<40){

        if(currentDifference < 20){
          okImgs.push(k)
        }  else if(currentDifference<40 ){
          okImgs.push(k)
        }else if(currentDifference<60 ){
          okImgs.push(k)
        }

      } else {
        if(currentDifference < 20){
          okImgs.push(k)
        }  else if(currentDifference<40 && imgsValues[k]>150){
          okImgs.push(k)
        }else if(currentDifference<60 && imgsValues[k]>150){
          okImgs.push(k)
        }

      }


      if (currentDifference < closestDifference) {
        closestDifference = currentDifference;
        indexOfClosestDifference = k;
        closestValue = imgsValues[k];

      }


    }


    console.log("images that are close to pass the test:",okImgs )

    console.log(
      `The closest average tonality to The Tonality ${pixelTonality} FROM PIXEL ${i} ${j} is: ${closestValue} from image number${indexOfClosestDifference}`
);
//tint(255, 190)




  function pickRandom(){
  var elementToPick = Math.floor(Math.random()*okImgs.length)
  imageToAssign = okImgs[elementToPick]
  console.log(okImgs[elementToPick])

}

pickRandom()
console.log(imageToAssign)

if(okImgs.length>0){



  if(testingData[imageToAssign].width<testingData[imageToAssign].height){
      console.log("width is leading")
      //IF THE IMAGE IS Vertical (WIDTH<HEIGHT) render the image at full width
        //and as much the portion of height as GIVEN BY THE FORMAT
        //Otherwise we do the opposite
      image(testingData[imageToAssign], i * tileDimensionH, j * tileDimensionV, tileDimensionH, tileDimensionV,0,0,testingData[imageToAssign].width, testingData[imageToAssign].width*formats[1]/formats[0])
  } else{
    console.log("height is leading")
    image(testingData[imageToAssign], i * tileDimensionH, j * tileDimensionV, tileDimensionH, tileDimensionV,0,0,testingData[imageToAssign].height*formats[0]/formats[1], testingData[imageToAssign].height)
  }

}

//REPEAT IF THERE IS NO MATCH

else{

  if(testingData[indexOfClosestDifference].width < testingData[indexOfClosestDifference].height){
      console.log("width is leading")
      image(testingData[indexOfClosestDifference], i * tileDimensionH, j * tileDimensionV, tileDimensionH, tileDimensionV,0,0,testingData[indexOfClosestDifference].width, testingData[indexOfClosestDifference].width*formats[1]/formats[0])
  } else{
    console.log("height is leading")
    image(testingData[indexOfClosestDifference], i * tileDimensionH, j * tileDimensionV, tileDimensionH, tileDimensionV,0,0,testingData[indexOfClosestDifference].height*formats[0]/formats[1], testingData[indexOfClosestDifference].height)
  }

}

}



function pixelizePrinc(tileNumberRow, tileNumberCol) {
  for (let i = 0; i < tileNumberRow; i++) {
    for (let j = 0; j < tileNumberCol; j++) {

      // Get the color at the center of each tile
      let pixel = get(i * tileDimensionH + tileDimensionH / 2, j * tileDimensionV + tileDimensionV / 2);

      //GET THE AVERAGE TONALITY OF EACH PIXEL
      let pixelTonality = 0

      const r =  pixel[0];
      const g =  pixel[1];
      const b =  pixel[2];
      // Calculate grayscale value using the luminosity formula
      const brightness = Math.floor(0.299 * r + 0.587 * g + 0.114 * b);
      pixelTonality += brightness;
      console.log("AVERAGE TONALITY PIXEL",i,j,":",pixelTonality)

    //  comparePixel(pixel,i,j,pixelTonality)


      //TO TEST ON ONE PIXEL ONLY


      // For the first tile (0, 0), draw an image from testingData
      if (j == 0) {
        //           comparePixel(pixel,i,j,pixelTonality)
      }

      else {
          fill(pixel);

      }
          rect(i * tileDimensionH, j * tileDimensionV, tileDimensionH, tileDimensionV);
        comparePixel(pixel,i,j,pixelTonality)

    }



  }
}
