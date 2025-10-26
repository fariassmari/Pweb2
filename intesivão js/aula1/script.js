const botaoPlayPause = document.getElementById('play-pause');
const ProximoCapitulo = document.getElementById('proximo');
const capituloAnterior = document.getElementById('anterior');
const audio = document.getElementById('audio-capitulo');

function tocarFaixa(){
    console.log('Clicou')
    audio.play();
    taTocando = true;
    console.log('Deu play!')
}

function pausarFaixa(){
    console.log('Clicou')
    audio.pause();
    taTocando = false;
    console.log('Deu pause!')
}

function tocarOuPausar(){
    if(taTocando === true){
        pausarFaixa();
    }else{
        tocarFaixa();
    }
}

botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoProximoCapitulo.addEventListener('click', proximoCapitulo);
botaoCapituloAnterior.addEventListener('click', capituloAnterior);