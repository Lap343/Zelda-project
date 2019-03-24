////Player Class////
export default class Lunk {
    constructor(game) {
        this.xClip = 1;
        this.yClip = 1;
        this.clipWidth = 16;
        this.clipHeight = 16;
        this.width = this.clipWidth * game.upScale;
        this.height = this.clipHeight * game.upScale;
        this.position = {
            x: game.gameWidth / 2 - this.width / 2,
            y: game.gameHeight - this.height
        };
        this.maxSpeed = 5;
        this.speed = {
            x: 0,
            y: 0
        };
        this.img = document.createElement('img');
        this.game = game;
    };
    //Drawing Link//
    draw(ctx) {
        this.img.src = './img/link.png'
        ctx.drawImage(this.img, this.xClip, this.yClip, this.clipWidth, this.clipHeight, this.position.x, this.position.y,this.width, this.height);
    };
    walkSpeed() {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
    };
    animation() {
        let frame = 1;
        if (frame == 1) {
            this.yClip = 18;
            frame = 0;
        }if (frame == 0) { 
            this.yClip = 1; 
            frame++; 
        };
        console.log(frame);
    };
    lookLeft() {
        this.speed.x = -this.maxSpeed;
        this.xClip = 18;
    };
    lookRight() {
        this.speed.x = +this.maxSpeed;
        this.xClip = 52;
    };
    lookUp() {
        this.speed.y = -this.maxSpeed;
        this.xClip = 35;
    };
    lookDown() {
        this.speed.y = +this.maxSpeed;
        this.xClip = 1;
    };
    stopX() {
        this.speed.x = 0;
    };
    stopY() {
        this.speed.y = 0;
    };
    hurtBox() {
        let topOfLunk = this.position.y;
        let bottomOfLunk = this.position.y + this.height;
        let leftOfLunk = this.position.x;
        let rightOfLunk = this.position.x + this.width; 
        if (
            leftOfLunk <= this.game.pig.position.x + this.game.pig.width &&
            topOfLunk <= this.game.pig.position.y + this.game.pig.height &&
            rightOfLunk >= this.game.pig.position.x &&
            bottomOfLunk >= this.game.pig.position.y ) {
            this.position.x = 0;
            this.position.y = 0;
        };
    };
    boundry() {
        if (this.position.x < 0) { this.position.x = 0 }
        if (this.position.x > 800 - this.width) { this.position.x = 800 - this.width}
        if (this.position.y < 0) { this.position.y = 0 }
        if (this.position.y > 600 - this.height) { this.position.y = 600 - this.height}
    }
    update(deltaTime){
        if(!deltaTime) return;
        this.boundry();
        // this.hurtBox();
        this.walkSpeed();
        // this.animation();
    };
};

