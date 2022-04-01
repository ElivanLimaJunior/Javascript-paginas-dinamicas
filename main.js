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
 
 */