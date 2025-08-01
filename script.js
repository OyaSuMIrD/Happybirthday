// Показываем особое пожелание
function showWish() {
    document.getElementById('congratulation').classList.add('hidden');
    document.getElementById('special-wish').classList.remove('hidden');
}

// Возвращаемся к основному поздравлению
function showCongratulation() {
    document.getElementById('special-wish').classList.add('hidden');
    document.getElementById('congratulation').classList.remove('hidden');
}

// Создаем дополнительные шарики при загрузке
document.addEventListener('DOMContentLoaded', function() {
    for (let i = 0; i < 10; i++) {
        createBalloon();
    }
});

function createBalloon() {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = Math.random() * 100 + '%';
    balloon.style.top = Math.random() * 100 + '%';
    balloon.style.animationDelay = Math.random() * 3 + 's';
    document.body.appendChild(balloon);
}
