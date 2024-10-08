document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.hearts-container');
    const timeCounter = document.getElementById('time-counter');

    // Data do início do relacionamento (modifique a data para quando você conheceu sua namorada)
    const startDate = new Date('2024-08-18T00:00:00'); // Exemplo: 18 de agosto de 2024

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
    document.getElementById('option1').addEventListener('change', function() {
    if (this.checked) {
        alert('Você me escolheu! 💖');
    }
});

document.getElementById('option2').addEventListener('change', function() {
    if (this.checked) {
        alert('Eu te amo mesmo assim! 😘');
    }
});


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
