function setup() {
  const cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  frameRate(24);
}

function draw() {
  const smileDirection = changeSmiley();
  describe("The emoticon ':-" + smileDirection + "' in black serif font against a white background.");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function changeSmiley(){
  let smileDirection = "D";
  if (mouseX < windowWidth * 0.2) {
    smileDirection = "C";
  } else if (mouseX < windowWidth * 0.4) {
    smileDirection = "(";
  } else if (mouseX < windowWidth * 0.6) {
    smileDirection = "|";
  } else if (mouseX < windowWidth * 0.8) {
    smileDirection = ")";
  }
  const mouth = document.getElementById("mouth");
  mouth.innerText = smileDirection;
  return smileDirection;
}