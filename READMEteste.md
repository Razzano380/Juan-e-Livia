<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Namorar Juan e Luana</title>
    <style>
        /* Barra de rolagem */
        body {
            overflow-y: scroll;
            font-family: Arial, sans-serif;
            position: relative;
        }

        /* Quadro e estilo principal */
        .quadro {
            border: 2px solid #d3d3d3;
            padding: 20px;
            width: 300px;
            margin: 20px auto;
            text-align: center;
            background-color: #f9f9f9;
        }

        /* Tabela de Prós e Contras */
        .tabela-pros-contras {
            display: none;
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
        }

        .tabela-pros-contras td, .tabela-pros-contras th {
            border: 1px solid #ddd;
            padding: 8px;
        }

        .tabela-pros-contras th {
            background-color: #f2f2f2;
            font-weight: bold;
        }

        /* Mostrar tabela ao passar o mouse */
        .nome:hover + .tabela-pros-contras {
            display: table;
        }

        .nome {
            font-weight: bold;
            cursor: pointer;
            color: #0066cc;
            text-decoration: underline;
        }

        /* Efeito de corações */
        .heart {
            position: fixed;
            bottom: -50px;
            left: 50%;
            font-size: 24px;
            color: #ff69b4;
            opacity: 1;
            transform: translateX(-50%);
            animation: float 5s linear infinite;
        }

        @keyframes float {
            0% {
                bottom: -50px;
                opacity: 1;
                transform: translateX(-50%) scale(1);
            }
            100% {
                bottom: 100vh;
                opacity: 0;
                transform: translateX(-50%) scale(0.5);
            }
        }
    </style>
</head>
<body>

    <!-- Conteúdo do site -->
    <div class="quadro">
        <h2>Prós e Contras de Namorar o Juan</h2>
        <span class="nome">Juan</span>
        <table class="tabela-pros-contras">
            <tr>
                <th>Prós</th>
                <th>Contras</th>
            </tr>
            <tr>
                <td>Engraçado</td>
                <td>Distraído às vezes</td>
            </tr>
            <tr>
                <td>Carinhoso</td>
                <td>Ouve música alta</td>
            </tr>
        </table>

        <h2>Prós e Contras de Namorar a Luana</h2>
        <span class="nome">Luana</span>
        <table class="tabela-pros-contras">
            <tr>
                <th>Prós</th>
                <th>Contras</th>
            </tr>
            <tr>
                <td>Atenciosa</td>
                <td>Teimosinha</td>
            </tr>
            <tr>
                <td>Alegre</td>
                <td>Organiza tudo</td>
            </tr>
        </table>
    </div>

    <!-- Script para gerar os corações -->
    <script>
        function createHeart() {
            const heart = document.createElement("div");
            heart.classList.add("heart");
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = Math.random() * 2 + 3 + "s";
            heart.innerText = "❤️";

            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 5000);
        }

        setInterval(createHeart, 500); // Cria um coração a cada 500ms
    </script>

</body>
</html>
