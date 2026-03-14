document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('myPlayer');
    const playButton = document.getElementById('playButton');

    if (audio && playButton) {
        // Попытка авто-запуска (может не сработать)
        var playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.then(function() {
                playButton.style.display = 'none';
            }).catch(function() {
                playButton.style.display = 'inline-block';
            });
        }

        playButton.addEventListener('click', function() {
            audio.play();
            playButton.style.display = 'none';
        });
    }
});
