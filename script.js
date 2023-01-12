// Array dos itens do player de musica, contendo
// titulo, artista, src e img

let musicas = [
    {
        titulo:'Boom Bap Flick',
        artista: 'Quincas Moreira',
        src: './musicas/Boom Bap Flick - Quincas Moreira.mp3',
        img: './assets/r&b.jpg'
    },
    {
       titulo:'God Rest Ye Merry',
       artista:'DJ Williams',
       src:'./musicas/God Rest Ye Merry Gentlmen - DJ Williams.mp3' ,
       img:'./assets/reb.jpg'
    },
    {
       titulo:'Ice & Fire',
       artista:'King Canyon',
       src:'./musicas/Ice & Fire - King Canyon.mp3' ,
       img:'./assets/hiphop.jpg'
    }
];

// Pegando a musica da tag audio

let musica = document.querySelector("audio");
let indexMusica = 0;

// Seleciona os minutos da musica e a imagem nome da musica e nome do artista

let duracaoMusica = document.querySelector(".fim");
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);

// Evento de seleciona os botões e ficar atualizando a barra de progresso da musica
document.querySelector(".botao-play").addEventListener("click", tocarMusica);

document.querySelector(".botao-pause").addEventListener("click", pausarMusica);

musica.addEventListener("timeupdate", atualizarBarra);

// Passar e voltar a musica

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);

})

document.querySelector('.proximo').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 2) {
        indexMusica = 0;
    }
    
    renderizarMusica(indexMusica);
})

// Função para renderizar a musica, a imagem, o titulo e o artista

function renderizarMusica(index) {
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

// As funções de tocar/pausar as musicas

function tocarMusica() {
  musica.play();
  document.querySelector(".botao-pause").style.display = "block";
  document.querySelector(".botao-play").style.display = "none";
}

function pausarMusica() {
  musica.pause();
  document.querySelector(".botao-pause").style.display = "none";
  document.querySelector(".botao-play").style.display = "block";
}

// Função para ver o progresso da musica

function atualizarBarra() {
  let barra = document.querySelector("progress");
  barra.style.width =
    Math.floor((musica.currentTime / musica.duration) * 100) + "%";
  let tempoDecorrido = document.querySelector(".inicio");
  tempoDecorrido.textContent = segundosParaMinutos(
    Math.floor(musica.currentTime)
  );
}

function segundosParaMinutos(segundos) {
  let campoMinutos = Math.floor(segundos / 60);
  let campoSegundos = segundos % 60;
  if (campoSegundos < 10) {
    campoSegundos = "0" + campoSegundos;
  }

  return campoMinutos + ":" + campoSegundos;
}


