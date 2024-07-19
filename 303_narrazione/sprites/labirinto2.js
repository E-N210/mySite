/**
 * Generated from the Phaser Sandbox
 *
 * //phaser.io/sandbox/QxWvTecW
 *
 * This source requires Phaser 2.6.2
 */

var mega = new Phaser.Game(800, 700, Phaser.AUTO, 'labirinto', { preload: preloadL, create: createL, update: updateL, render: renderL });

function preloadL() {

    mega.stage.backgroundColor = '#85b5e1';

    mega.load.baseURL = './';
    mega.load.crossOrigin = 'anonymous';

    mega.load.image('player', './sprites/cola1.png');
    mega.load.spritesheet('platform', './sprites/coralli2.png',30,30,2);
    mega.load.spritesheet('lt', './sprites/freccia.png',60,30,1);
    mega.load.spritesheet('rock', './sprites/coralliB2.png',30,30,2)
    mega.load.spritesheet('rock1', './sprites/coralli2.png',30,30,2)
    mega.load.spritesheet('rock2', './sprites/coralliB2.png',30,30,2)
    mega.load.image('sfondo', './sprites/fondale.png')

}
var sfondo;
var player;
var platforms;
var cursors;
var jumpButton;
var timer;
var timemeno;
var parti;
var rock;
var gif;

