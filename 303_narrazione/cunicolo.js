var emag = new Phaser.Game(1000, 700, Phaser.AUTO, 'cunicolo', { preload: preload, create: create, update: update, render: renderL });

function preload() {

  emag.load.baseURL = './';
  emag.load.crossOrigin = 'anonymous';

emag.stage.backgroundColor = '#85b5e1';
  emag.load.image('plat', 'sprites/lava.png');
 emag.load.image('platform', './sprites/Muro1.png');
  emag.load.image('platform1', './sprites/Muro3.png');
   emag.load.spritesheet('pescec', './sprites/colasprite.png',23,40,10);
      emag.load.image('power', './sprites/blue_ball11.png');
      emag.load.image('roccia', './sprites/roccia.png');
      emag.load.image('exit', './sprites/block2.png');
      emag.load.spritesheet('bottle', './sprites/BottigliaF.png',24,60,5);
        emag.load.spritesheet('bottle1', './sprites/BottigliaC.png',23,60,5);
      emag.load.image('buble', './sprites/crab1.png');
      emag.load.image('go','./sprites/frecciaoro.png')
      emag.load.image('gog','./sprites/frecciaoro.png')
      emag.load.image('death','./sprites/death.png')
      emag.load.image('aga','./sprites/tarta.png')
      emag.load.image('ret','./sprites/colino.png')
            emag.load.image('cer','./sprites/morte.png')
            //emag.load.image('plai','./sprites/play1.png')
            emag.load.image('quattrofrespa','./sprites/FRECCE SPARA.png')
}
var roccia;
var bubble;
var platfor;
var cursori;
var colapower;
var player1;
var doin;
var doin1;
var gif;
var gif1;
var gif2;
var i;
var c;
var firetime = 0;
var exit;
var morto;
var score=0;
var go;
var inst;
var inst1;
var inst2;
var swim;
var ret;
//var plai;

