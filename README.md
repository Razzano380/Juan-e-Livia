<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha Página Romântica</title>
    <link rel="stylesheet" href="/Juju-e-Lulu/styles.css"> <!-- Referência ao arquivo CSS -->
    <style>
        img {
            max-width: 100%;   /* A imagem nunca ultrapassará 100% da largura da tela */
            height: auto;      /* A altura será ajustada automaticamente para manter a proporção */
            margin: 0 auto;    /* Centraliza a imagem horizontalmente */
            display: block;    /* Garante que a imagem seja exibida como um bloco e ocupe toda a largura disponível */
            border-radius: 15px; /* Adiciona bordas arredondadas */
        }

        /* Estilos para a checkbox */
        .checkbox-container {
            margin-top: 20px;
            text-align: center; /* Centraliza a checkbox e o texto */
        }

        .checkbox-container input[type="checkbox"] {
            margin-right: 10px; /* Espaço entre a checkbox e o texto */
            transform: scale(1.2); /* Aumenta o tamanho da checkbox */
        }

        .checkbox-container label {
            font-size: 1.2rem; /* Aumenta o tamanho da fonte do texto */
        }
    </style>
</head>
<body>
    <h1>Foto do casal</h1>
    <img src="/Juju-e-Lulu/VcaH8LA.jpeg" alt="Foto do casal">
    
    <!-- Div para a checkbox -->
    <div class="checkbox-container">
        <input type="checkbox" id="option1">
        <label for="option1">Você quer ser minha pra sempre ?</label>
        <br>
        <input type="checkbox" id="option2">
        <label for="option2">Não, eu te odeio</label>
    </div>

    <!-- Div para os corações flutuantes -->
    <div class="hearts-container"></div>

    <!-- Div para exibir a contagem de tempo -->
    <div id="time-counter" class="time-counter"></div>

    <script src="/Juju-e-Lulu/script.js"></script> <!-- Referência ao arquivo JavaScript -->
</body>
</html>

