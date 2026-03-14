// Пытаемся автоматически запустить музыку (может не сработать)
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('myPlayer');
    if (audio) {
        audio.play().catch(() => {
            // Если автозапуск заблокирован — ничего не делаем,
            // пользователь нажмёт Play в плеере
        });
    }
});
