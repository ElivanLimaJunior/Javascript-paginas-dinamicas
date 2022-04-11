function tocaSom (seletorAudio) {
    
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
        if (elemento.localName === 'audio');
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado.')
        console.log('Elemento não encontrado ou seletor inválido');
    }
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
