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
    
    
});


    // Verifica se o checkbox "confirmAgainNo" existe antes de adicionar o evento
    if (confirmAgainNo) {
        confirmAgainNo.addEventListener('change', function() {
            if (this.checked) {
                console.log("Alerta 'Não' selecionado");  // Depuração
                alertBox.classList.add('hidden');  // Oculta o alerta
            }
        });
    }

    // Verifica se o botão "agreeContract" existe antes de adicionar o evento
    if (agreeContract) {
        agreeContract.addEventListener('click', function() {
            console.log("Contrato assinado");  // Depuração
            alert("Contrato de Namoro assinado com sucesso! ❤️");
            contractBox.classList.add('hidden');  // Oculta o contrato após assinado
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona os elementos usando os IDs
    const yesCheckbox = document.getElementById('confirm-yes');
    const noCheckbox = document.getElementById('confirm-no');  // Primeiro "Não" checkbox
    const alertBox = document.getElementById('alert-box');
    const contractBox = document.getElementById('contract-box');
    const confirmAgainYes = document.getElementById('confirm-again-yes');
    const confirmAgainNo = document.getElementById('confirm-again-no');
    const agreeContract = document.getElementById('agree-contract');

    // Verifica se o checkbox "Sim" existe antes de adicionar o evento
    if (yesCheckbox) {
        yesCheckbox.addEventListener('change', function() {
            if (this.checked) {
                console.log("Primeiro 'Sim' selecionado");  // Depuração
                alertBox.classList.remove('hidden');  // Exibe o alerta
            }
        });
    }

    // Verifica se o checkbox "Não" existe antes de adicionar o evento
    if (noCheckbox) {
        noCheckbox.addEventListener('change', function() {
            if (this.checked) {
                console.log("Primeiro 'Não' selecionado");  // Depuração
                window.location.href = "https://www.youtube.com/watch?v=PnAMEe0GGG8&t=36s";  // Redireciona para o YouTube
            }
        });
    }

    // Verifica se o checkbox "confirmAgainYes" existe antes de adicionar o evento
    if (confirmAgainYes) {
        confirmAgainYes.addEventListener('change', function() {
            if (this.checked) {
                console.log("Segundo 'Sim' selecionado no alerta");  // Depuração
                alertBox.classList.add('hidden');   // Oculta o alerta
                contractBox.classList.remove('hidden');  // Exibe o contrato
            }
        });
    }

    // Verifica se o checkbox "confirmAgainNo" existe antes de adicionar o evento
    if (confirmAgainNo) {
        confirmAgainNo.addEventListener('change', function() {
            if (this.checked) {
                console.log("Alerta 'Não' selecionado");  // Depuração
                alertBox.classList.add('hidden');  // Oculta o alerta
            }
        });
    }

    // Verifica se o botão "agreeContract" existe antes de adicionar o evento
    if (agreeContract) {
        agreeContract.addEventListener('click', function() {
            console.log("Contrato assinado");  // Depuração
            alert("Contrato de Namoro assinado com sucesso! ❤️");
            contractBox.classList.add('hidden');  // Oculta o contrato após assinado
        });
    }
});
