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
                this.pixels[i][j] = 0;
            }
        }
        this.pixels[0][0] = 1;
        this.pixels[1][0] = 1;
        this.pixels[2][0] = 1;
        this.pixels[3][0] = 1;
        this.pixels[0][1] = 1;
        this.pixels[0][2] = 1;
        this.pixels[0][3] = 1;
        this.pixels[1][3] = 1;
        this.pixels[3][1] = 1;

        this.vertices = [];
        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                if (this.pixels[i][j] == 1) {
                    if (!this.neighborPixel(i, j, 0)) {
                        //add both north vertices

                        //top left
                        this.addVertex(this.x + (i * this.smallWidth),
                            this.y + (j * this.smallWidth));

                        //top right
                        this.addVertex(this.x + ((i + 1) * this.smallWidth),
                            this.y + (j * this.smallWidth));
                    }
                    if (!this.neighborPixel(i, j, 1)) {

                        //top right
                        this.addVertex(this.x + ((i + 1) * this.smallWidth),
                            this.y + (j * this.smallWidth));

                        //bottom right
                        this.addVertex(this.x + ((i + 1) * this.smallWidth),
                            this.y + ((j + 1) * this.smallWidth));
                    }
                    if (!this.neighborPixel(i, j, 2)) {
                        //add both south vertices

                        //bottom left
                        this.addVertex(this.x + (i * this.smallWidth),
                            this.y + ((j + 1) * this.smallWidth));

                        //bottom right
                        this.addVertex(this.x + ((i + 1) * this.smallWidth),
                            this.y + ((j + 1) * this.smallWidth));
                    }
                    if (!this.neighborPixel(i, j, 3)) {
                        //add both west vertices

                        //top left
                        this.addVertex(this.x + (i * this.smallWidth),
                            this.y + (j * this.smallWidth));


                        //bottom left
                        this.addVertex(this.x + (i * this.smallWidth),
                            this.y + ((j + 1) * this.smallWidth));
                    }
                }
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

        for (let v = 0; v < this.vertices.length; v++) {
            push();
            fill(255, 255, 0);
            noStroke();
            ellipseMode(CENTER);
            ellipse(this.vertices[v].x, this.vertices[v].y, 8);
            pop();
        }
    }

    addVertex(X, Y) {
        if (!this.vertexExists(X, Y)) {
            this.vertices.push({
                x: X,
                y: Y
            });
        }
    }

    vertexExists(x, y) {
        for (let i = 0; i < this.vertices.length; i++) {
            if (this.vertices[i].x == x && this.vertices[i].y == y) {
                return true;
            }
        }
        return false;
    }

    /**
     * returns true if there is a neighbor to pixel at x,y in direction dir, else false;
     * @param {number} x x coord of the pixel
     * @param {number} y y coord of the pixel
     * @param {number} dir 0 for N, 1 for E, 2 for S, 3 for W
     */
    neighborPixel(x, y, dir) {
        // if x, y is on the board
        if (x < gridSize && y < gridSize && x >= 0 && y >= 0) {


            //check and make sure that x,y is not on a border, if so, no neighbors in that direction
            if (x == gridSize - 1 && dir == 1) {
                return false;
            } else if (x == 0 && dir == 3) {
                return false;
            } else if (y == gridSize - 1 && dir == 2) {
                return false;
            } else if (y == 0 && dir == 0) {
                return false;
            } else {
                //pixel is not asking for a neighbor that doesnt exits,
                //avoided index issues.
                if (dir == 0) {
                    if (this.pixels[x][y - 1] == 1) {
                        return true;
                    }
                } else if (dir == 1) {
                    if (this.pixels[x + 1][y] == 1) {
                        return true;
                    }
                } else if (dir == 2) {
                    if (this.pixels[x][y + 1] == 1) {
                        return true;
                    }
                } else if (dir == 3) {
                    if (this.pixels[x - 1][y] == 1) {
                        return true;
                    }
                } else {
                    return false;
                }
            }

        }
        return false;
    }
}