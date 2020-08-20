const WIDTH = 800,
    HEIGHT = 800;

let Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

let gridSize = 10;

let engine = Engine.create();

let boxA = Bodies.rectangle(100, 150, 40, 80);
let ground = Bodies.rectangle(400, 730, 810, 140, { isStatic: true });


BACKGROUND_COLOR = 210;

let b;

function setup() {
    createCanvas(800, 800);
    b = new Block();
    World.add(engine.world, [boxA, b.body, ground]);
    Engine.run(engine);
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