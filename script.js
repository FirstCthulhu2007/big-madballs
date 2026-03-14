// Ждем, когда загрузится страница
window.addEventListener('load', function() {
  var audio = document.getElementById('myPlayer');
  var playButton = document.getElementById('playButton');

  // Пытаемся автоматически запустить музыку
  // (Сработает только если браузер это разрешит, но чаще всего нет)
  var playPromise = audio.play();

  if (playPromise !== undefined) {
    playPromise.then(function() {
      // Автовоспроизведение сработало!
      console.log("Музыка играет автоматически");
      playButton.style.display = 'none'; // Прячем кнопку
    }).catch(function(error) {
      // Автовоспроизведение заблокировано браузером.
      console.log("Автовоспроизведение не сработало. Ждем клик пользователя.");
      // Показываем кнопку, если она была скрыта
      playButton.style.display = 'inline-block';
    });
  }

  // Обработчик клика по кнопке (или можно по всему экрану)
  playButton.addEventListener('click', function() {
    audio.play();
    playButton.style.display = 'none'; // Прячем кнопку после нажатия
  });

  // Ждём, когда загрузится весь контент страницы
document.addEventListener('DOMContentLoaded', function() {
    // Находим наши элементы на странице
    const audio = document.getElementById('myPlayer');
  const playButton = document.getElementById('playButton');
    const volumeControl = document.getElementById('volumeControl');

    // Проверяем, есть ли вообще такие элементы на странице (на всякий случай)
    if (!audio || !volumeControl) {
        console.log('Аудио или ползунок не найдены');
        return;
    }

    // Устанавливаем начальную громкость из ползунка
    audio.volume = parseFloat(volumeControl.value);

    // Событие 'input' срабатывает, когда ползунок двигается (в реальном времени)
    volumeControl.addEventListener('input', function() {
        audio.volume = parseFloat(this.value);
        // Можно добавить отображение значения в процентах, если хочешь
        console.log('Громкость:', Math.round(this.value * 100) + '%');
    });
});
  
  // Бонус: можно сделать так, чтобы музыка играла при клике в любом месте сайта
  // document.body.addEventListener('click', function() {
  //   audio.play();
  // });
});
