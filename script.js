document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('myPlayer');

    if (audio) {
        // Устанавливаем громкость 80%
        audio.volume = 0.8;

        // Пытаемся автоматически запустить музыку
        audio.play().catch(() => {
            // Если автозапуск не сработал — ничего не делаем,
            // пользователь запустит музыку сам через плеер
            console.log('Автозапуск заблокирован браузером');
        });
    }
});
