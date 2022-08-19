const count = document.getElementById("count");

const clock = () => {
  const anniversary = new Date("2022-10-30T00:00:00");
  const today = new Date();

  const remain = anniversary - today;
  const remainDay = remain / (1000 * 60 * 60 * 24);
  const remainHours = (remain / (1000 * 60 * 60)) % 24;

  count.innerText = `${remainDay} ${remainHours}`;
};

clock();
setInterval(clock, 1000);
