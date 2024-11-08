document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.hearts-container');
    const timeCounter = document.getElementById('time-counter');
    const timeUntilNamoro = document.getElementById('time-until-namoro');

    // Data em que se conheceram e data de início do namoro
    const startDate = new Date('2024-08-18T00:00:00'); // Data de quando se conheceram
    const namoroDate = new Date('2025-01-18T00:00:00'); // Data para início do namoro

    // Função para calcular e atualizar a contagem de tempo desde que se conheceram
    function updateTime() {
        const now = new Date();
        const timeDifference = now - startDate;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        timeCounter.innerHTML = `
            Desde que nos conhecemos: ${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos
        `;
    }

    // Função para calcular e atualizar a contagem regressiva para o namoro
    function updateCountdown() {
        const now = new Date();
        const timeUntilNamoroDate = namoroDate - now;

        if (timeUntilNamoroDate > 0) {
            const days = Math.floor(timeUntilNamoroDate / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeUntilNamoroDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeUntilNamoroDate % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeUntilNamoroDate % (1000 * 60)) / 1000);

            timeUntilNamoro.innerHTML = `
                Tempo até começarmos a namorar: ${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos
            `;
        } else {
            timeUntilNamoro.innerHTML = "Já estamos namorando!";
        }
    }

    // Função para criar um coração flutuante
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '❤️';

        const x = Math.random() * window.innerWidth;
        heart.style.left = `${x}px`;
        heart.style.top = '100vh';

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000); // Remove o coração após 5 segundos
    }

    // Intervalos de atualização
    setInterval(createHeart, 300); // Cria um coração a cada 300 ms
    setInterval(updateTime, 1000); // Atualiza o contador de tempo desde que se conheceram a cada segundo
    setInterval(updateCountdown, 1000); // Atualiza a contagem regressiva para o namoro a cada segundo
});
