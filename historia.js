

const overlay = document.getElementById("overlay");
const sections = document.querySelectorAll("section");

function atualizarCorDeFundo() {

    const centroTela = window.innerHeight / 2;

    sections.forEach(section => {

        const rect = section.getBoundingClientRect();

        // ------------------------
        // animação de entrada
        // ------------------------

        if (rect.top < window.innerHeight * 0.8) {
            section.classList.add("show");
        }

        // ------------------------
        // troca da cor do fundo
        // ------------------------

        if (
            rect.top <= centroTela &&
            rect.bottom >= centroTela
        ) {

            overlay.style.backgroundColor =
                `rgba(${section.dataset.color}, .75)`;

        }

    });

}

window.addEventListener("scroll", atualizarCorDeFundo);

window.addEventListener("load", atualizarCorDeFundo);