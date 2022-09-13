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


function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);

  pizo = new Chao(200, 690, 600, 20);
  korda = new Rope (6, {x:245, y:30});
  futcha = Bodies.circle (300, 300, 15);
  Matter.Composite.add(korda.body,futcha);
  lassos = new Vinculo (korda,futcha);
}

function draw() 
{
  background(51);
  Engine.update(engine);
  pizo.chou();
  korda.chou();
  ellipse(futcha.position.x, futcha.position.y,15,15);
}




