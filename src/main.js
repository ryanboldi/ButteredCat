const WIDTH = 800,
    HEIGHT = 800;

let Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

let gridSize = 3;

let engine = Engine.create();

let boxA = Bodies.rectangle(100, 150, 40, 80);
let ground = Bodies.rectangle(400, 730, 810, 140, { isStatic: true });

let blocks = [];
let blockCount = 10;

BACKGROUND_COLOR = 210;

function setup() {
    createCanvas(800, 800);

    bodies = []
    for (let i = 0; i < blockCount; i++) {
        blocks.push(new Block());
        bodies.push(blocks[i].body);
    }

    bodies.push(ground);

    World.add(engine.world, bodies);
    Engine.run(engine);
}
function draw() {
    background(BACKGROUND_COLOR);

    fill(0);

    push();
    fill(50, 60, 70);
    beginShape();
    for (let i = 0; i < ground.vertices.length; i++) {
        vertex(ground.vertices[i].x, ground.vertices[i].y);
    }
    endShape(CLOSE);
    pop();

    for (let i = 0; i < blocks.length; i++) {
        blocks[i].draw();
    }
}