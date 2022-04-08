function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}


const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idaudio = `#som_${instrumento}`; //Template string abaixo

    tecla.onclick = function () {
        tocaSom(idaudio);
    }

    tecla.onkeydown = function (ativa) {

        console.log(ativa.code)
        if (ativa.code === "Enter" || ativa.code === "Space") {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
