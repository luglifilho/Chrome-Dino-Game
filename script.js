const dino = document.querySelector('.dino');
const container = document.querySelector('.container');
const isJumping = false;

function PresssKeyUp(event){
    if (event.keyCode === 32){
        if(!isJumping){
            jump();
        }
    }

}

function jump(){
    let position = 0;

    


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
                }
            }, 20)
        } else {

        position = position + 20;
        dino.style.bottom = position + 'px';
        }
    }, 20);
}

function createCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 1000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    container.appendChild(cactus);
}
createCactus();
document.addEventListener('keyup', PresssKeyUp);