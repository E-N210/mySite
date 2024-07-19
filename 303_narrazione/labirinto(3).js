/**
 * Generated from the Phaser Sandbox
 *
 * //phaser.io/sandbox/QxWvTecW
 *
 * This source requires Phaser 2.6.2
 */

var mega = new Phaser.Game(1000, 700, Phaser.AUTO, 'labirinto', { preload: preloadL, create: createL, update: updateL, render: renderL });

function preloadL() {

    mega.stage.backgroundColor = '#85b5e1';

    mega.load.baseURL = './';
    mega.load.crossOrigin = 'anonymous';

    mega.load.image('player', './sprites/colinono.png');
    mega.load.image('platform', './sprites/coralli.png');
    mega.load.image('platform1', './sprites/coralli1.png');
    mega.load.image('platform3', './sprites/alghe.png');
    mega.load.image('platform2', './sprites/corallo3.png');
    mega.load.spritesheet('lt', './sprites/freccia.png',60,30,1);
    mega.load.image('sfondo', './sprites/fondo.png')
    mega.load.image('bl', './sprites/bubble.png')
    mega.load.image('arrow', './sprites/arrow2.png')
      mega.load.image('clock', './sprites/clock.png')
    mega.load.image('ar', './sprites/2colapesce.png')
      mega.load.image('rock', './sprites/coralli.png')
      mega.load.image('rock1', './sprites/muro2.png')
    mega.load.spritesheet('coin', './sprites/coin1.png',32,32,6)
      mega.load.spritesheet('spcoin', './sprites/coin.png',32,32,6)
      mega.load.image('aga','./sprites/tarta.png')
      mega.load.image('timeleft','./sprites/vuoto.png')
      mega.load.image('ret','./sprites/colino.png')
      mega.load.image('cer','./sprites/morte.png')
      mega.load.image('quattrofre','./sprites/4 direzioni.png')
      //mega.load.image('plai','./sprites/play1.png')


}
var sfondo;
var player;
var platforms;
var cursors;
var jumpButton;
var timer;
var timemeno;
var parti;
var gif;
var i;
var q;
var coin;
var rock;
var bl;
var ghost;
var inst;
var rock;
var ret;
//var plai;

