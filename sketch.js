const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var pizo;
var korda;
var futcha;
var lassos;
var backgroundI;
var melonSugar;
var sansao;
var pomposo;
var enter;



function preload(){
  backgroundI = loadImage("toyStory.jpg");
  melonSugar = loadImage("melon.png");
  sansao = loadImage("Rabbit-01.png");
}

function setup()

  
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  imageMode(CENTER);
  textSize(50);

  pizo = new Chao(200, 690, 600, 20);
  korda = new Rope (6, {x:245, y:40});
  futcha = Bodies.circle (300, 300, 15);
  Matter.Composite.add(korda.body,futcha);
  lassos = new Vinculo (korda,futcha); 
  pomposo = createSprite (250,580,100,100);
  pomposo.addImage (sansao);
  pomposo.scale = 0.4
  enter = createImg ("cut_btn.png");
  enter.position(220,30);
  enter.size(50,50);
  enter.mouseClicked(deixar);
}

function draw() 
{
  background(51);
  image(backgroundI, width/2, height/2, 500, 700);
  Engine.update(engine);
  pizo.chou();
  korda.chou();
  image(melonSugar,futcha.position.x, futcha.position.y,60,60);
  drawSprites();



}

function deixar(){
korda.break();
lassos.separar();
lassos=null;


}


