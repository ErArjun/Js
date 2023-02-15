window.addEventListener('keydown', function (e) {
  const audio = this.document.querySelector(`audio[data-key="${e.key}"]`);
  const key = this.document.querySelector(`.key[data-key="${e.key}"]`);
  if (!audio) return;
  audio.load();
  audio.play();
  key.classList.add('active');
});

window.addEventListener('keyup', function (e) {
  const key = this.document.querySelector(`.key[data-key="${e.key}"]`);
  if (!key) return;
  key.classList.remove('active');
});
