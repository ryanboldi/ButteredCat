const WIDTH = 800,
    HEIGHT = 800;

let Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

let gridSize = 15;

let groundObjectFriction = 0.01;
let airObjectFriction = 0.004;

let drops = 10;
let dropAngleDelta = 360 / drops;

let engine = Engine.create({
    positionIterations: 10,
    velocityIterations: 10,
    enableSleeping: false
});

let ground = Bodies.rectangle(400, 730, 810, 140, { isStatic: true, friction: groundObjectFriction });

let blocks = [];
let blockCount = BLOCK_COUNT;

BACKGROUND_COLOR = 210;

function setup() {
    createCanvas(800, 800);
    initNeat();
    //for (let i = 0; i < BLOCK_COUNT; i++) {
    //new Block();
    //}

    World.add(engine.world, ground);
    engine.world.gravity.scale = 0.0008;
    Engine.run(engine);

    startEvaluation();
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