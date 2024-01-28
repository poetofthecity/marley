var xp = 0,
  mouseX = 0;
var yp = 0,
  mouseY = 0;
var xpDot = 0,
  mouseX = 0;
var ypDot = 0,
  mouseY = 0;

const cursorFollower = document.querySelector(".cursorFollower");
const cursorFollowerDot = document.querySelector(".cursorFollowerDot");
const curse = document.querySelectorAll(".hove")

document.addEventListener("mousemove", (e) => {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

setInterval(function () {
  xp += (mouseX - xp) / 3;
  yp += (mouseY - yp) / 3;

  cursorFollower.style.left = xp + "px";
  cursorFollower.style.top = yp + "px";
}, 20);

setInterval(function () {
  xpDot += (mouseX - xpDot) / 1;
  ypDot += (mouseY - ypDot) / 1;

  cursorFollowerDot.style.left = xpDot + "px";
  cursorFollowerDot.style.top = ypDot + "px";
}, 20);

curse.forEach(element => {
  element.addEventListener('mouseover', () => {
    cursorFollowerDot.classList.add('cursor-active')
    cursorFollower.classList.add('cursor-activeFollower')
  })

  element.addEventListener('mouseout', () => {
    cursorFollowerDot.classList.remove('cursor-active')
    cursorFollower.classList.remove('cursor-activeFollower')
  })
});