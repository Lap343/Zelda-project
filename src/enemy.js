export default class Enemy {
    constructor(game) {
        this.game = game
        this.xClip = 0;
        this.yClip = 1;
        this.clipWidth = 16;
        this.clipHeight = 16;
        this.width = this.clipWidth * game.upScale;
        this.height = this.clipHeight * game.upScale;
        this.position = {
            x: game.gameWidth / 2 - this.width / 2,
            y: game.gameHeight / 2 - this.height
        };
        this.maxSpeed = 5;
        this.speed = {
            x: 0,
            y: 0
        };
        this.img = document.createElement('img'); 
    };
    walkSpeed() {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
    };
    hurtBox() {
        let topOfEnemy = this.position.y;
        let bottomOfEnemy = this.position.y + this.height;
        let leftOfEnemy = this.position.x;
        let rightOfEnemy = this.position.x + this.width;

        if (leftOfEnemy <= this.game.mainPlayer.position.x + this.game.mainPlayer.width &&
            topOfEnemy <= this.game.mainPlayer.position.y + this.game.mainPlayer.height &&
            rightOfEnemy >= this.game.mainPlayer.position.x &&
            bottomOfEnemy >= this.game.mainPlayer.position.y ) {
            this.game.mainPlayer.position.x = 0;
            this.game.mainPlayer.position.y = 0;
            this.game.hearts--;
        };
    };
    draw(ctx) {
        this.img.src = './img/enemies.png'
        ctx.drawImage(this.img, this.xClip, this.yClip, this.clipWidth, this.clipHeight, this.position.x, this.position.y,this.width, this.height)
    };
    boundry() {
        if (this.position.x < 0) { this.position.x = 0 }
        if (this.position.x > 800 - this.width) { this.position.x = 800 - this.width}
        if (this.position.y < 0) { this.position.y = 0 }
        if (this.position.y > 600 - this.height) { this.position.y = 600 - this.height}
    }
    update(deltaTime) {
        if(!deltaTime) return; 
        this.walkSpeed();
        this.boundry();
        this.hurtBox();
    };
}