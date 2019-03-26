//Initalizing Player//
import Lunk from './player.js';
//Importing Input//
import InputHandler from './input.js';
//Importing Enemies///
import Enemy from './enemy.js'

const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3
}

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.upScale = 3.5;
        this.gamestate = GAMESTATE.MENU;
        this.mainPlayer = new Lunk(this);
        this.gameObjects = [];
        this.hearts = 3;
        new InputHandler(this.mainPlayer, this);
    };
    start() {
        if(this.gamestate !== GAMESTATE.MENU) return;
        this.pig = new Enemy(this);
        this.gamestate = GAMESTATE.RUNNING;

        this.gameObjects = [
            this.mainPlayer,
            this.pig
        ];
    };
    update(deltaTime) {
        if (this.hearts === 0) this.gamestate = GAMESTATE.GAMEOVER;
        if (this.gamestate === GAMESTATE.PAUSED ||    
            this.gamestate === GAMESTATE.MENU ||
            this.gamestate === GAMESTATE.GAMEOVER
            ) return;
        this.gameObjects.forEach(objects => objects.update(deltaTime));
    };
    draw(ctx) {
        this.gameObjects.forEach(objects => objects.draw(ctx));
        if (this.gamestate === GAMESTATE.PAUSED) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,0.5)";
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2);
        };
        if (this.gamestate === GAMESTATE.MENU) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,1)";
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Press Spacebar/Start to Start", this.gameWidth / 2, this.gameHeight / 2);
        };
        if (this.gamestate === GAMESTATE.GAMEOVER) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,1)";
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "red";
            ctx.textAlign = "center";
            ctx.fillText("Game Over Ganon Wins!", this.gameWidth / 2, this.gameHeight / 2);
        };
    };
    togglePause() {         
        if (this.gamestate !== GAMESTATE.MENU) {
            if (this.gamestate == GAMESTATE.PAUSED) {
                this.gamestate = GAMESTATE.RUNNING;
            } else {
                this.gamestate = GAMESTATE.PAUSED;
            };
        };
    };
};
