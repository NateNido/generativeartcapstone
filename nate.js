function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas();
  background(255, 0, 200);
  noLoop()
}

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background(255, 0, 200);
// }

var myCanvas = createCanvas(winWidth, winHeight);
    myCanvas.parent("canvascontainer");

function draw () {
  const maxWidth = windowWidth
  for (let i = 0; i < 100; i ++) {
    let randomNumber = random(maxWidth)
    let randomWidth = random(10)
    strokeWeight(randomWidth)
    line(0, i * 30, 10 + randomNumber, 0)
  }
}
