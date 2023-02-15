const sec = document.querySelector('.sec');
const min = document.querySelector('.min');
const hour = document.querySelector('.hour');

function setDate() {
  const now = new Date();
  const second = now.getSeconds();
  const minute = now.getMinutes();
  const hours = now.getHours();
  const secondDegree = (second / 60) * 360;
  const minDegree = (minute / 60) * 360;
  const hoursDegree = (hours / 12) * 360;
  sec.style.transform = `rotate(${secondDegree}deg)`;
  min.style.transform = `rotate(${minDegree}deg)`;
  hour.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setDate, 1000);
