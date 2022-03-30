function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

//Primeiro criamos uma constante com o nome de listaDeTeclas, nela declaramos o document.querySelectorAll para que ele possa pegar todas as classes com o nome .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');
//Essa declaração nos retorna uma lista com todas as teclas declaradas com essa classe. Então agora o listaDeTeclas passa a ser uma lista com as 9 teclas armazenadas.

//pegamos a nossa lista e escolhemos a tecla 1 que é representado como 0 na programação. Então colocamos nela o onclick e a função tocaSomPom.
listaDeTeclas[0].onclick = tocaSomPom;