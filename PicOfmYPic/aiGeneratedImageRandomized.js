let testingData = [];
let imgsValues=[]
let usedImages=[]

let principalImage;
var tileSizeFactor
var tileNumberRow;
var tileNumberCol;
var tileDimensionH;
var tileDimensionV;
var canvasWidth
var canvasHeight

var formats =[]

var fileFormats =["jpg","jpeg","png"]

function preload() {
  console.log("preload has started")
  var imageToload= Math.floor(Math.random()*200)

  // Load the principal image
  //principalImage = loadImage('./data/'+ imageToload +'.jpeg');
  //principalImage = loadImage('./B2.png');
  //principalImage.hide()

    principalImage = createImg('https://thispersondoesnotexist.com/')



  // Load other images into the testingData array
  for (let i = 0; i < 200; i++) {
    testingData[i] = loadImage('./data/' + i + '.jpeg')

//    console.log(testingData)
  }
}

function setup() {
//CHOSE TILE Formats


  //  formats =[1,1]
  //  formats =[4,3]
  //  formats =[3,4]
  //  formats =[16,9]
  //  formats =[9,16]
  formats =[1,1]


  //console.log(principalImage)
  //principalImage.hide()
  cnv = createCanvas(1024, 1024);
  colorMode(RGB);

  //background(10)
  //image(principalImage, 0, 0, canvas.width,canvas.height);


    //console.log(formats)

// SetUp apporximate TileNumber
    tileNumberRow = canvas.width/10;

  // Setup tile dimensions

//  tileDimensionV = Math.abs(canvasHeight / tileNumberCol);
//  tileDimensionH = tileDimensionV*formats[0]/formats[1];


  tileDimensionH = Math.abs(canvas.width / tileNumberRow);
  console.log(canvas.width, tileNumberRow)
  tileDimensionV = tileDimensionH*formats[1]/formats[0];
  console.log("Tile dimesions:", tileDimensionV, tileDimensionH);

  //Adjust TileNumber according to Formats, once they are calculated

  tileNumberRow = canvas.width/tileDimensionH;
  tileNumberCol = canvas.height/tileDimensionV;




  console.log("Tile number:", tileNumberRow, tileNumberCol)

  getTonalityFromImages()
  console.log(imgsValues)


    //  resizeCanvas(principalImage.width,principalImage.height)
      image(principalImage, 0, 0, canvas.width,canvas.height);

  canvas.getContext('2d', { willReadFrequently: true })

  // Display the principal image on the entire canvas


  // Call pixelize function
  pixelizePrinc(tileNumberRow, tileNumberCol);
  //pixelDensity(1);

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

}


function comparePixel(pixel,i,j,pixelTonality){

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

        if(currentDifference < 60){
          okImgs.push(k)
        }  else if(okImgs.length==0 && currentDifference<40 ){
          okImgs.push(k)
        }else if(okImgs.length==0 && currentDifference<60 ){
          okImgs.push(k)
        }

        }


        else if(pixelTonality>210) {
        if(currentDifference < 20){
          okImgs.push(k)
        }  else if(okImgs.length==0 && currentDifference<40){
          okImgs.push(k)
        }else if(okImgs.length==0 && currentDifference<60){
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

    console.log("Already USED IMAGES", usedImages)

console.log(img.width/img.height);
console.log(formats[0]/formats[1]);


//CODE TO SET TILE ACCORDING TO FORMATS
if(formats[0]/formats[1]>img.width/img.height){
  //console.log("image is tighter than the Tile , RUN SPECIFIC CODE OR iT WILL BE SHRKINKED")

      image(img, i * tileDimensionH, j * tileDimensionV, tileDimensionH, tileDimensionV,0,img.height/2- Math.abs(img.width/formats[0]*formats[1])/2, img.width,img.width/formats[0]*formats[1])

} else{
  image(img, i * tileDimensionH, j * tileDimensionV, tileDimensionH, tileDimensionV,img.width/2-Math.abs(img.height/formats[1]*formats[0])/2,0,  img.height/formats[1]*formats[0],img.height)
}


}





function pixelizePrinc(tileNumberRow, tileNumberCol) {

  //principalImage.loadPixels()
  console.log(principalImage)
  for (let i = 0; i < tileNumberRow; i++) {
    for (let j = 0; j < tileNumberCol; j++) {

      if (j == 0 && i==0) {
      // Get the color at the center of each tile
      let pixel = cnv.get(canvas.width+i * tileDimensionH + tileDimensionH / 2, j * tileDimensionV + tileDimensionV / 2);

      console.log(i,j,pixel)
      //GET THE AVERAGE TONALITY OF EACH PIXEL
      let pixelTonality = 0

      const r =  pixel[0];
      const g =  pixel[1];
      const b =  pixel[2];
      // Calculate grayscale value using the luminosity formula
      const brightness = Math.floor(0.299 * r + 0.587 * g + 0.114 * b);
      pixelTonality += brightness;

      // console.log("AVERAGE TONALITY PIXEL",i,j,":",pixelTonality)



      //TO TEST ON ONE PIXEL ONLY


      // For the first tile (0, 0), draw an image from testingData

                 comparePixel(pixel,i,j,pixelTonality)
       }

       else {
        //  fill(pixel);

       }

      // rect(i * tileDimensionH, j * tileDimensionV, tileDimensionH, tileDimensionV);
      // comparePixel(pixel,i,j,pixelTonality)

    }
  }
  let pixel0 = get(canvas.width+tileDimensionH + tileDimensionH / 2, tileDimensionV + tileDimensionV / 2);

  let pixelTonality0 = 0

  const r0 =  pixel0[0];
  const g0 =  pixel0[1];
  const b0 =  pixel0[2];
  // Calculate grayscale value using the luminosity formula
  const brightness0 = Math.floor(0.299 * r0 + 0.587 * g0 + 0.114 * b0);
  pixelTonality0 += brightness0;

  //comparePixel(pixel0,0,0,pixelTonality0)

  //save("faces.jpg")
}
