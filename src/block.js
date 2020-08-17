class Block {
    constructor() {
        //these coords refer the to the top left position of the block
        this.x = 50;
        this.y = 50;
        this.width = 300; //block will be cubical
        this.smallWidth = this.width / gridSize; //width of each pixel

        this.pixels = Array.from(Array(gridSize), () => new Array(gridSize))
        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                this.pixels[i][j] = 1;
            }
        }
    }


    draw() {
        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                push();
                if (this.pixels[i][j] == 1) fill(0);
                else fill(BACKGROUND_COLOR);
                noStroke();
                rectMode(CORNER);
                rect(this.x + (i * this.smallWidth), this.y + (j * this.smallWidth), this.smallWidth, this.smallWidth);
                pop();
            }
        }
    }
}