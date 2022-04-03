function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}


const listaDeTeclas = document.querySelectorAll('.tecla');

//A tradução de for é PARA.
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idaudio = `#som_${instrumento}`; //Template string abaixo

    tecla.onclick = function () {
        tocaSom(idaudio);
    }


    //Criando uma função para quando acionarmos uma tecla o teclado, ela fique vermelha. Porém ainda faltam ajustes pois nós estamos acrescentando uma classe ao nosso HTML, mas não estamos dizendo em qual momento ela deve ser retirada.
    tecla.onkeydown = function () {
        tecla.classList.add('ativa');
    }
    //onkeydown: Quando acionamos a telca com o teclado.
    //ClassList.add('ativa'): estamos adiconando a classe 'ativa' no nosso HTML.
}