function create() {

  pr=pr+1;

roccia= emag.add.physicsGroup();

for(i=0;i<26;i++){
  for(c=0;c<30;c++){roccia.create(i*30,c*30,'roccia')}
}

for(i=0;i<26;i++){
  for(c=0;c<30;c++){roccia.create(800+i*30,c*30,'platform')}
}

player1 = emag.add.sprite(400, 120, 'pescec');
 emag.physics.arcade.enable(player1);
 player1.body.collideWorldBounds=true;
 player1.anchor.setTo(0.3,0.3)

swim=player1.animations.add('swim')
player1.animations.play('swim',30,true)

doin = emag.add.sprite(100, 600, 'bottle');
 emag.physics.arcade.enable(doin);
 gif=doin.animations.add();
 gif.play(10,true)

doin1 = emag.add.sprite(700, 600, 'bottle1');
 emag.physics.arcade.enable(doin1);
  gif1=doin1.animations.add();
  gif1.play(10,true)

inst1=emag.add.sprite(600,550,'gog')
inst1.angle=90

inst2=emag.add.sprite(200,600,'gog')
inst2.angle=270

bubbles = emag.add.physicsGroup();

    var i;
    for(i=0; i<20; i++)
        if(i<4)bubbles.create(100,330, 'buble');
        else if(i<8)bubbles.create(650,330, 'buble');

    bubbles.forEach(function(item) {
        item.body.gravity.y = Math.random()*0;
        item.body.velocity.x = Math.random()*2*100;
        item.body.velocity.y = Math.random()*4*100;
    });

    bubbles.setAll('body.immovable', false);
    bubbles.setAll('body.bounce.x', 1);
    bubbles.setAll('body.bounce.y', 1);
    bubbles.setAll('body.collideWorldBounds', true);

platfor = emag.add.physicsGroup();


for(h=0; h<26; h++)if(h<10){platfor.create(h*30,0, 'platform')}
   else if(h>16){platfor.create(h*30,0, 'platform')}

go = emag.add.physicsGroup();

   exit=emag.add.physicsGroup();
    var h;
for(h=0; h<7; h++)if(h<10){exit.create(h*30+285,0, 'exit')}
 for(h=0; h<26; h++){platfor.create(h*30,670, 'platform')}
 for(h=0; h<26; h++){platfor.create(0,h*30, 'platform')}
 for(h=0; h<26; h++){platfor.create(770,h*30, 'platform')}
  for(h=0; h<8; h++)
      if(h==1){platfor.create(235,h*30, 'plat')}
      else if(h==0){platfor.create(235,h*30, 'plat')}
      else if(h==7){platfor.create(235,h*30, 'plat')}
   else if(h!==3){if(h!==4){if(h!==5){platfor.create(235,h*30,'platform')}}}

   for(h=0; h<8; h++)
   if(h!==3){if(h!==4){if(h!==5){platfor.create(265,h*30,'platform')}}}
   for(h=0; h<8; h++)
   if(h!==3){if(h!==4){if(h!==5){platfor.create(205,h*30,'platform')}}}


   //parete2
   for(h=0; h<8; h++)
      if(h==1){platfor.create(525,h*30, 'plat')}
      else if(h==0){platfor.create(525,h*30, 'plat')}
      else if(h==7){platfor.create(525,h*30, 'plat')}
   else if(h!==3){if(h!==4){if(h!==5){platfor.create(525,h*30,'platform')}}}

   for(h=0; h<8; h++)
   if(h!==3){if(h!==4){if(h!==5){platfor.create(495,h*30,'platform')}}}
   for(h=0; h<8; h++)
   if(h!==3){if(h!==4){if(h!==5){platfor.create(555,h*30,'platform')}}}

   //parete3
   for(h=0; h<11; h++)
      if(h==8){platfor.create((h*30)-5,240, 'plat')}
      else{platfor.create((h*30)-5,240, 'platform')}

   for(h=0; h<11; h++)
      if(h==10){platfor.create((h*30)-5,270, 'platform')}
   else{platfor.create((h*30)-5,270, 'plat')}
   for(h=0; h<11; h++)
   platfor.create((h*30)-5,300, 'platform')

   for(h=0; h<11; h++)platfor.create((h*30)-5,390, 'platform')

   for(h=0; h<11; h++)
      if(h==10){platfor.create((h*30)-5,420, 'platform')}
   else{platfor.create((h*30)-5,420, 'plat')}

   for(h=0; h<11; h++)if(h==9){platfor.create((h*30)-5,450, 'plat')}
   else if(h==8){platfor.create((h*30)-5,450, 'plat')}
   else{platfor.create((h*30)-5,450, 'platform')}
  //parete4

  for(h=0;h<4;h++)
  if(h==1){platfor.create(205+h*30,480, 'plat')}
  else if(h==2){platfor.create(205+h*30,480, 'plat')}
  else{platfor.create(205+h*30,480, 'platform')}

    for(h=0;h<4;h++)platfor.create(205+h*30,510, 'platform')


    for(h=0;h<4;h++)platfor.create(205+h*30,630, 'platform')

    for(h=0;h<4;h++)
    if(h==1){platfor.create(205+h*30,660, 'plat')}
    else if(h==2){platfor.create(205+h*30,660, 'plat')}
    else{platfor.create(205+h*30,660, 'platform')}

    for(h=0;h<4;h++)
    if(h==1){platfor.create(205+h*30,690, 'plat')}
    else if(h==2){platfor.create(205+h*30,690, 'plat')}
    else{platfor.create(205+h*30,690, 'platform')}

    //parete31
  for(h=0; h<11; h++)
       if(h==2){platfor.create(470+(h*30)-5,240, 'plat')}
       else{platfor.create(470+(h*30)-5,240, 'platform')}

    for(h=0; h<11; h++)
       if(h==0){platfor.create(470+(h*30)-5,270, 'platform')}
    else{platfor.create(470+(h*30)-5,270, 'plat')}

    for(h=0; h<11; h++)platfor.create(470+(h*30)-5,300, 'platform')

    for(h=0; h<11; h++)platfor.create(470+(h*30)-5,390, 'platform')

    for(h=0; h<11; h++)
       if(h==0){platfor.create(470+(h*30)-5,420, 'platform')}
    else{platfor.create(470+(h*30)-5,420, 'plat')}

    for(h=0; h<11; h++)
       if(h==1){platfor.create(470+(h*30)-5,450, 'plat')}
       else if(h==2){platfor.create(470+(h*30)-5,450, 'plat')}
       else{platfor.create(470+(h*30)-5,450, 'platform')}

       for(h=0;h<4;h++)
       if(h==1){platfor.create(260+205+h*30,480, 'plat')}
       else if(h==2){platfor.create(260+205+h*30,480, 'plat')}
       else{platfor.create(260+205+h*30,480, 'platform')}


       for(h=0;h<4;h++)platfor.create(260+205+h*30,510, 'platform')


       for(h=0;h<4;h++)platfor.create(260+205+h*30,630, 'platform')


       for(h=0;h<4;h++)
       if(h==1){platfor.create(260+205+h*30,660, 'plat')}
       else if(h==2){platfor.create(260+205+h*30,660, 'plat')}
       else{platfor.create(260+205+h*30,660, 'platform')}

       for(h=0;h<4;h++)
       if(h==1){platfor.create(260+205+h*30,690, 'plat')}
       else if(h==2){platfor.create(260+205+h*30,690, 'plat')}
       else{platfor.create(260+205+h*30,690, 'platform')}




 platfor.setAll('body.immovable', true);

function gen(){

    bubbles.create(30,330, 'buble');
      bubbles.create(700,330, 'buble');
      bubbles.create(30,130, 'buble');
        bubbles.create(700,130, 'buble');
        bubbles.create(30,530, 'buble');
          bubbles.create(700,530, 'buble');
    bubbles.setAll('body.immovable', false);
    bubbles.setAll('body.bounce.x', 1);
    bubbles.setAll('body.bounce.y', 1);
    bubbles.setAll('body.collideWorldBounds', true);
    bubbles.setAll('body.velocity.x', -200+Math.random()*8*50);
    bubbles.setAll('body.velocity.y', Math.random()*8*25);
  bubbles.setAll('addPhysicsGroup()')}




  var timer;
  timer=emag.time.create(true)
  timer.loop(1500, gen, this)

  timer.start()
  //if(time===0){plai.kill()}

colapower=emag.add.physicsGroup()

emag.paused=true;

//plai=emag.add.sprite(200,150,'plai')
//plai.scale.setTo(0.7,0.7)
    if(emag.paused=true){
        emag.input.onTap.addOnce(function () {

          emag.paused = false; }
        )
      }

//inst=emag.add.physicsGroup();

    inst=emag.add.sprite(800,-30,'aga')
      inst=emag.add.sprite(775,450,'quattrofrespa')

  //    var y;
  //    for(y=0;y<4;y++){inst=emag.add.sprite(900,220,'go')
  //    inst.anchor.setTo(0.5,1.5)
//      inst.angle=y*(90);
//      inst.scale.setTo(0.5,0.3)}

//      inst=emag.add.sprite(890,210,'pescec')
//      inst.scale.setTo(0.5,0.5)

//      inst=emag.add.sprite(850,335-55,'platform')
//      inst=emag.add.sprite(850,350-55,'go')
//      inst.angle=270;
//      inst.scale.setTo(0.5,0.3)
//      inst.anchor.setTo(0.5,0)

//      inst=emag.add.sprite(880,335-55,'platform')
//      inst=emag.add.sprite(895,360-55,'go')
//      inst.angle=180;
//      inst.scale.setTo(0.5,0.3)
//      inst.anchor.setTo(0.5,0)


//      inst=emag.add.sprite(910,335-55,'platform')
//      inst=emag.add.sprite(935,350-55,'go')
//      inst.angle=90;
//      inst.scale.setTo(0.5,0.3)
//      inst.anchor.setTo(0.5,0)


  //    inst=emag.add.sprite(880,305-55,'platform')
  //    inst=emag.add.sprite(895,310-55,'go')
  //    inst.scale.setTo(0.5,0.3)
  //    inst.anchor.setTo(0.5,0)

  //    inst=emag.add.sprite(850,445,'platform1')
  //    inst=emag.add.sprite(880,445,'platform1')
  //    inst=emag.add.sprite(910,445,'platform1')

    //     var style67 = { font: "bold 12px Arial", fill: "#ffee00",};
  //    emag.add.text(865,450,'SPACEBAR', style67)

  //    inst=emag.add.sprite(880,360,'pescec')
  //    var d;
  //    for(d=0;d<5;d++){inst=emag.add.sprite(900+(+Math.floor(Math.random()*(d*5))),370+(+Math.floor(Math.random()*(d*10))),'power')}

//      inst=emag.add.sprite(865,455,'go')
//      inst.angle=180;
//      inst.scale.setTo(0.5,0.5)
//      inst.anchor.setTo(0.5,0)

//      inst=emag.add.sprite(895,455,'go')
//      inst.angle=180;
//      inst.scale.setTo(0.5,0.5)
//      inst.anchor.setTo(0.5,0)

//      inst=emag.add.sprite(925,455,'go')
//      inst.angle=180;
//      inst.scale.setTo(0.5,0.5)
//      inst.anchor.setTo(0.5,0)

  //    inst=emag.add.sprite(855+50,655-120,'death')
  //    inst.scale.setTo(1.5,1.5)
  //    inst=emag.add.sprite(825+50,655-120,'buble')
  //    inst=emag.add.sprite(815+25,655-120,'death')
  //    inst.scale.setTo(1.5,1.5)


     ret=emag.add.physicsGroup();

}

