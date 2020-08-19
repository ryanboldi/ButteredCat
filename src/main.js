const WIDTH = 800,
    HEIGHT = 800;

let Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

let gridSize = 10;

let engine = Engine.create();

let boxA = Bodies.rectangle(400, 200, 80, 80);
let boxB = Bodies.rectangle(400, 50, 80, 80);
let ground = Bodies.rectangle(400, 770, 810, 60, { isStatic: true });

World.add(engine.world, [boxA, boxB, ground]);

Engine.run(engine);

BACKGROUND_COLOR = 210;

let b;

function setup() {
    createCanvas(800, 800);
    console.log(boxA.vertices);
    b = new Block();
}
function draw() {
    background(BACKGROUND_COLOR);

    fill(0);
    beginShape();
    boxA.vertices.forEach(v => {
        vertex(v.x, v.y)
    });
    endShape(CLOSE);
    b.draw();

    push();
    fill(50, 60, 70);
    beginShape();
    for (let i = 0; i < ground.vertices.length; i++) {
        vertex(ground.vertices[i].x, ground.vertices[i].y);
    }
    endShape(CLOSE);
    pop();
}



