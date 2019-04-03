export default class Enemy {
    constructor(game) {
        this.game = game
        this.xClip = 0;
        this.yClip = 1;
        this.clipWidth = 16;
        this.clipHeight = 14;
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
        this.hearts = 3;
    };
    walkSpeed() {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        function stepDirection(max, min) {
            return Math.floor(Math.random() * (max -min)) + min;
        };
        switch (stepDirection(1, 5)) {
            case 1:
                this.speed.x = -this.maxSpeed * 0.75;
                break;
            case 2:
                this.speed.x = +this.maxSpeed * 0.75;
                break;
            case 3:
                this.speed.y = -this.maxSpeed * 0.75;
                break;
            case 4:
                this.speed.y = +this.maxSpeed * 0.75;
                break;
        };

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
            this.game.mainPlayer.position.x = 3.5 * 16;
            this.game.mainPlayer.position.y = (3.5 * 16) * 2;
            this.game.mainPlayer.hearts--;
        };
    };
    boundry() {
        if (this.position.x < (3.5 * 16)) { this.position.x = (3.5 * 16) }
        if (this.position.x > this.game.gameWidth - this.width - (3.5 * 16)) { this.position.x = this.game.gameWidth - this.width - (3.5 * 16)}
        if (this.position.y < (3.5 * 16) * 2) { this.position.y = (3.5 * 16) * 2 }
        if (this.position.y > this.game.gameHeight - this.height - (3.5 * 16)) { this.position.y = this.game.gameHeight - this.height - (3.5 * 16)}
    }
    heartCount(ctx) {
        if(this.hearts >= 1) ctx.drawImage(this.img, 32, 0, 16, 16, this.game.gameWidth - 56, 0, 16*3.5, 16*3.5);
        if(this.hearts >= 2) ctx.drawImage(this.img, 32, 0, 16, 16, this.game.gameWidth - 126, 0, 16*3.5, 16*3.5);
        if(this.hearts >= 3) ctx.drawImage(this.img, 32, 0, 16, 16, this.game.gameWidth - 196, 0, 16*3.5, 16*3.5);
    };
    draw(ctx) {
        this.img.src = './img/enemies.png'
        ctx.drawImage(this.img, this.xClip, this.yClip, this.clipWidth, this.clipHeight, this.position.x, this.position.y,this.width, this.height);
        this.heartCount(ctx);
    };
    update(deltaTime) {
        if(!deltaTime) return; 
        this.walkSpeed();
        this.boundry();
        this.hurtBox();
    };
}