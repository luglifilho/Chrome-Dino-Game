const dino = document.querySelector('.dino');
const container = document.querySelector('.container');
//$("#score").append("div id='placar'></div>");
let isJumping = false;
let position = 0;
let isGameOver = false;
var score = 0;
 

function PresssKeyUp(event){
    if (event.keyCode === 32){
        if(!isJumping){
            jump();

            
        }
    }
   
}

function jump(){
    let position = 0;

    isJumping = true;


    let upInterval = setInterval(() => {

        if ( position >= 150){
            clearInterval(upInterval);

            let downInterval = setInterval(() => {
                if(position <= 0){
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                position = position - 20;
                dino.style.bottom = position + 'px';
                //dino.style.left = position + 'px';
                }
            }, 60)
        } else {

        position = position + 40;
        dino.style.bottom = position + 'px';
        dino.style.left = position + 'px';
        }
    }, 20);
}

function createCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    if(isGameOver) return;

    cactus.classList.add('cactus');
    container.appendChild(cactus);
    cactus.style.left = cactusPosition + 'px';

    let leftInterval = setInterval(() => {
        //cactusPosition = cactusPosition + 10;
       // cactus.style.left = cactusPosition + 'px';
        
        if (cactusPosition < -60){
           // score++;
            clearInterval(leftInterval);
            container.removeChild(cactus);
        }else if (cactusPosition > 0 && cactusPosition < 60 && position <60) {
            clearInterval(leftInterval);
            isGameOver = true;
            document.body.innerHTML = '<h1 class="game-over">Fim de Jogo</h1>';
        } else {
        cactusPosition = cactusPosition - 10;
        cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createCactus, randomTime);
}



createCactus();

document.addEventListener('keyup', PresssKeyUp);