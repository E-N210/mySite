/**
 * Generated from the Phaser Sandbox
 *
 * //phaser.io/sandbox/buojelDo
 *
 * This source requires Phaser 2.6.2
 */

var game = meduse = new Phaser.Game(1000, 700, Phaser.AUTO, 'meduse', { preload: uno, create: due, update: tre, render: qua, });

function uno() {

    game.stage.backgroundColor = '#85b5e1';

    game.load.baseURL = './';
    game.load.crossOrigin = 'anonymous';

    game.load.spritesheet('cola', './sprites/colameduse.png',40,50,5);
    game.load.image('pla', 'sprites/medusa1.png');
    game.load.image('obs','sprites/medusa2.png' );
    game.load.spritesheet('crown','sprites/corona.png',116,89,2 );
    game.load.image('sfondo', './sprites/FONDALE1.png')
    game.load.image('death', './sprites/death.png')
    game.load.image('ar', './sprites/arrow2.png')
    game.load.image('rock', './sprites/muro1.png')
    game.load.image('aga','./sprites/tarta.png')
    game.load.image('ret','./sprites/colino.png')
          game.load.image('cer','./sprites/morte.png')
              game.load.image('duefre','./sprites/dx sx.png')
            //  game.load.image('plai','./sprites/play1.png')
}


var cola;
var platforms;
var meduse;
var cursors;
var jumpButton;
var cont;
var plc;
var partenza;
var gif;
var sc;
var sd;
var aga;
var fif;
var ret;

var callRanderOnlyOnce = 0
//var plai;

function due() {
  callRanderOnlyOnce = 0

  pr=pr+1;

  sfondo =game.add.sprite(0, 0, 'sfondo');

    cola = game.add.sprite(380, 100, 'cola');
      game.physics.arcade.enable(cola);
      cola.anchor.setTo(0.5,0.5)

  fif=cola.animations.add('swim')
  cola.animations.play('swim',10,true)

    cola.body.collideWorldBounds = true;

    crown = game.add.sprite(300, 650, 'crown');
    game.physics.arcade.enable(crown);
    crown.body.velocity.x= 300;
    crown.body.bounce.x=true;
    crown.body.collideWorldBounds = true;

    gif=crown.animations.add('shine')
    crown.animations.play('shine',20,true)

obs = game.add.physicsGroup();
   for(cont=1; cont<120; cont++){ if(cont>15){
    obs.create( (Math.floor(Math.random()*18)*150)-600, Math.floor(Math.random()*2)*50*cont-300,'obs')}}

    meduse = game.add.physicsGroup();
       for(cont=1; cont<120; cont++){ if(cont>15){
        meduse.create( (Math.floor(Math.random()*18)*150)-600, Math.floor(Math.random()*2)*45*cont-200,'pla')}}







    pla = game.add.physicsGroup();
      for(plc=0;plc<10;plc++){pla.create(plc*100, 700, 'pla')}

ret=game.add.physicsGroup();
game.paused=true;
//plai=game.add.sprite(200,150,'plai')
//plai.scale.setTo(0.7,0.7)
    if(game.paused=true){
      game.input.onTap.addOnce(function () {
  //      plai.kill()
              game.paused = false; }
      )
    }

aga=game.add.physicsGroup();
aga.create(800,-30,'aga')
aga.create(860,530,'duefre')


        //  inst=game.add.sprite(825+50,605-80,'pla')
      //  inst.scale.setTo(0.5,0.5)
        //  inst=game.add.sprite(815+25,605-80,'death')
      //    inst.scale.setTo(1.5,1.5)
      //    inst=game.add.sprite(855+50,605-80,'death')
      //    inst.scale.setTo(1.5,1.5)

        //  inst=game.add.sprite(815+50,445,'crown')
      //    inst.scale.setTo(0.5,0.5)
      //    inst=game.add.sprite(795+50,445,'ar')
      //    inst.scale.setTo(0.6,0.6)
      //    inst=game.add.sprite(865+50,445,'ar')
      //    inst.scale.setTo(0.6,0.6)

    //      inst=game.add.sprite(850,285+70,'rock')
      //    inst=game.add.sprite(850,300+70,'ar')
        //  inst.angle=270;
      //    inst.scale.setTo(0.5,0.3)
      //    inst.anchor.setTo(0.5,0)

      //    inst=game.add.sprite(910,285+70,'rock')
    //      inst=game.add.sprite(935,300+70,'ar')
      //    inst.angle=90;
      //    inst.scale.setTo(0.5,0.3)
        //  inst.anchor.setTo(0.5,0)

        //  inst=game.add.sprite(880,255+70,'rock')
        //  inst=game.add.sprite(880,285+70,'rock')

          //inst=game.add.sprite(910,305,'cola')
        //  inst.scale.setTo(1,1)
        //  inst.angle=180

          //var y;
          //for(y=0;y<2;y++){inst=game.add.sprite(895,280,'ar')
          //inst.anchor.setTo(0.5,2)
          //inst.angle=90+y*(180);
          //inst.scale.setTo(0.5,0.3)}

          //game.physics.arcade.collide(cola,inst);
          //game.physics.arcade.collide(crown,inst);

}


