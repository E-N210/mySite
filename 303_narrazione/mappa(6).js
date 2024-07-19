/**
 * Generated from the Phaser Sandbox
 *
 * //phaser.io/sandbox/QxWvTecW
 *
 * This source requires Phaser 2.6.2
 */

var agem = new Phaser.Game(1000, 700, Phaser.AUTO, 'mappa', { preload: preloadL, create: createL, update: updateL, render: renderL });

function preloadL() {

    agem.stage.backgroundColor = '#85b5e1';
     agem.load.image('platform', './sprites/frecce.png');
      agem.load.image('000', './sprites/1unnamed.png');


}


function createL() {
var coralli;
var sfondo;

sfondo=agem.add.sprite(0,0,'df')


var style1 = { font: "bold 14px Arial", fill: "#00bb00", boundsAlignH: "center", boundsAlignV: "middle" };
var style2 = { font: "bold 14px Arial", fill: "#ffffff", boundsAlignH: "center", boundsAlignV: "middle" };
var style3 = { font: "bold 14px Arial", fill: "#ff0000", boundsAlignH: "center", boundsAlignV: "middle" };
var style4 = { font: "bold 14px Arial", fill: "#707070", boundsAlignH: "center", boundsAlignV: "middle" };
var style5 = { font: "bold 14px Arial", fill: "#ffff00", boundsAlignH: "center", boundsAlignV: "middle" };


intro=agem.add.button(10,350,"000",intro)
 hin=agem.add.text(77,370, "000", style1);
 hi1=agem.add.text(55,410, "Culapisci", style1);


p000=agem.add.button(145,280,"000",zero)
 h000n=agem.add.text(212,300, "010", style2);
 h000=agem.add.text(210,330, "U' Re", style2);
 h000=agem.add.text(200,347, "ri Sicilia", style2);

p010=agem.add.button(230+35,350,"000",dieci)
 h010n=agem.add.text(297+35,370, "020", style3);
 h010=agem.add.text(284+35,402, "Nuta na'", style3);
 h0101=agem.add.text(287+35,417, "li fundali", style3);


p030=agem.add.button(340+60,420,"000",trenta)
 h030n=agem.add.text(407+60,440, "040", style2);
 h030=agem.add.text(400+60,472, "i tre", style2);
 h0301=agem.add.text(395+60,487, "pilastri", style2);


p045=agem.add.button(340+60,280,"000",quarantacinque)
 h040n=agem.add.text(407+60,300, "030", style2);
 h040=agem.add.text(388+60,332, "Friedda", style2);
 h040=agem.add.text(388+60,344, "e cavera", style2);

p100=agem.add.button(450+75,490,"000",cento)
h100n=agem.add.text(517+75,510, "110", style4);
h100=agem.add.text(498+75,542, "Sugnu", style4);
h100=agem.add.text(498+80,554, "ccà", style4);

p050=agem.add.button(450+75,210,"000",cinquanta)
 h050n=agem.add.text(517+75,230, "050", style2);
 h060=agem.add.text(508+75,262, "Chi me", style2);
 h0601=agem.add.text(508+75,277, "cunte?!", style2);


p060=agem.add.button(450+75,350,"000",sessanta)
 h060n=agem.add.text(517+75,370, "060", style2);
  h050=agem.add.text(498+75,412, "L'abissu", style2);


p040=agem.add.button(600+75,490,"000",quaranta)
 h090n=agem.add.text(667+75,510, "090", style2);
 h090=agem.add.text(658+70,552, "I ru' rutte", style2);

p090=agem.add.button(600+75,210,"000",novanta)
 h00n=agem.add.text(667+75,230, "070", style3);
 h040=agem.add.text(653+65,270, "I' buttigghi", style3);

p080=agem.add.button(600+75,350,"000",ottanta)
 h040n=agem.add.text(667+75,370, "080", style2);
 h040=agem.add.text(668+75,402, "U' Re", style2);
 h0401=agem.add.text(668+50,417, "scurtariato", style2);

p085=agem.add.button(750+75,210,"000",ottantacinque)
 h040n=agem.add.text(817+75,230, "100", style3);
 h040=agem.add.text(798+75,267, "A' curuna", style3);

p110=agem.add.button(750+75,490,"000",centodieci)
 h090n=agem.add.text(817+75,510, "140", style5);
 h090=agem.add.text(798+80,542, "Lu paise", style5);
 h0901=agem.add.text(795+80,557, "i' trituni", style5);


p120=agem.add.button(750+75,70,"000",centoventi)
 h040n=agem.add.text(817+75,90, "120", style5);
 h040=agem.add.text(798+75,127, "U' Principe", style5);

p130=agem.add.button(750+75,350,"000",centotrenta)
 h090=agem.add.text(798+75,402, "Sempre", style4);
  h090=agem.add.text(798+85,414, "ddhà", style4);
 h090n=agem.add.text(817+75,370, "130", style4);

coralli= agem.add.physicsGroup();
coralli.create(0,0,'platform')

function intro()  {stato = "intro";
  rander()}
  function dieci()  {stato = "pagina010";
  rander()}

  function zero()  {stato = "pagina000";
  rander()}

  function trenta()  {stato = "pagina030";
  rander()}

  function quarantacinque()  {stato = "pagina045";
  rander()}

  function quaranta()  {stato = "pagina040";
  rander()}

  function cinquanta()  {stato = "pagina050";
  rander()}

  function sessanta()  {stato = "pagina060";
  rander()}

  function ottanta()  {stato = "pagina080";
  rander()}

  function ottantacinque()  {stato = "pagina085";
  rander()}

  function novanta()  {stato = "pagina090";
  rander()}

  function cento()  {stato = "pagina100";
  rander()}

  function centodieci()  {stato = "pagina110";
  rander()}

  function centoventi()  {stato = "pagina120";
  rander()}

  function centotrenta()  {stato = "pagina130";
  rander()}

  function mappa()  {stato = "mappa";
  rander()}

}

function updateL () {}

function renderL () {}
