<!DOCTYPE html>
<html lang="en">
<head>
    <title>Want A Sprite Cranberry</title>
</head>
<body>
    <canvas width="500" height="500" id="canvas"></canvas>
    <script>
        const SCALE = 3;
        const WIDTH = 16; // width to fit one sprite
        const HEIGHT = 18; // height to fit one sprite
        const SCALED_WIDTH = SCALE * WIDTH;
        const SCALED_HEIGHT = SCALE * HEIGHT;
        const CYCLE_LOOP = [0, 1, 0, 2]; //goes through row
        const FACING_DOWN = 2; //value of column
        const FACING_UP = 0; //value of column
        const FACING_LEFT = 3; //value of column
        const FACING_RIGHT = 1; //value of column
        const FRAME_LIMIT = 12;
        const MOVEMENT_SPEED = 3;
        let canvas = document.querySelector('canvas'); // Get the canvas element and create a 2D rendering context
        let ctx = canvas.getContext('2d');
        let keyPresses = {};
        let currentDirection = FACING_DOWN; //value of column
        let currentLoopIndex = 0; //value of row
        let frameCount = 0;
        let positionX = 226; // Math: maxX/2 - (Scale*Width)/2
        let positionY = 223; // Math: maxY/2 - (Scale*Height)/2
        let img = new Image(); // Create image object for the spritesheet
        window.addEventListener('keydown', keyDownListener); // Pressing a key resulting in an outcome
        function keyDownListener(event) {
            keyPresses[event.key] = true;
        }
        window.addEventListener('keyup', keyUpListener); // Releasing a key resulting in a pause in the outcome
        function keyUpListener(event) {
            keyPresses[event.key] = false;
        }
        // Function to load the image and start the game loop
        function loadImage() {
            img.src = 'https://opengameart.org/sites/default/files/4thsheetpreview.png';
            img.onload = function() {
                window.requestAnimationFrame(gameLoop);
            };
        }
        function drawFrame(frameX, frameY, canvasX, canvasY) {  // Drawing sprite frame
            ctx.drawImage(img,
                frameX * WIDTH, frameY * HEIGHT, WIDTH, HEIGHT,
                canvasX, canvasY, SCALED_WIDTH, SCALED_HEIGHT);
        }
        loadImage(); //show image
        function gameLoop() { // keep updating the game
            ctx.fillStyle = 'rgb(255, 192, 203)'; // Set canvas to pink
            ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill the canvas
            let hasMoved = false; // make the sprite stand still.
            if (keyPresses.w) { // move the sprite
                moveCharacter(0, -MOVEMENT_SPEED, FACING_UP);
                hasMoved = true;
            } else if (keyPresses.s) {
                moveCharacter(0, MOVEMENT_SPEED, FACING_DOWN);
                hasMoved = true;
            }
            if (keyPresses.a) {
                moveCharacter(-MOVEMENT_SPEED, 0, FACING_LEFT);
                hasMoved = true;
            } else if (keyPresses.d) {
                moveCharacter(MOVEMENT_SPEED, 0, FACING_RIGHT);
                hasMoved = true;
            }
            if (hasMoved) { // loop the animation of the sprite
                frameCount++;
                if (frameCount >= FRAME_LIMIT) {
                    frameCount = 0;
                    currentLoopIndex++;
                    if (currentLoopIndex >= CYCLE_LOOP.length) {
                        currentLoopIndex = 0;
                    }
                }
            }
            if (!hasMoved) {
                currentLoopIndex = 0;
            }
            drawFrame(CYCLE_LOOP[currentLoopIndex], currentDirection, positionX, positionY); // draw the current frame of the sprite
            window.requestAnimationFrame(gameLoop); // repeat the game loop
        }
        function moveCharacter(deltaX, deltaY, direction) {
            if (positionX + deltaX > 0 && positionX + SCALED_WIDTH + deltaX < canvas.width) { // define borders
                positionX += deltaX;
            }
            if (positionY + deltaY > 0 && positionY + SCALED_HEIGHT + deltaY < canvas.height) { // define borders
                positionY += deltaY;
            }
            currentDirection = direction; // Set the current direction
        }
    </script>
</body>
</html>