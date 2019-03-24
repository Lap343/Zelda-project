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
        });document.addEventListener('keyup', event =>{
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
    }; 
};
