document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('myPlayer');
    let isPlaying = false; // флаг, чтобы не запускать повторно

    // Функция запуска музыки
    function playMusic() {
        if (audio && !isPlaying) {
            audio.play()
                .then(() => {
                    isPlaying = true;
                    console.log('Музыка запущена');
                })
                .catch(error => {
                    console.log('Не удалось запустить музыку:', error);
                });
        }
    }

    // Пытаемся авто-запустить (вдруг браузер разрешит)
    audio.play().catch(() => {
        // Автозапуск не сработал — ждём клика
        console.log('Ждём клика пользователя');
    });

    // Обработчик клика по всему документу
    document.body.addEventListener('click', function() {
        playMusic();
    }, { once: true }); // { once: true } — обработчик сработает только один раз
});
