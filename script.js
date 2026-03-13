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

  // Бонус: можно сделать так, чтобы музыка играла при клике в любом месте сайта
  // document.body.addEventListener('click', function() {
  //   audio.play();
  // });
});