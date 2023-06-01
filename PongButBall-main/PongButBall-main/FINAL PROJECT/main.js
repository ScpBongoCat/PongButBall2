const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.canvas.width = window.innerWidth - 15;
ctx.canvas.height = window.innerHeight - 21;

let a = 10;
let x = 770;
let y = 570;
let vx = 0;
let vy = a;
let P1L = 600;
let P1H = canvas.height / 2 - P1L / 2;
let P2L = 600;
let P2H = canvas.height / 2 - P2L / 2;
let score = 0;
let displayscore = "0";
let bounceamount = 1;
let displaybounceamount = "1";

//Ball & Paddles
function update() {
  //Ball
  ctx.clearRect(x, y, canvas.height, canvas.width);
  x += vx;
  y += vy;

  ctx.fillRect(x, y, 50, 50);
  //Paddles

  ctx.fillRect(0, P1H, 40, P1L);

  ctx.fillRect(canvas.width - 40, P2H, 40, P2L);

  if (x <= 40 && x >= 0 && y >= P1H - 40 && y <= P1H + P1L) {
    vx = a;
    ctx;
    P1H = Math.floor(Math.random() * (680 - 40 + 1)) + 40;
    P1L = P1L - 10;
    ctx.clearRect(0, 40, 40, 1110);
    a = a + 1;
    //gconsole.log(P1H);
  }
  if (
    x >= canvas.width - 80 &&
    x <= canvas.width &&
    y >= P2H - 40 &&
    y <= P2H + P2L
  ) {
    vx = -a;
    P2H = Math.floor(Math.random() * (680 - 40 + 1)) + 40;
    P2L = P2L - 10;
    ctx.clearRect(canvas.width - 40, 40, canvas.width, canvas.height - 40);
    a = a + 1;
    //console.log(P2H);
  }

  //Top & Bottom
  ctx.fillRect(0, 0, canvas.width, 40);

  ctx.fillRect(0, canvas.height - 40, canvas.width, 40);

  if (y <= 0 + 40) {
    vy = a;
  }
  if (y >= 1190 - 90) {
    vy = -a;
  }
  requestAnimationFrame(update);
  //console.log(x);
  //console.log(y);
}
update();

//Ball Movement
window.addEventListener("keydown", function (e) {
  //console.log(e.key);
  if (e.key == "r") {
    vy = a;
    vx = 0;
    x = 770;
    y = 570;
    P1L = 500;
    P1H = canvas.height / 2 - P1L / 2;
    P2L = 500;
    P2H = canvas.height / 2 - P2L / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  if (e.key == "g") {
    vx = a;
  }
  if (e.key == "w") {
    vy = -a;
  }
  if (e.key == "s") {
    vy = a;
  }
  // if (e.key == "a") {
  //   vx = -10;
  // }
  // if (e.key == "d") {
  //   vx = 10;
  // }
});

// window.addEventListener("keyup", function (e) {
//   //console.log(e.key);
//   if (e.key == "w") {
//     vy = 0;
//   }
//   if (e.key == "s") {
//     vy = 0;
//   }
//   if (e.key == "a") {
//     vx = 0;
//   }
//   if (e.key == "d") {
//     vx = 0;
//   }
// });
