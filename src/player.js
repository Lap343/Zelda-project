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
            y: (game.gameHeight - this.height) - 75
        };
        this.maxSpeed = 5;
        this.speed = {
            x: 0,
            y: 0
        };
        this.img = document.createElement('img');
        this.game = game;
        this.hearts = 3;
    };
    walkSpeed() {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
    };
    sword() {
    
        if (this.xClip == 18 && this.yClip == 1) {
            this.xClip = 36;
            this.yClip = 69;
            this.clipWidth = 27;
            this.clipHeight = 16;
            this.height = this.clipHeight * this.game.upScale;
            this.width = this.clipWidth * this.game.upScale;
            this.position.x = this.position.x - 11 * this.game.upScale;
            let topOfSword = this.position.y;
            let bottomOfSword = this.position.y + this.height;
            let leftOfSword = this.position.x;
            let rightofSword = this.position.x + this.width;
            

            if (leftOfSword <= this.game.pig.position.x + this.game.pig.width &&
                topOfSword <= this.game.pig.position.y + this.game.pig.height &&
                rightofSword >= this.game.pig.position.x &&
                bottomOfSword >= this.game.pig.position.y ) {
                this.game.pig.position.x = 600;
                this.game.pig.position.y = 600;
                this.game.pig.hearts--;
            };
        };
         
        if (this.xClip == 52 && this.yClip == 1) {
            this.xClip = 36;
            this.yClip = 52;
            this.clipWidth = 27;
            this.clipHeight = 16;
            this.height = this.clipHeight * this.game.upScale;
            this.width = this.clipWidth * this.game.upScale;
            let topOfSword = this.position.y;
            let bottomOfSword = this.position.y + this.height;
            let leftOfSword = this.position.x;
            let rightofSword = this.position.x + this.width;

            if (leftOfSword <= this.game.pig.position.x + this.game.pig.width &&
                topOfSword <= this.game.pig.position.y + this.game.pig.height &&
                rightofSword >= this.game.pig.position.x &&
                bottomOfSword >= this.game.pig.position.y ) {
                this.game.pig.position.x = 600;
                this.game.pig.position.y = 600;
                this.game.pig.hearts--;
            };
        };
        if (this.xClip == 35 && this.yClip == 1) {
            this.xClip = 18;
            this.yClip = 52;
            this.clipHeight = 27;
            this.clipWidth = 17;
            this.height = this.clipHeight * this.game.upScale;
            this.width = this.clipWidth * this.game.upScale;
            this.position.y = this.position.y - 11 * this.game.upScale;
            let topOfSword = this.position.y;
            let bottomOfSword = this.position.y + this.height;
            let leftOfSword = this.position.x;
            let rightofSword = this.position.x + this.width;

            if (leftOfSword <= this.game.pig.position.x + this.game.pig.width &&
                topOfSword <= this.game.pig.position.y + this.game.pig.height &&
                rightofSword >= this.game.pig.position.x &&
                bottomOfSword >= this.game.pig.position.y ) {
                this.game.pig.position.x = 600;
                this.game.pig.position.y = 600;
                this.game.pig.hearts--;
            };
        };
        if (this.xClip == 1 && this.yClip == 1) {
            this.xClip = 1;
            this.yClip = 52;
            this.clipHeight = 27;
            this.clipWidth = 16;
            this.height = this.clipHeight * this.game.upScale;
            this.width = this.clipWidth * this.game.upScale;
            let topOfSword = this.position.y;
            let bottomOfSword = this.position.y + this.height;
            let leftOfSword = this.position.x;
            let rightofSword = this.position.x + this.width;

            if (leftOfSword <= this.game.pig.position.x + this.game.pig.width &&
                topOfSword <= this.game.pig.position.y + this.game.pig.height &&
                rightofSword >= this.game.pig.position.x &&
                bottomOfSword >= this.game.pig.position.y ) {
                this.game.pig.position.x = 600;
                this.game.pig.position.y = 600;
                this.game.pig.hearts--;
            };
        };
    };
    noSword() {
        if (this.xClip == 36 && this.yClip == 69) {
            this.xClip = 18;
            this.yClip = 1;
            this.clipHeight = 16;
            this.clipWidth = 16;
            this.width = this.clipWidth * this.game.upScale;
            this.height = this.clipHeight * this.game.upScale;
            this.position.x = this.position.x + 11 * this.game.upScale;
        } else if (this.xClip == 36 && this.yClip == 52) {
            this.xClip = 52;
            this.yClip = 1;
            this.clipHeight = 16;
            this.clipWidth = 16;
            this.height = this.clipHeight * this.game.upScale;
            this.width = this.clipWidth * this.game.upScale;
        }else if (this.xClip == 18 && this.yClip == 52) {
            this.xClip = 35;
            this.yClip = 1;
            this.clipHeight = 16;
            this.clipWidth = 16;
            this.height = this.clipHeight * this.game.upScale;
            this.width = this.clipWidth * this.game.upScale;
            this.position.y = this.position.y + 11 * this.game.upScale;
        }else if (this.xClip == 1) {
            this.xClip = 1;
            this.yClip = 1;
            this.clipHeight = 16;
            this.clipWidth = 16;
            this.width = this.clipWidth * this.game.upScale;
            this.height = this.clipHeight * this.game.upScale;
        };
    };
    // animation() {
    //     let frame = 1;
    //     if (frame == 1) {
    //         this.yClip = 18;
    //         frame = 0;
    //     }if (frame == 0) { 
    //         this.yClip = 1; 
    //         frame++; 
    //     };
    //     console.log(frame);
    // };
    lookLeft() {
        this.speed.x = -this.maxSpeed;
        this.xClip = 18;
        this.clipWidth = 16;
        this.clipHeight = 16;
    };
    lookRight() {
        this.speed.x = +this.maxSpeed;
        this.xClip = 52;
        this.clipWidth = 16;
        this.clipHeight = 16;
    };
    lookUp() {
        this.speed.y = -this.maxSpeed;
        this.xClip = 35;
        this.clipWidth = 16;
        this.clipHeight = 16;
    };
    lookDown() {
        this.speed.y = +this.maxSpeed;
        this.xClip = 1;
        this.clipWidth = 16;
        this.clipHeight = 16;
    };
    stopX() {
        this.speed.x = 0;
    };
    stopY() {
        this.speed.y = 0;
    };
    heartCount(ctx) {
        if(this.hearts >= 1) ctx.drawImage(this.img, 205, 1, 13, 13, 10, 0, 13*3.5, 13*3.5);
        if(this.hearts >= 2) ctx.drawImage(this.img, 205, 1, 13, 13, 65, 0, 13*3.5, 13*3.5);
        if(this.hearts >= 3) ctx.drawImage(this.img, 205, 1, 13, 13, 120, 0, 13*3.5, 13*3.5);

    };
    boundry() {
        if (this.position.x < (3.5 * 16)) { this.position.x = (3.5 * 16) }
        if (this.position.x > this.game.gameWidth - this.width - (3.5 * 16)) { this.position.x = this.game.gameWidth - this.width - (3.5 * 16)}
        if (this.position.y < (3.5 * 16) * 2) { this.position.y = (3.5 * 16) * 2 }
        if (this.position.y > this.game.gameHeight - this.height - (3.5 * 16)) { this.position.y = this.game.gameHeight - this.height - (3.5 * 16)}
    };
    //Drawing Link//
    draw(ctx) {
        this.img.src = './img/link.png'
        ctx.drawImage(this.img, this.xClip, this.yClip, this.clipWidth, this.clipHeight, this.position.x, this.position.y,this.width, this.height);
        this.heartCount(ctx);        
    };
    //update Lunk//
    update(deltaTime){
        if(!deltaTime) return;
        this.boundry();
        this.walkSpeed();
        // this.animation();
    };
};