function createL() {

pr=pr+1;

sfondo = mega.add.physicsGroup();
sfondo.create(30*i,30*q, 'sfondo')

rock = mega.add.physicsGroup();

inst=mega.add.sprite(800,-30,'aga')

inst=mega.add.sprite(860,530,'quattrofre')

//inst=mega.add.sprite(890,215,'ar')
//inst.scale.setTo(0.5,0.5)
//var y;
//for(y=0;y<4;y++){inst=mega.add.sprite(900,230,'arrow')
//inst.anchor.setTo(0.5,1.75)
//inst.angle=y*(90);
//inst.scale.setTo(0.5,0.3)}

//inst=mega.add.sprite(855,305,'rock1')
//inst=mega.add.sprite(860,320,'arrow')
//inst.angle=270;
//inst.scale.setTo(0.5,0.3)
//inst.anchor.setTo(0.5,0)

//inst=mega.add.sprite(885,305,'rock1')
//inst=mega.add.sprite(900,330,'arrow')
//inst.angle=180;
//inst.scale.setTo(0.5,0.3)
//inst.anchor.setTo(0.5,0)


//inst=mega.add.sprite(915,305,'rock1')
//inst=mega.add.sprite(940,320,'arrow')
//inst.angle=90;
//inst.scale.setTo(0.5,0.3)
//inst.anchor.setTo(0.5,0)


//inst=mega.add.sprite(885,275,'rock1')
//inst=mega.add.sprite(900,280,'arrow')
//inst.scale.setTo(0.5,0.3)
//inst.anchor.setTo(0.5,0)

//inst=mega.add.sprite(900,410,'ar')
//inst.alpha=0.5;
//inst=mega.add.sprite(865,410,'coin')

//inst=mega.add.sprite(885,520,'spcoin')
//inst=mega.add.sprite(875,560,'clock')

    player =mega.add.sprite(400, 120, 'player');
    player.collideWorldBounds=false;


    mega.physics.arcade.enable(player);


  platforms = mega.add.physicsGroup();

coin=mega.add.sprite(310,190, 'coin')
  mega.physics.arcade.enable(coin);
  gif=coin.animations.add('flip')
  coin.animations.play('flip',15,true)

  coin1=mega.add.sprite(310,275, 'coin')
  mega.physics.arcade.enable(coin1);
  gif=coin1.animations.add('flip')
  coin1.animations.play('flip',15,true)

  coin2=mega.add.sprite(510,250, 'coin')
  mega.physics.arcade.enable(coin2);
  gif=coin2.animations.add('flip')
  coin2.animations.play('flip',15,true)

  coin3=mega.add.sprite(455,250, 'spcoin')
  mega.physics.arcade.enable(coin3);
  gif=coin3.animations.add('flip')
  coin3.animations.play('flip',15,true)

  coin4=mega.add.sprite(635,520, 'spcoin')
  mega.physics.arcade.enable(coin4);
  gif=coin4.animations.add('flip')
  coin4.animations.play('flip',15,true)

  coin5=mega.add.sprite(635,460, 'spcoin')
  mega.physics.arcade.enable(coin5);
  gif=coin5.animations.add('flip')
  coin5.animations.play('flip',15,true)

  coin6=mega.add.sprite(190,550, 'spcoin')
  mega.physics.arcade.enable(coin6);
  gif=coin6.animations.add('flip')
  coin6.animations.play('flip',15,true)

  coin7=mega.add.sprite(430,550, 'coin')
  mega.physics.arcade.enable(coin7);
  gif=coin7.animations.add('flip')
  coin7.animations.play('flip',15,true)

  coin8=mega.add.sprite(635,610, 'spcoin')
  mega.physics.arcade.enable(coin8);
  gif=coin8.animations.add('flip')
  coin8.animations.play('flip',15,true)

  coin9=mega.add.sprite(365,250, 'spcoin')
  mega.physics.arcade.enable(coin9);
  gif=coin9.animations.add('flip')
  coin9.animations.play('flip',15,true)


  coin10=mega.add.sprite(215,340, 'spcoin')
  mega.physics.arcade.enable(coin10);
  gif=coin10.animations.add('flip')
  coin10.animations.play('flip',15,true)

  coin11=mega.add.sprite(305,400, 'spcoin')
  mega.physics.arcade.enable(coin11);
  gif=coin11.animations.add('flip')
  coin11.animations.play('flip',15,true)

  coin12=mega.add.sprite(395,490, 'coin')
  mega.physics.arcade.enable(coin12);
  gif=coin12.animations.add('flip')
  coin12.animations.play('flip',15,true)

  coin13=mega.add.sprite(545,340, 'coin')
  mega.physics.arcade.enable(coin13);
  gif=coin13.animations.add('flip')
  coin13.animations.play('flip',15,true)

  coin14=mega.add.sprite(455,340, 'coin')
  mega.physics.arcade.enable(coin14);
  gif=coin14.animations.add('flip')
  coin14.animations.play('flip',15,true)


rock=mega.add.physicsGroup();
//labirinto
for(c=1;c<20;c++)
  if(c===11){rock.create(100+30*c,-20, 'rock')}
  else if(c===8){rock.create(100+30*c,-20, 'rock')}

  for(c=1;c<20;c++)
      if(c===11){rock.create(100+30*c,10, 'rock')}
        else if(c===8){rock.create(100+30*c,10, 'rock')}


    for(c=1;c<20;c++)
     if(c===11){rock.create(100+30*c,40, 'rock')}
    else if(c===8){rock.create(100+30*c,40, 'rock')}

    for(c=1;c<20;c++)
    if(c===11){rock.create(100+30*c,70, 'rock')}
    else if(c===8){rock.create(100+30*c,70, 'rock')}

    for(c=1;c<20;c++)
    if(c===11){rock.create(100+30*c,100, 'rock')}
    else if(c===8){rock.create(100+30*c,100, 'rock')}

    for(c=0;c<20;c++)
      if(c===11){rock.create(100+30*c,130, 'rock')}
    else if(c===8){rock.create(100+30*c,130, 'rock')}

     //riga1
     for(c=0;c<20;c++)
     if(c<8){rock.create(100+30*c,160, 'rock')}
     else if(c>11){rock.create(100+30*c,160, 'rock')}

     //riga2
     for(c=1;c<20;c++)
     if(c===8){platforms.create(100+30*c,190, 'platform1')}
     //riga3
     for(c=0;c<20;c++)
     if(c!==1){if(c!==3){if(c!==18){if(c!==8){if(c!==11){if(c!==13){platforms.create(100+30*c,220, 'platform')}}}}}}
     //riga4
     for(c=0;c<20;c++)
     if(c===2){platforms.create(100+30*c,250, 'platform1')}
     else if(c===8){platforms.create(100+30*c,250, 'platform')}
     else if(c===11){platforms.create(100+30*c,250, 'platform3')}
     else if(c===13){platforms.create(100+30*c,250, 'platform')}
     else if(c===19){platforms.create(100+30*c,250, 'platform1')}
     //riga5
     for(c=0;c<20;c++)
     if(c!==1){if(c!==3){if(c!==7){if(c!==10){if(c!==12){if(c!==13){if(c!==18){platforms.create(100+30*c,280, 'platform1')}}}}}}}
     //riga6
     for(c=0;c<20;c++)
     if(c===2){platforms.create(100+30*c,310, 'platform')}
     else if(c===7){platforms.create(100+30*c,310, 'platform3')}
     else if(c===11){platforms.create(100+30*c,310, 'platform2')}
     else if(c===13){platforms.create(100+30*c,310, 'platform')}
     //riga7
     for(c=0;c<20;c++)
     if(c!==1){if(c!==3){if(c!==4){if(c!==6){if(c!==8){if(c!==10){if(c!==12){if(c!==14){if(c!==15){if(c!==17){if(c!==18){platforms.create(100+30*c,340, 'platform')}}}}}}}}}}}
     //riga8
     for(c=0;c<20;c++) if(c===2){platforms.create(100+30*c,370, 'platform2')}
     else if(c===4){platforms.create(100+30*c,370, 'platform2')}
     else if(c===7){platforms.create(100+30*c,370, 'platform1')}
     else if(c===9){platforms.create(100+30*c,370, 'platform')}
     else if(c===11){platforms.create(100+30*c,370, 'platform3')}
     else if(c===13){platforms.create(100+30*c,370, 'platform2')}
     else if(c===15){platforms.create(100+30*c,370, 'platform3')}
     else if(c===17){platforms.create(100+30*c,370, 'platform1')}
     //riga9
    for(c=0;c<20;c++)
    if(c!==1){if(c!==3){if(c!==5){if(c!==7){if(c!==8){if(c!==10){if(c!==12){if(c!==14){if(c!==16)if(c!==18){{platforms.create(100+30*c,400, 'platform')}}}}}}}}}}

    //riga10
    for(c=0;c<20;c++)
    if(c===2){platforms.create(100+30*c,430, 'platform2')}
    else if(c===4){platforms.create(100+30*c,430, 'platform')}
    else if(c===9){platforms.create(100+30*c,430, 'platform1')}
    else if(c===13){platforms.create(100+30*c,430, 'platform')}
    else if(c===15){platforms.create(100+30*c,430, 'platform3')}
    else if(c===17){platforms.create(100+30*c,430, 'platform1')}
    //riga11
    for(c=0;c<20;c++)
    if(c===2){platforms.create(100+30*c,460, 'platform1')}
    else if(c===4){platforms.create(100+30*c,460, 'platform2')}
    else if(c===6){platforms.create(100+30*c,460, 'platform')}
    else if(c===8){platforms.create(100+30*c,460, 'platform1')}
    else if(c===10){platforms.create(100+30*c,460, 'platform')}
    else if(c===15){platforms.create(100+30*c,460, 'platform3')}
    else if(c===17){platforms.create(100+30*c,460, 'platform2')}
      else if(c===19){platforms.create(100+30*c,460, 'platform')}

    //riga12
    for(c=0;c<20;c++)
    if(c!==1){if(c!==5){if(c!==3){if(c!==7){if(c!==8){if(c!==10){if(c!==12){if(c!==15){if(c!==17){if(c!==11){if(c!==16){
      {platforms.create(100+30*c,490, 'platform')}}}}}}}}}}}}

    //riga13

    for(c=0;c<20;c++)
    if(c!==1){if(c!==15){if(c!==3){if(c!==4){if(c!==6){if(c!==9){if(c!==12){if(c!==14){if(c!==8){if(c!==13){if(c!==16){if(c!==18)
      {platforms.create(100+30*c,520, 'platform')}}}}}}}}}}}}


        for(c=0;c<20;c++)
        if(c===2){platforms.create(100+30*c,550, 'platform1')}
        else if(c===7){platforms.create(100+30*c,550, 'platform3')}
        else if(c===12){platforms.create(100+30*c,550, 'platform2')}


        for(c=0;c<20;c++)if(c!==1){if(c!==2){if(c!==7){if(c!==12){platforms.create(100+30*c,580, 'platform')}}}}

        for(c=0;c<20;c++)

        for(c=0;c<20;c++)
        if(c!==9){if(c!==10){if(c!==8){if(c!==11){
          {rock.create(100+30*c,640, 'rock')}}}}}

                for(c=0;c<20;c++)

                if(c<8){rock.create(100+30*c,670, 'rock')}
                else if(c>11){rock.create(100+30*c,670, 'rock')}

                for(c=0;c<20;c++){rock.create(70,180+30*c,'rock')}
                for(c=0;c<20;c++){rock.create(700,180+30*c,'rock')}

platforms.setAll('body.immovable', true)
rock.setAll('body.immovable', true);

//uscita
lt = mega.add.sprite(340, 700, 'lt');
  mega.physics.arcade.enable(lt);
  lt.scale.setTo(2,1)

        var style1 = { font: "bold 45px Arial", fill: "#d6bd58", boundsAlignH: "center", boundsAlignV: "middle" };


        ret=mega.add.physicsGroup();

//TEMPO SETTAGGIO//



//timer
time=50;
    timer = mega.time.create(false);

    timemeno= mega.add.text(880,150,time, style1)

            var style1 = { font: "bold 45px Arial", fill: "#d6bd58", boundsAlignH: "center", boundsAlignV: "middle" };

    timer.loop(1000, updateCounter, this);
    timer.loop(5000, coinz1, this);
    timer.loop(10000, coinz2, this);
    timer.loop(15000, coinz, this);
    timer.start()

    coinz()
function updateCounter() {
      time--;
      timemeno.text = time
       if(time===0){due();
         timemeno.text = ""}}


//////

ghost=1;

function coinz(){

        coin.destroy();
         coin1.destroy();
          coin2.destroy();
          coin3.destroy();
            coin4.destroy();
              coin5.destroy();
              coin6.destroy();
                coin7.destroy();
                  coin8.destroy();
                  coin9.destroy();
                  coin10.destroy();
                  coin11.destroy();
                  coin12.destroy();
                  coin13.destroy();
                  coin14.destroy();



                  coin12=mega.add.sprite(395,490, 'coin')
                  mega.physics.arcade.enable(coin12);
                  gif=coin12.animations.add('flip')
                  coin12.animations.play('flip',15,true)

                  coin13=mega.add.sprite(545,340, 'coin')
                  mega.physics.arcade.enable(coin13);
                  gif=coin13.animations.add('flip')
                  coin13.animations.play('flip',15,true)

                  coin4=mega.add.sprite(635,520, 'coin')
                  mega.physics.arcade.enable(coin4);
                  gif=coin4.animations.add('flip')
                  coin4.animations.play('flip',15,true)


                                  coin=mega.add.sprite(310,190, 'coin')
                                      mega.physics.arcade.enable(coin);
                                      gif=coin.animations.add('flip')
                                      coin.animations.play('flip',15,true)

                                      coin1=mega.add.sprite(310,275, 'coin')
                                      mega.physics.arcade.enable(coin1);
                                      gif=coin1.animations.add('flip')
                                      coin1.animations.play('flip',15,true)
      }
function coinz1() {
    coin.destroy();
         coin1.destroy();
          coin2.destroy();
          coin3.destroy();
            coin4.destroy();
              coin5.destroy();
              coin6.destroy();
                coin7.destroy();
                  coin8.destroy();
                  coin9.destroy();
                  coin10.destroy();
                  coin11.destroy();
                  coin12.destroy();
                  coin13.destroy();
                  coin14.destroy();


                    coin2=mega.add.sprite(510,250, 'spcoin')
                    mega.physics.arcade.enable(coin2);
                    gif=coin2.animations.add('flip')
                    coin2.animations.play('flip',15,true)

                    coin10=mega.add.sprite(215,340, 'spcoin')
                    mega.physics.arcade.enable(coin10);
                    gif=coin10.animations.add('flip')
                    coin10.animations.play('flip',15,true)

                    coin11=mega.add.sprite(305,400, 'spcoin')
                    mega.physics.arcade.enable(coin11);
                    gif=coin11.animations.add('flip')
                    coin11.animations.play('flip',15,true)

                    coin14=mega.add.sprite(455,340, 'spcoin')
                    mega.physics.arcade.enable(coin14);
                    gif=coin14.animations.add('flip')
                    coin14.animations.play('flip',15,true)

                    coin3=mega.add.sprite(455,250, 'spcoin')
                    mega.physics.arcade.enable(coin3);
                    gif=coin3.animations.add('flip')
                    coin3.animations.play('flip',15,true)

      }

function coinz2(){
   coin.destroy();
   coin1.destroy();
    coin2.destroy();
    coin3.destroy();
      coin4.destroy();
        coin5.destroy();
        coin6.destroy();
          coin7.destroy();
            coin8.destroy();
            coin9.destroy();
            coin10.destroy();
            coin11.destroy();
            coin12.destroy();
            coin13.destroy();
            coin14.destroy();

            coin5=mega.add.sprite(635,460, 'spcoin')
            mega.physics.arcade.enable(coin5);
            gif=coin5.animations.add('flip')
            coin5.animations.play('flip',15,true)

            coin6=mega.add.sprite(190,550, 'spcoin')
            mega.physics.arcade.enable(coin6);
            gif=coin6.animations.add('flip')
            coin6.animations.play('flip',15,true)

            coin7=mega.add.sprite(430,550, 'spcoin')
            mega.physics.arcade.enable(coin7);
            gif=coin7.animations.add('flip')
            coin7.animations.play('flip',15,true)

            coin8=mega.add.sprite(635,610, 'spcoin')
            mega.physics.arcade.enable(coin8);
            gif=coin8.animations.add('flip')
            coin8.animations.play('flip',15,true)

            coin9=mega.add.sprite(365,250, 'spcoin')
            mega.physics.arcade.enable(coin9);
            gif=coin9.animations.add('flip')
            coin9.animations.play('flip',15,true)

}

//bl = mega.add.physicsGroup();
  // for(cont=1; cont<1000; cont++){ if(cont>15){
  //  bl.create( (Math.floor(Math.random()*20)*40), Math.floor(Math.random()*2)*50*cont-300,'bl')}}



function due(){
        timer.stop();
        player.kill();
        ret.create(300,350,'cer');
        ret.scale.setTo(0.7,0.7)
        coin.destroy();
         coin1.destroy();
          coin2.destroy();
          coin3.destroy();
            coin4.destroy();
              coin5.destroy();
              coin6.destroy();
                coin7.destroy();
                  coin8.destroy();
                  coin9.destroy();
                  coin10.destroy();
                  coin11.destroy();
                  coin12.destroy();
                  coin13.destroy();
                  coin14.destroy();
        mega.input.onTap.addOnce(function () {
                mega.state.restart()
                Vaidx();





                stato=pagina045;//QUI MI DA ERRORE




              }
        ) }

        mega.paused=true;
        //plai=mega.add.sprite(200,150,'plai')
        //plai.scale.setTo(0.7,0.7)
             if(mega.paused=true){
               mega.input.onTap.addOnce(function () {
          //       plai.kill();
                       mega.paused = false;}
               )
             }


cursors = mega.input.keyboard.createCursorKeys();
    jumpButton = mega.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
}

