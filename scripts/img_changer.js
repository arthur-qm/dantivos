const MUSEU_IMGS = ['computador_museu.jpg', 'logo_museu.jpeg', 'museu_por_fora.jpeg'];
const IMGDOM = document.querySelector('.image > img');
const STEPS = 10;
const STEP_TIME = 100;
const PATH_BEGIN = './imgs/museu/';
const OPACITY_STEP = 1 / STEPS;
const VISIBILITY_TIME = 5000;
const STEP_BACK_TIME = 20;

var img_atual = 1;
var curr_opacity = 1;

async function museu_slider() {
    while (true) {
        for (let i = 0; i < STEPS; i++) {
            await sleep(STEP_TIME);
            IMGDOM.style.opacity = curr_opacity - OPACITY_STEP;
            curr_opacity -= OPACITY_STEP; 
        }
        curr_opacity = 0;

        
        img_atual++;
        img_atual %= 3;
        IMGDOM.setAttribute('src', PATH_BEGIN + MUSEU_IMGS[img_atual]);

        for (let i = 0; i < STEPS; i++) {
            await sleep(STEP_BACK_TIME);
            IMGDOM.style.opacity = curr_opacity + OPACITY_STEP;
            curr_opacity += OPACITY_STEP; 
        }
        curr_opacity = 1;
        await sleep(VISIBILITY_TIME);
    }
}

museu_slider();
