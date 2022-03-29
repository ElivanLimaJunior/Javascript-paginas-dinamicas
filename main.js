function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

/*document: Acessar o documento.
querySelector(''): Selecionar tag ou classe dentro do nosso HTML
.onclick = FUNÇÃO(): ativar função quando clicar*/
document.querySelector('.tecla_pom').onclick = tocaSomPom; /*Se colocarmos as aspas no final dessa função, ela será execultada assim que o navegador for recarregado. Então para que isso não aconteça deixamos sem as aspas.*/