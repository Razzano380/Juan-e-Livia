document.addEventListener("DOMContentLoaded", function () {
  // Timer
  const timer = document.getElementById('timer');
  const startDate = new Date('2025-04-26T00:00:00');

  function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    if (timer) {
      timer.textContent = `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos 💗`;
    }
  }

  setInterval(updateTimer, 1000);
  updateTimer();

  // Corações
  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);


  // Checkboxes românticos
  const yesCheckbox = document.getElementById('confirm-yes');
  const noCheckbox = document.getElementById('confirm-no');
  const alertBox = document.getElementById('alert-box');
  const contractBox = document.getElementById('contract-box');
  const confirmAgainYes = document.getElementById('confirm-again-yes');
  const confirmAgainNo = document.getElementById('confirm-again-no');
  const agreeContract = document.getElementById('agree-contract');

  if (yesCheckbox) {
    yesCheckbox.addEventListener('change', function () {
      if (this.checked) alertBox.classList.remove('hidden');
    });
  }

  if (noCheckbox) {
    noCheckbox.addEventListener('change', function () {
      if (this.checked) window.location.href = "https://www.youtube.com/watch?v=PnAMEe0GGG8&t=36s";
    });
  }

  if (confirmAgainYes) {
    confirmAgainYes.addEventListener('change', function () {
      if (this.checked) {
        alertBox.classList.add('hidden');
        contractBox.classList.remove('hidden');
      }
    });
  }

  if (confirmAgainNo) {
    confirmAgainNo.addEventListener('change', function () {
      if (this.checked) alertBox.classList.add('hidden');
    });
  }

  if (agreeContract) {
    agreeContract.addEventListener('click', function () {
      alert("Contrato de Namoro assinado com sucesso! ❤️");
      contractBox.classList.add('hidden');
    });
  }
});
