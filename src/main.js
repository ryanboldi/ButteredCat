const WIDTH = 800,
    HEIGHT = 800;

let Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

let gridSize = 5;

let groundObjectFriction = 0.03;
let airObjectFriction = 0.004;

let drops = 10;
let dropAngleDelta = 360 / drops;

let engine = Engine.create({
    positionIterations: 15,
    velocityIterations: 6,
    enableSleeping: false
});

let ground = Bodies.rectangle(400, 730, 810, 140, { isStatic: true, friction: groundObjectFriction });

let blocks = [];
let blockCount = 1;

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
    engine.world.gravity.scale = 0.0008;
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