score = 0;
morto = 0;



function update () {
//plai.kill()

emag.physics.arcade.collide(bubbles ,bubbles)
 emag.physics.arcade.collide(bubbles ,platfor)
 emag.physics.arcade.collide(bubbles,player1, killa)
 emag.physics.arcade.collide(platfor,player1)
 emag.physics.arcade.overlap(doin1,player1, aw)
 emag.physics.arcade.overlap(doin,player1, bx)
 emag.physics.arcade.overlap(bubbles,colapower, killb)
 emag.physics.arcade.overlap(platfor,colapower, killc)

player1.body.velocity.y = 0;
player1.body.velocity.x = 0;


 var spara;

  spara = emag.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);


var cursori;
 cursori = emag.input.keyboard.createCursorKeys();


function killa(player1,bubbles){score = 0;
  ret=emag.add.physicsGroup();


  morto= morto +1;
    ret.create(300,350,'cer')
    ret.scale.setTo(0.7,0.7)
  player1.kill();
  timer.stop();
  emag.input.onTap.addOnce(function () {
        ret.kill();
         emag.state.restart()
           Vaidx();
         morto=0;}
 )}

if (cursori.left.isDown)
    {  player1.body.velocity.x = -150;
    //  player1.scale.x=-1;
      if(spara.isDown){
      if(morto===0){
      colapower.create(player1.x-40, player1.y-10, 'power')
   colapower.forEach(function(item){item.body.velocity.x= -400} );
   colapower.forEach(function(item){item.body.velocity.y= -1000+(Math.floor(Math.random()*200)*10)} );
  // player1.scale.x=-1;
 }}}
 else if (cursori.right.isDown)
    {  player1.body.velocity.x = +150;
    //  player1.scale.x=1;
      if(spara.isDown){
      if(morto===0){
    colapower.create(player1.x+10, player1.y-10, 'power');
 colapower.forEach(function(item){item.body.velocity.x= 400} );
 colapower.forEach(function(item){item.body.velocity.y= -1000+(Math.floor(Math.random()*200)*10)} );
// player1.scale.x=1;
}}}

 else if (cursori.down.isDown)
    {player1.body.velocity.y = +150;
    if(spara.isDown){
    if(morto===0){
   colapower.create(player1.x-10, player1.y+30, 'power');
 colapower.forEach(function(item){item.body.velocity.y= 400} );
 colapower.forEach(function(item){item.body.velocity.x= -1000+(Math.floor(Math.random()*200)*10)} );
 //player1.scale.y=-1;
}}}

  else if (cursori.up.isDown)
     {player1.body.velocity.y = -150;
     //player1.scale.y=1;
     if(spara.isDown){
     if(morto===0)
  {  colapower.create(player1.x-10, player1.y-60, 'power');
  colapower.forEach(function(item){item.body.velocity.y= -400} );
  colapower.forEach(function(item){item.body.velocity.x= -1000+(Math.floor(Math.random()*200)*10)
    if(item.body.position.y<20){item.kill()} });
  //player1.scale.y=1;
}}}

  else{
   if(spara.isDown){
   if(morto===0)
   {  colapower.create(player1.x, player1.y, 'power');
   colapower.forEach(function(item){item.body.velocity.y=  -1000+(Math.floor(Math.random()*200)*10)})
   colapower.forEach(function(item){item.body.velocity.x= -1000+(Math.floor(Math.random()*200)*10)
   if(item.body.position.y<20){item.kill() }} )}
  }}

function vitta(){score = 0;
      ret.create(300,350,'ret')
      ret.scale.setTo(0.7,0.7)
  morto= morto +1;
    timer.stop();
  player1.kill();

   emag.input.onTap.addOnce(function () {
         ret.kill();
          emag.state.restart()
            Vaisx();
            morto = 0;
            }
  )}
function aw(doin1,player1){
   score = score+1
   doin1.destroy();
   inst1.destroy();
  if(score===2){vittaQ()}
}

function bx(doin,player1){
    doin.destroy();
    inst2.destroy();
    score= score+1;
   if(score===2){vittaQ()}
  }

function vittaQ(){
  exit.kill();
  go.create(300,50,'gog')
    go.create(450,50,'gog')
  score= 3;
}

if(score===3){if(player1.body.position.y<20){vitta();
 player1.kill()}}

function killb(bubbles,colapower){
  bubbles.kill();
}

function killc(platfor,colapower){
  colapower.kill();
 }
if(pr===0){emag.state.restart();
morto=0}

}



function renderL () {}
