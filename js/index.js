const clockTitle = document.querySelector(".js-clock");
const x_mas = new Date(2022, 12, 25);

function x_day() {
  const date = new Date();
  //일자
  let difftime = x_mas.getTime() - date.getTime();
  let day = Math.ceil(difftime / (1000 * 60 * 60 * 24));
  //시간
  difftime = difftime % (1000 * 60 * 60 * 24);
  let hour = String(Math.ceil(difftime / (1000 * 60 * 60))).padStart(2, "0");
  //분
  difftime = difftime % (1000 * 60 * 60);
  let minite = String(Math.ceil(difftime / (1000 * 60))).padStart(2, "0");
  //초
  difftime = difftime % (1000 * 60);
  let second = String(Math.ceil(difftime / 1000)).padStart(2, "0");

  clockTitle.innerText = `${day}d ${hour}h ${minite}m ${second}s`;
}
x_day();
setInterval(x_day, 1000);
