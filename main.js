// funcao para reproducao de som 
function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

//referencia constante para as listas de botoes 
const listaDeTeclas = document.querySelectorAll('.tecla');

// variavel para ponto de loop inicial 
let contador = 0;

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || 'Enter') {
            tecla.classList.add ('ativa');
        }  
    }

    tecla.onkeyup = function () {
        tecla.classList.remove ('ativa');
    }
}