function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}


const listaDeTeclas = document.querySelectorAll('.tecla');


let contador = 0;
//listaDeTeclas.length saber o tamanho exato da nossa lista

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    console.log(instrumento);
    //Template string abaixo
    //Irá receber a string #som_+a string que está vindo dentro do indice de listaDeTeclas.
    const idaudio = `#som_${instrumento}`

    tecla.onclick = function () {
        tocaSom(idaudio);
    }

    contador = contador + 1;

    console.log(contador);
}