function updateL () {

   if(ghost===1){mega.physics.arcade.collide(player, platforms)};
    mega.physics.arcade.collide(player, lt, uno);
    mega.physics.arcade.collide(player, rock);
    mega.physics.arcade.collide(player, coin, tempius);
     mega.physics.arcade.collide(player, coin1, tempius);
     mega.physics.arcade.collide(player, coin2, tempiu);
     mega.physics.arcade.collide(player, coin3, tempiu);
        mega.physics.arcade.collide(player, coin4, tempius);
            mega.physics.arcade.collide(player, coin5, tempiu);
                mega.physics.arcade.collide(player, coin6, tempiu);
                    mega.physics.arcade.collide(player, coin7, tempiu);
                        mega.physics.arcade.collide(player, coin8, tempiu);
                            mega.physics.arcade.collide(player, coin9, tempiu);
                            mega.physics.arcade.collide(player, coin10, tempiu);
                            mega.physics.arcade.collide(player, coin11, tempiu);
                            mega.physics.arcade.collide(player, coin12, tempius);
                            mega.physics.arcade.collide(player, coin13, tempius);
                            mega.physics.arcade.collide(player, coin14, tempiu);






//TEMPO UPDATE///







function tempius(player,coin){
  coin.destroy();
  ghost=0;  }

  function tempiu(player,coin){
    time= time+11;
    coin.destroy();

  }


if(ghost!==1){platforms.alpha= 0;
setTimeout(function(){ghost=1;platforms.alpha=1;},5000);}




    player.body.velocity.x = 0;
    player.body.velocity.y= 0;

function uno(player,lt){
  coin.destroy();
   coin1.destroy();
    coin2.destroy();
    coin3.destroy();
      coin4.destroy();
        coin5.destroy();
        coin6.destroy();
          coin7.destroy();
            coin8.destroy();
            coin9.destroy();
            coin10.destroy();
            coin11.destroy();
            coin12.destroy();
            coin13.destroy();
            coin14.destroy();
      timemeno.text = "";
      timer.stop();
      player.kill();
      gif=null;
      ret.create(300,350,'ret')
      ret.scale.setTo(0.7 , 0.7)
      mega.input.onTap.addOnce(function () {
              mega.state.restart()
              ret.kill();
                Vaisx();




              stato=pagina030//QUI MI DA ERRORE




          }
      ) }

var style1 = { font: "bold 45px Arial", fill: "#d6bd58", boundsAlignH: "center", boundsAlignV: "middle" };


    if (cursors.left.isDown)
    {
        player.body.velocity.x = -200;
    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x = +200;
    }

    else if (cursors.up.isDown)
    {
        player.body.velocity.y = -200;
    }

    else if (cursors.down.isDown)
    {
        player.body.velocity.y = 200;
    }
    if(pr===0){mega.state.restart()}
  }

function renderL () {

}
