function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}


const listaDeTeclas = document.querySelectorAll('.tecla');


let contador = 0;
//listaDeTeclas.length saber o tamanho exato da nossa lista

while (contador < listaDeTeclas.length) {

    listaDeTeclas[contador].onclick = function () {
        tocaSom('#som_tecla_pom')
    };

    contador = contador + 1

    console.log(contador);
}

/* Primeiro nós criamos uma função "tocaSom "
Dentro das () descrevemos o que vamos pegar de dentro do nosso código HTML, apenas escrevemos o que é para identificar.
Após isso, abrimos as chaves {} e colocamos dentro a nossa função que é :

        document.querySelector(idElementoAudio).play();

        document : acessar HTML
        querySelector() : Seleciona o que vamos selecionar
        .play() : o que vai fazer ?


após isso criamos uma const que recebeu listaDeTeclas.
Então usamos o querySelectorAll('.tecla') para pegar todas as tags q tem a classe ".tecla" no documento fazendo assim uma lista.

criamos um contador com o let que é um valor variavel, no nosso caso ele vai ser um contador.


Após usamos o While para dar uma condição para nossa função ser ativada.