const clock = document.querySelector(".clock");

function displayClock() {
  const Christmas = new Date("2022-12-25T00:00:00"); // 남은 시간을 밀리세컨드초 단위로 반환
  const today = new Date();

  const remain = Christmas - today;
  const remainDay = String(Math.ceil(remain / (1000 * 60 * 60 * 24)));
  const remainHours = String(
    Math.floor((remain / (1000 * 60 * 60)) % 24)
  ).padStart(2, "0");
  const remainMinutes = String(
    Math.floor((remain / (1000 * 60)) % 60)
  ).padStart(2, "0");
  const remainSeconds = String(Math.floor((remain / 1000) % 60)).padStart(
    2,
    "0"
  );

  clock.innerText = `D-${remainDay} ${remainHours}h ${remainMinutes}m ${remainSeconds}s`;
}

displayClock();
setInterval(displayClock, 1000);
