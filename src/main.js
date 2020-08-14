const WIDTH = 800,
    HEIGHT = 800;

let Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

let engine = Engine.create();

let render = Render.create({
    element: document.body,
    engine: engine
});

let boxA = Bodies.rectangle(400, 200, 80, 80);
let boxB = Bodies.rectangle(400, 50, 80, 80);
let ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

World.add(engine.world, [boxA, boxB, ground]);

Engine.run(engine);

Render.run(render);

function setup() {
    createCanvas(800, 800);
    console.log(boxA.vertices);
}
function draw() {
    background(210);

    fill(0);
    beginShape();
    boxA.vertices.forEach(v => {
        vertex(v.x, v.y)
    });
    endShape(CLOSE);
}



