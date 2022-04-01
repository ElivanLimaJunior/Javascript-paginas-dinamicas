function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}


const listaDeTeclas = document.querySelectorAll('.tecla');


let contador = 0;
//listaDeTeclas.length saber o tamanho exato da nossa lista

while (contador < listaDeTeclas.length) {

    
    const instrumento = listaDeTeclas[contador].classList[1];

    console.log(instrumento)

    listaDeTeclas[contador].onclick = function () {
        tocaSom('#som_tecla_pom')
    };

    contador = contador + 1

    console.log(contador);
}

/* no navegador, acessamos o console e digitamos:

 listaDeTeclas[0].classlist[]

 ela nos retorna uma lista de classes, então podemos numerar a .classlist[0] por ex: para acessar a primeira classe da lista.
 
 Class.list:
 
 classList é uma propriedade somente leitura que retorna uma coleção DOMTokenList (en-US) ativa dos atributos de classe do elemento. Usar classList é uma alternativa conveniente para acessar a lista de classes de um elemento como uma seqüência delimitada por espaço através de element. className
 */