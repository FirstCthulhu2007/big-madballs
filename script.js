document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('myPlayer');

    // Функция запуска с проверкой
    function playMusic() {
        if (audio && audio.paused) {
            audio.play().catch(error => {
                console.log('Не удалось запустить:', error);
            });
        }
    }

    // Попытка автозапуска
    audio.play().catch(() => {
        // Если не вышло — ждём клика
        document.body.addEventListener('click', playMusic, { once: true });
    });
});
