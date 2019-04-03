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
        this.hearts = 3;
    };
    walkSpeed() {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
    };
    sword() {
        let topOfSword = this.position.y;
        let bottomOfSword = this.position.y + this.height;
        let leftOfSword = this.position.x;
        let rightofSword = this.position.x + this.width;
    
        if (this.xClip == 18 && this.yClip == 1) {
            this.xClip = 36;
            this.yClip = 69;
            this.clipWidth = 27;
            this.clipHeight = 16;
            this.height = this.clipHeight * this.game.upScale;
            this.width = this.clipWidth * this.game.upScale;
            this.position.x = this.position.x - 11 * this.game.upScale;
            

            if (leftOfSword <= this.game.pig.position.x + this.game.pig.width &&
                topOfSword <= this.game.pig.position.y + this.game.pig.height &&
                rightofSword >= this.game.pig.position.x &&
                bottomOfSword >= this.game.pig.position.y ) {
                this.game.pig.position.x = 600;
                this.game.pig.position.y = 600;
                this.game.pig.hearts--;
                this.hearts++;
            };
        };
         
        if (this.xClip == 52 && this.yClip == 1) {
            this.xClip = 36;
            this.yClip = 52;
            this.clipWidth = 27;
            this.clipHeight = 16;
            this.height = this.clipHeight * this.game.upScale;
            this.width = this.clipWidth * this.game.upScale;

            if (leftOfSword <= this.game.pig.position.x + this.game.pig.width &&
                topOfSword <= this.game.pig.position.y + this.game.pig.height &&
                rightofSword >= this.game.pig.position.x &&
                bottomOfSword >= this.game.pig.position.y ) {
                this.game.pig.position.x = 600;
                this.game.pig.position.y = 600;
                this.game.pig.hearts--;
                this.hearts++;
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

            if (leftOfSword <= this.game.pig.position.x + this.game.pig.width &&
                topOfSword <= this.game.pig.position.y + this.game.pig.height &&
                rightofSword >= this.game.pig.position.x &&
                bottomOfSword >= this.game.pig.position.y ) {
                this.game.pig.position.x = 600;
                this.game.pig.position.y = 600;
                this.game.pig.hearts--;
                this.hearts++;
            };
        };
        if (this.xClip == 1 && this.yClip == 1) {
            this.xClip = 1;
            this.yClip = 52;
            this.clipHeight = 27;
            this.clipWidth = 16;
            this.height = this.clipHeight * this.game.upScale;
            this.width = this.clipWidth * this.game.upScale;

            if (leftOfSword <= this.game.pig.position.x + this.game.pig.width &&
                topOfSword <= this.game.pig.position.y + this.game.pig.height &&
                rightofSword >= this.game.pig.position.x &&
                bottomOfSword >= this.game.pig.position.y ) {
                this.game.pig.position.x = 600;
                this.game.pig.position.y = 600;
                this.game.pig.hearts--;
                this.hearts++;
            };
        };
    };
    noSword() {
        if (this.xClip == 36 && this.yClip == 69) {
            this.xClip = 18;
            this.yClip = 1;
            this.clipWidth = 16;
            this.width = this.clipWidth * this.game.upScale;
            this.height = this.clipHeight * this.game.upScale;
            this.position.x = this.position.x + 11 * this.game.upScale;
        } else if (this.xClip == 36 && this.yClip == 52) {
            this.xClip = 52;
            this.yClip = 1;
            this.clipWidth = 16;
            this.height = this.clipHeight * this.game.upScale;
            this.width = this.clipWidth * this.game.upScale;
        }else if (this.xClip == 18 && this.yClip == 52) {
            this.xClip = 35;
            this.yClip = 1;
            this.clipHeight = 15;
            this.clipWidth = 16;
            this.height = this.clipHeight * this.game.upScale;
            this.width = this.clipWidth * this.game.upScale;
            this.position.y = this.position.y + 11 * this.game.upScale;
        }else if (this.xClip == 1) {
            this.xClip = 1;
            this.yClip = 1;
            this.clipHeight = 15;
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
    boundry() {
        if (this.position.x < 0) { this.position.x = 0 }
        if (this.position.x > 800 - this.width) { this.position.x = 800 - this.width}
        if (this.position.y < 0) { this.position.y = 0 }
        if (this.position.y > 600 - this.height) { this.position.y = 600 - this.height}
    };
    //Drawing Link//
    draw(ctx) {
        this.img.src = './img/link.png'
        ctx.drawImage(this.img, this.xClip, this.yClip, this.clipWidth, this.clipHeight, this.position.x, this.position.y,this.width, this.height);
        let heartsLeft = ctx.drawImage(this.img, 205, 1, 13, 12, 10, 10, 13*3.5, 13*3.5);

        
    };
    //update Lunk//
    update(deltaTime){
        if(!deltaTime) return;
        this.boundry();
        this.walkSpeed();
        // this.animation();
    };
};

