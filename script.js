document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.hearts-container');
    const timeCounter = document.getElementById('time-counter');
    const timeUntilNamoro = document.getElementById('time-until-namoro');

    // Data do início do relacionamento e a data que vamos namorar(modifique a data para quando você conheceu sua namorada)
    const startDate = new Date('2024-08-18T00:00:00'); // Exemplo: 18 de agosto de 2024
    const namoroDate = new Date('2025-01-18T00:00:00');// Data para ínicio do namoro 
    

    // Função para calcular e atualizar a contagem de tempo
    function updateTime() {
        const now = new Date();
        const timeDifference = now - startDate;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Converte milissegundos para dias
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Horas
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)); // Minutos
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000); // Segundos

        // Atualiza o conteúdo do contador de tempo
        timeCounter.innerHTML = `
            ${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos
        `;
    }

    //Função para calcular o tempo até a gente namorar
function updateCountdown(){
    const now = new Date();
    const timeUntilNamoro = namoroDate - now;

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
        heart.textContent = '❤️'; // Pode usar o emoji de coração ou uma imagem

        // Posições aleatórias
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;

        container.appendChild(heart);

        // Remove o coração após o fim da animação
        setTimeout(() => {
            heart.remove();
        }, 5000); // Remove o coração após 5 segundos
    }

    // Criar corações continuamente
    setInterval(createHeart, 300); // Um novo coração a cada 300 milissegundos

    // Atualizar o contador de tempo a cada 1 segundo
    setInterval(updateTime, 1000); // Atualiza a cada 1000 milissegundos (1 segundo)
});