function createL() {


sfondo =mega.add.sprite(0, 0, 'sfondo',5);

    player =mega.add.sprite(400, 20, 'player');
    player.collideWorldBounds=false;


    mega.physics.arcade.enable(player);

  platforms = mega.add.sprite('platform');
  mega.physics.arcade.enable('platforms')

//labirinto
for(c=0;c<20;c++)
  if(c<8){platforms.create(100+30*c,-20, 'rock')}
  else if(c>11){platforms.create(100+30*c,-20, 'rock')}
  else if(c===11){platforms.create(100+30*c,-20, 'platform')}
  else if(c===8){platforms.create(100+30*c,-20, 'platform')}
  else if(c===10){platforms.create(100+30*c,-30, 'platform')}
  else if(c===9){platforms.create(100+30*c,-30, 'platform')}

  for(c=0;c<20;c++)
        if(c<8){platforms.create(100+30*c,10, 'rock')}
        else if(c>11){platforms.create(100+30*c,10, 'rock')}
        else if(c===11){platforms.create(100+30*c,10, 'platform')}
        else if(c===8){platforms.create(100+30*c,10, 'platform')}

    for(c=0;c<20;c++)
    if(c<8){platforms.create(100+30*c,40, 'rock')}
    else if(c>11){platforms.create(100+30*c,40, 'rock')}
    else if(c===11){platforms.create(100+30*c,40, 'platform')}
    else if(c===8){platforms.create(100+30*c,40, 'platform')}

    for(c=0;c<20;c++)
    if(c<8){platforms.create(100+30*c,70, 'rock')}
    else if(c>11){platforms.create(100+30*c,70, 'rock')}
    else if(c===11){platforms.create(100+30*c,70, 'platform')}
    else if(c===8){platforms.create(100+30*c,70, 'platform')}

    for(c=0;c<20;c++)
    if(c<8){platforms.create(100+30*c,100, 'rock')}
    else if(c>11){platforms.create(100+30*c,100, 'rock')}
    else if(c===11){platforms.create(100+30*c,100, 'platform')}
    else if(c===8){platforms.create(100+30*c,100, 'platform')}

    for(c=0;c<20;c++)
    if(c<8){platforms.create(100+30*c,130, 'rock')}
    else if(c>11){platforms.create(100+30*c,130, 'rock')}
    else if(c===11){platforms.create(100+30*c,130, 'platform')}
    else if(c===8){platforms.create(100+30*c,130, 'platform')}
     //riga1
     for(c=0;c<20;c++)
     if(c<9){platforms.create(100+30*c,160, 'platform')}
     else if(c>10){platforms.create(100+30*c,160, 'platform')}

     //riga2
     for(c=0;c<20;c++)
     if(c===0){platforms.create(100+30*c,190, 'platform')}
     else if(c===8){platforms.create(100+30*c,190, 'rock2')}
     else if(c===19){platforms.create(100+30*c,190, 'platform')}
     //riga3
     for(c=0;c<20;c++)
     if(c===0){platforms.create(100+30*c,220, 'platform')}
     else if(c===19){platforms.create(100+30*c,220, 'platform')}
     else if(c!==1){if(c!==3){if(c!==18){platforms.create(100+30*c,220, 'rock1')}}}
     //riga4
     for(c=0;c<20;c++)
     if(c===0){platforms.create(100+30*c,250, 'platform')}
     else if(c===2){platforms.create(100+30*c,250, 'rock2')}
     else if(c===9){platforms.create(100+30*c,250, 'rock2')}
     else if(c===11){platforms.create(100+30*c,250, 'rock1')}
     else if(c===13){platforms.create(100+30*c,250, 'rock1')}
     else if(c===19){platforms.create(100+30*c,250, 'platform')}
     //riga5
     for(c=0;c<20;c++)
     if(c===0){platforms.create(100+30*c,280, 'platform')}
     else if(c===19){platforms.create(100+30*c,280, 'platform')}
     else if(c!==1){if(c!==3){if(c!==10){if(c!==12){if(c!==18){platforms.create(100+30*c,280, 'rock1')}}}}
     //riga6
     for(c=0;c<20;c++)
     if(c===0){platforms.create(100+30*c,310, 'platform')}
     else if(c===2){platforms.create(100+30*c,310, 'rock1')}
     else if(c===7){platforms.create(100+30*c,310, 'rock2')}
     else if(c===11){platforms.create(100+30*c,310, 'rock1')}
     else if(c===13){platforms.create(100+30*c,310, 'rock1')}
     else if(c===19){platforms.create(100+30*c,310, 'platform')}
     //riga7
     for(c=0;c<20;c++)
     if(c===0){platforms.create(100+30*c,340, 'platform')}
     else if(c===19){platforms.create(100+30*c,340, 'platform')}
     else if(c!==1){if(c!==3){if(c!==6){if(c!==8){if(c!==10){if(c!==12){if(c!==14){if(c!==18){platforms.create(100+30*c,340, 'rock2')}}}}}}}}
     //riga8
     for(c=0;c<20;c++)
     if(c===0){platforms.create(100+30*c,370, 'platform')}
     else if(c===2){platforms.create(100+30*c,370, 'rock2')}
     else if(c===4){platforms.create(100+30*c,370, 'rock2')}
     else if(c===7){platforms.create(100+30*c,370, 'rock1')}
     else if(c===9){platforms.create(100+30*c,370, 'rock2')}
     else if(c===11){platforms.create(100+30*c,370, 'rock1')}
     else if(c===13){platforms.create(100+30*c,370, 'rock1')}
     else if(c===15){platforms.create(100+30*c,370, 'rock2')}
     else if(c===17){platforms.create(100+30*c,370, 'rock2')}
     else if(c===19){platforms.create(100+30*c,370, 'platform')}
     //riga9
    for(c=0;c<20;c++)
    if(c===0){platforms.create(100+30*c,400, 'platform')}
    else if(c===19){platforms.create(100+30*c,400, 'platform')}
    else if(c!==1){if(c!==3){if(c!==5){if(c!==8){if(c!==10){if(c!==12){if(c!==14){if(c!==16)if(c!==18){{platforms.create(100+30*c,400, 'rock2')}}}}}}}}}

    //riga10
    for(c=0;c<20;c++)
    if(c===2){platforms.create(100+30*c,430, 'rock1')}
    else if(c===0){platforms.create(100+30*c,430, 'rock1')}
    else if(c===4){platforms.create(100+30*c,430, 'rock1')}
    else if(c===9){platforms.create(100+30*c,430, 'rock1')}
    else if(c===13){platforms.create(100+30*c,430, 'rock1')}
    else if(c===15){platforms.create(100+30*c,430, 'rock2')}
    else if(c===17){platforms.create(100+30*c,430, 'rock2')}
    else if(c===19){platforms.create(100+30*c,430, 'platform')}
    //riga11
    for(c=0;c<20;c++)
    if(c===2){platforms.create(100+30*c,460, 'rock1')}
    else if(c===0){platforms.create(100+30*c,460, 'rock1')}
    else if(c===4){platforms.create(100+30*c,460, 'rock1')}
    else if(c===6){platforms.create(100+30*c,460, 'rock1')}
    else if(c===8){platforms.create(100+30*c,460, 'rock1')}
    else if(c===9){platforms.create(100+30*c,460, 'rock1')}
    else if(c===10){platforms.create(100+30*c,460, 'rock1')}
    else if(c===15){platforms.create(100+30*c,460, 'rock2')}
    else if(c===17){platforms.create(100+30*c,460, 'rock2')}
    else if(c===19){platforms.create(100+30*c,460, 'platform')}

    //riga12
    for(c=0;c<20;c++)
    if(c===0){platforms.create(100+30*c,490, 'platform')}
    else if(c===19){platforms.create(100+30*c,490, 'platform')}
    else if(c!==1){if(c!==5){if(c!==3){if(c!==7){if(c!==8){if(c!==11){if(c!==16){platforms.create(100+30*c,490, 'rock')}}}}}}}

    //riga13

    for(c=0;c<20;c++)
    if(c===0){platforms.create(100+30*c,520, 'platform')}
    else if (c===19) {platforms.create(100+30*c,520, 'platform')}
    else if(c!==1){if(c!==15){if(c!==3){if(c!==14){if(c!==8){if(c!==13){if(c!==16){if(c!==18){platforms.create(100+30*c,520, 'rock')}}}}}}}}


        for(c=0;c<20;c++)
        if(c===0){platforms.create(100+30*c,550, 'platform')}
        else if(c===2){platforms.create(100+30*c,550, 'platform')}
        else if(c===7){platforms.create(100+30*c,550, 'rock')}
        else if(c===12){platforms.create(100+30*c,550, 'rock')}
        else if(c===19){platforms.create(100+30*c,550, 'platform')}

        for(c=0;c<20;c++)
        if(c===0){platforms.create(100+30*c,580, 'platform')}
        else if(c===19){platforms.create(100+30*c,580, 'platform')}
        else if(c!==1){if(c!==15){platforms.create(100+30*c,580, 'rock')}}

        for(c=0;c<20;c++)
        if(c===0){platforms.create(100+30*c,610, 'platform')}
        else if(c===19){platforms.create(100+30*c,610, 'platform')}

        for(c=0;c<20;c++)
        if(c!==9){if(c!==10){
          {platforms.create(100+30*c,640, 'platform')}}}

                for(c=0;c<20;c++)
                if(c!==9){if(c!==10){
                if(c===0){platforms.create(100+30*c,670, 'platform')}
                else if(c===19){platforms.create(100+30*c,670, 'platform')}
                else{platforms.create(100+30*c,670, 'rock')}}}



platforms.setAll('body.immovable', true);

//uscita
lt = mega.add.sprite(370, 700, 'lt');
  mega.physics.arcade.enable(lt);

        var style1 = { font: "bold 45px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

   mega.paused=true;
        if(mega.paused=true){
          parti= mega.add.text(250,155,"cilcca pe partì", style1)
          mega.input.onTap.addOnce(function () {
                  mega.paused = false;
                parti.text=("") }
          )
        }



    time=30;
    timer = mega.time.create(false);

    timemeno= mega.add.text(100,105,"TEMPO: "+time, style1)

    timer.loop(1000, updateCounter, this);
    timer.start()

    function updateCounter() {
      time--;
      timemeno.text = 'TEMPO: ' + time
       if(time===0){due();
         timemeno.text = ""}
           }



  function due(){

        mega.paused=true;
         var style1 = { font: "bold 39px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
         var style2 = { font: "bold 30px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
        mega.add.text(100,655, "NUN HAI TRUVATU A' VIA", style1);
        mega.add.text(250,705, 'clicca pe proseguì', style2);
        mega.input.onTap.addOnce(function () {
                mega.paused = false;
                mega.state.restart()
                Vaidx();
              }
        ) }




    cursors = mega.input.keyboard.createCursorKeys();
    jumpButton = mega.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
}}




function updateL () {

    mega.physics.arcade.collide(player, platforms);
    mega.physics.arcade.collide(player, lt, uno);

    player.body.velocity.x = 0;
    player.body.velocity.y= 0;



function uno(player,lt){
      timemeno.text = "";
      mega.paused=true;
       var style1 = { font: "bold 45px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
       var style2 = { font: "bold 30px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
      mega.add.text(195,655, "HAI TRUVAT' A VIA", style1);
      mega.add.text(250,705, 'clicca pe proseguì', style2);
      mega.input.onTap.addOnce(function () {
              mega.paused = false;
              mega.state.restart()
                Vaisx();}
      ) }


    if (cursors.left.isDown)
    {
        player.body.velocity.x = -100;
    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x = +100;
    }

    else if (cursors.up.isDown)
    {
        player.body.velocity.y = -100;
    }

    else if (cursors.down.isDown)
    {
        player.body.velocity.y = 100;
    }

}

function renderL () {

}
