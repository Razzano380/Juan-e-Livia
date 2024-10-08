<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nosso Tempo Juntos</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
        #timer {
            font-size: 2em;
            margin-top: 20px;
        }
        img {
            max-width: 100%;
            height: auto;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <h1>Nosso Tempo Juntos</h1>
    <img src= "https://i.imgur.com/VcaH8LA.jpeg" alt="Foto do casal">
    <div id="timer"></div>

    <script>
        const startDate = new Date('2024-08-18T00:00:00'); // Data que vocês se conheceram

        function updateTimer() {
            const now = new Date();
            const difference = now - startDate;

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            document.getElementById('timer').innerHTML = 
                `Estamos juntos há ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos.`;
        }

        setInterval(updateTimer, 1000); // Atualiza o timer a cada segundo
    </script>
</body>
</html>
