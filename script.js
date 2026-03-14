document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('myPlayer');

    if (audio) {
        // Устанавливаем громкость 80%
        audio.volume = 0.8;

        // Пытаемся автоматически запустить музыку
        audio.play().catch(() => {
            console.log('Автозапуск заблокирован браузером');
        });

        // Отправка события в Яндекс.Метрику при начале воспроизведения
        audio.addEventListener('play', function() {
            // Проверяем, что функция ym существует (Метрика загружена)
            if (typeof ym !== 'undefined') {
                // НОМЕР_СЧЁТЧИКА замени на свой (из шага 1)
                ym(107699253, 'reachGoal', 'play');
                console.log('Событие play отправлено в Метрику');
            }
        });
    }
});
