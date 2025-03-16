const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const confetti = document.querySelector('.confetti');

let yesButtonSize = 1;

noButton.addEventListener('click', () => {
    yesButtonSize += 0.4;
    yesButton.style.transform = `scale(${yesButtonSize})`;

    if (yesButtonSize >= 2.5) {
        noButton.style.display = 'none';
    }
});

yesButton.addEventListener('click', () => {
    confetti.style.display = 'block';
    setTimeout(() => {
        alert('Yay! ❤️ Can’t wait for our date!');
    }, 500);
});
