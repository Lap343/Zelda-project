  //////////////////////////
 /* Initalize Everything */
//////////////////////////
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let gameHeight = canvas.height;
let gameWidth = canvas.width;

//Import Game//
import Game from './game.js'

//Game Object//
let game = new Game(gameWidth, gameHeight);

//Delta Time Calculation//
let lastTime = 0;

////Game Loop Function and exicution////
function gameLoop(timeStamp) {
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx.clearRect(0, 0, gameWidth, gameHeight);
    ctx.imageSmoothingEnabled = false;
    game.update(deltaTime);
    game.draw(ctx);   
    window.requestAnimationFrame(gameLoop);
};
gameLoop();