document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.hearts-container');
    const timeCounter = document.getElementById('time-counter');
    const countdownToDate = document.getElementById('countdown-to-date');

    // Data do início do relacionamento
    const startDate = new Date('2024-08-18T00:00:00'); // Data de quando se conheceram
    const officialDate = new Date('2025-01-18T00:00:00'); // Data do início do namoro oficial

    // Função para calcular e atualizar a contagem de tempo desde que se conheceram
    function updateTime() {
        const now = new Date();
        const timeDifference = now - startDate;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        timeCounter.innerHTML = `
            Estamos juntos há: ${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos
        `;
         timeCounter.style.color = "#FF69B4"; // Cor rosa
    }

    // Função para calcular a contagem regressiva até a data de namoro oficial
    function updateCountdown() {
        const now = new Date();
        const countdownDifference = officialDate - now;

        const days = Math.floor(countdownDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((countdownDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((countdownDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((countdownDifference % (1000 * 60)) / 1000);

        countdownToDate.innerHTML = `
            Faltam: ${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos para o namoro oficial
        `;
         timeCounter.style.color = "#FF69B4"; // Cor rosa
    }

    // Função para criar um coração flutuante
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '❤️';

        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000); // Remove o coração após 5 segundos
    }

    setInterval(createHeart, 300); // Um novo coração a cada 300 milissegundos
    setInterval(updateTime, 1000); // Atualiza a contagem de tempo a cada segundo
    setInterval(updateCountdown, 1000); // Atualiza a contagem regressiva a cada segundo
    
    // Função chamada pela API YouTube quando está pronta
let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        videoId: 'PnAMEe0GGG8',  // ID do vídeo
        playerVars: {
            autoplay: 0,         // Deixe em 0; o autoplay será feito manualmente
            start: 36,           // Início no segundo 36
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

// Função chamada quando o vídeo está pronto para ser reproduzido
function onPlayerReady(event) {
    // Podemos deixar essa função vazia, pois vamos iniciar o vídeo com `playSong()`
}

function handleAnswer(answer) {
    if (answer.value === "no") {
        playSong();
    }
}

function playSong() {
    if (player && player.playVideo) {
        player.playVideo();
    }
}
    
});
