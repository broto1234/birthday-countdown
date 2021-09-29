function countdown () {
  const countTime = new Date ("October 29, 2021 12:10:00").getTime();
  const currentTime = new Date().getTime();
  const distance = countTime - currentTime;

  let xd = document.querySelector(".day");
  let xh = document.querySelector(".hour");
  let xm = document.querySelector(".minute");
  let xs = document.querySelector(".second");
  let xb = document.body;
  let xbs = document.body.style;
  
  const day = 1000 * 60 * 60 * 24;
  const hour = 1000 * 60 * 60;
  const minute = 1000 * 60;
  const second = 1000;

  const d = Math.floor(distance / day);
  const h = Math.floor((distance % day) / hour);
  const m = Math.floor((distance % hour) / minute);
  const s = Math.floor((distance % minute) / second); 

  xd.innerHTML = d < 10 ? '0' + d : d;
  xh.innerHTML = h < 10 ? '0' + h : h;
  xm.innerHTML = m < 10 ? '0' + m : m;
  xs.innerHTML = s < 10 ? '0' + s : s;

  if (d == 0 && h == 0 && m == 0 && s == 0) {
    xb.innerHTML = "Congratulation!!! <br> Happy Birthday";
    xbs.fontSize = '2rem';
    xbs.textAlign = 'center';
    xbs.color = 'blue';
    xbs.background = "url('cake.jpg') no-repeat 50% -50%";
    xbs.marginTop = "3.5rem";
    xbs.border = 'none';
    xbs.width = 'none';
    xbs.boxShadow = 'none';
    xbs.margin = 'none';
  }

  setInterval(countdown,1000);
}
countdown();
