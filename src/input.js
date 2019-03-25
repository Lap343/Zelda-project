//Input Class//
export default class InputHandler {
    constructor(mainPlayer, game) {
        document.addEventListener('keydown', event =>{
            switch (event.keyCode) {
                //left//
                case 37: 
                    mainPlayer.lookLeft();
                    break;
                //right//
                case 39: 
                    mainPlayer.lookRight();
                    break;
                //up//
                case 38: 
                    mainPlayer.lookUp();
                    break;
                //down//
                case 40: 
                    mainPlayer.lookDown();
                    break;
                pause//
                case 27:
                    game.togglePause();
                    break;
                case 32:
                    game.start();
                    break;
            };
        });
        document.addEventListener('keyup', event =>{
            switch (event.keyCode) {
                //left//
                case 37: 
                    if(mainPlayer.speed.x < 0) mainPlayer.stopX();
                    break;
                //right//
                case 39: 
                    if(mainPlayer.speed.x > 0) mainPlayer.stopX();
                    break;
                //up//
                case 38: 
                    if(mainPlayer.speed.y < 0) mainPlayer.stopY();
                    break;
                //down//
                case 40: 
                    if(mainPlayer.speed.y > 0) mainPlayer.stopY();
                    break;
            };
        });
        document.getElementById('upButton').onmousedown = function() {
            mainPlayer.lookUp();
            console.log('wut');
        }; 
        document.getElementById('leftButton').onmousedown = function() {
            mainPlayer.lookLeft();
        };
        document.getElementById('rightButton').onmousedown = function() {
            mainPlayer.lookRight();
        };
        document.getElementById('downButton').onmousedown = function() {
            mainPlayer.lookDown();
        };
        document.getElementById('selectButton').onmousedown = function() {
            game.togglePause();
        };
        document.getElementById('startButton').onmousedown = function() {
            game.start();
        };
        document.getElementById('aButton').onmousedown = function() {

        };
        document.getElementById('bButton').onmousedown = function() {

        };

        document.getElementById('upButton').onmouseup = function() {
            mainPlayer.stopY();
        }; 

        document.getElementById('leftButton').onmouseup = function() {
            mainPlayer.stopX();
        };
        document.getElementById('rightButton').onmouseup = function() {
            mainPlayer.stopX();
        };
        document.getElementById('downButton').onmouseup = function() {
            mainPlayer.stopY();
        };
        document.getElementById('aButton').onmouseup = function() {

        };
        document.getElementById('bButton').onmouseup = function() {

        };
    }; 
};
