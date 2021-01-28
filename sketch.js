const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){

}

function setup(){
    var canvas = createCanvas(600,800);
    engine = Engine.create();
    world = engine.world;   
 
}

function draw(){
    background(rgb(33, 47, 60));
    Engine.update(engine);
}   

function rainDrops() {
    maxDrops = 100;
    for (var i=0; i <= maxDrops; i++) {
        drops.push(new createDrop(Math.round(random(50,550)), Math.round(random(50,100))));
    }  
}