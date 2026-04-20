let frames = [
    "cakeframe/cakeframe1.png",
    "cakeframe/cakeframe2.png",
    "cakeframe/cakeframe3.png",
    "cakeframe/cakeframe4.png",
    "cakeframe/cakeframe5.png",
    "cakeframe/cakeframe6.png",
    "cakeframe/cakeframe7.png",
    "cakeframe/cakeframe8.png",
    "cakeframe/cakeframe9.png",
    "cakeframe/cakeframe10.png",
    "cakeframe/cakeframe11.png",
    "cakeframe/cakeframe12.png",
    "cakeframe/cakeframe13.png",
    "cakeframe/cakeframe14.png"
];

let cake = document.getElementById("cake");
let music = document.getElementById("music");
let carta = document.getElementById("carta");
let us = document.getElementById("us");
let char1 = document.getElementById("sawako_kazehaya");
let char2 = document.getElementById("tanjiro_kanao");
let char3 = document.getElementById("vegeta_bulma");

cake.onclick = clicarBolo;

let clicado = false;

function clicarBolo() {
    if (clicado) return;
    clicado = true;

    let i = 0;

    let animacao = setInterval(() => {
        cake.src = frames[i];
        i++;

        if (i >= frames.length) {
            clearInterval(animacao);

            music.volume = 0;
            music.play();

            let volume = 0;

            let fade = setInterval(() => {
                if (volume < 1) {
                    volume += 0.05;
                    music.volume = volume;
                } else {
                    clearInterval(fade);
                }

            }, 200);

                setTimeout(() => {
                    carta.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });
                }, 900);

            setTimeout (() => {
                carta.classList.remove("hidden");
                carta.classList.add("show");

                us.classList.remove("hidden");
                us.classList.add("show");

                setTimeout (() => {
                    char1.classList.remove("hidden");
                    char1.classList.add("show");
                }, 200);

                setTimeout (() => {
                    char2.classList.remove("hidden");
                    char2.classList.add("show");
                }, 400);

                setTimeout (() => {
                    char3.classList.remove("hidden");
                    char3.classList.add("show");
                }, 600);
            }, 1000);   
        }
    }, 150);
}