function tre () {



    game.physics.arcade.overlap(cola, obs, death);
    game.physics.arcade.collide(cola, pla, death);
    game.physics.arcade.collide(cola, meduse, death);
    game.physics.arcade.overlap(cola, crown, win);
    game.physics.arcade.collide(cola, aga);


    cola.body.velocity.x = 0;
    cola.body.velocity.y = 35;



function death(cola,obs){
  ret=game.add.physicsGroup();
     cola.kill();
     sc=0;
     ret.create(300,350,'cer')
     ret.scale.setTo(0.7,0.7)
    game.input.onTap.addOnce(function () {
      ret.kill();
            game.state.restart();
          Vaidx();
          sc=1;
         }
    ) }

    function win(){
      ret=game.add.physicsGroup();
     cola.body.x = crown.body.x;
     cola.body.y = crown.body.y;
     cola.angle=0;
     crown.body.velocity.y = -300;
     cola.collideWorldBounds=false;
     crown.collideWorldBounds=false;
      sd=0;
      ret.create(300,350,'ret')
      ret.scale.setTo(0.7,0.7)

    game.input.onTap.addOnce(function () {
      ret.kill()
            game.state.restart()
            $(paginaCorrente.title).fadeOut();
            $(paginaCorrente.titleita).fadeOut();
                  stato = "pagina120"
                  if(callRanderOnlyOnce==0){

                    rander();
                    callRanderOnlyOnce = 1
                  }
                  console.log("rander was called")
        sd=1
      }
    ) }

    if(sc!==0){obs.setAll('body.velocity.y', -400);
    meduse.setAll('body.velocity.y', -400);

        obs.setAll('body.velocity.x', -100);
    meduse.setAll('body.velocity.x', 100);}

    else{obs.setAll('body.velocity.y', 0);
    meduse.setAll('body.velocity.y', 0);

        obs.setAll('body.velocity.x', 0);
    meduse.setAll('body.velocity.x', 0);}

    if(crown.body.position.x>780-116){
      crown.body.velocity.x=-300;
    }


    if (cursors.left.isDown)  {cola.body.velocity.x = -350;
//    cola.angle=210
}

    else if (cursors.right.isDown)  {if(cola.body.x<720){cola.body.velocity.x = 350;
//    cola.angle=150
}}

    if(pr===0){
      game.state.restart();
      sc=1
      sd=1

      }

    //else if (cursors.up.isDown)  {cola.body.velocity.y = -250;}

    //else if (cursors.down.isDown)  {cola.body.velocity.y = 250;}

    }


function qua() {

}
