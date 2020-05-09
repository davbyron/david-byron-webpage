const face = document.getElementById('picture');
const description = document.getElementById('description');
const port_button = document.getElementById('port_button');
const about_button = document.getElementById('about_button');
const portfolio = document.getElementById('portfolio');
const sq1 = document.getElementById('sq1');
const sq2 = document.getElementById('sq2');
const sq3 = document.getElementById('sq3');
const about = document.getElementById('about');
const copyright = document.getElementById('copyright');

let clientHeight = document.documentElement.clientHeight;
let clientWidth = document.documentElement.clientWidth;
let totalScrollHeight = document.documentElement.scrollHeight;

const portfolioTop = portfolio.offsetTop;
const aboutTop = about.offsetTop;

const originalFaceTop = face.offsetTop;
const originalFaceLeft = face.offsetLeft;
const originalFaceHeight = face.offsetHeight;
const originalFaceWidth = face.offsetWidth;

let faceTop = originalFaceTop;
let faceHeight = originalFaceHeight;
let faceWidth = originalFaceWidth;
let faceLeft = originalFaceLeft;

let lastScrollTop = 0;
let scrolledPast = false;

const vhToPx = amount => {
  let pixelHeight = (amount * 0.01) * (totalScrollHeight - clientHeight);
  return pixelHeight;
}

const vwToPx = amount => {
  let pixelWidth = (amount * 0.01) * clientWidth;
  return pixelWidth;
}

const scrollingDirection = (amountScrolled) => {
  return amountScrolled > lastScrollTop ? 'down' : 'up';
}

const actionDistance = originalFaceTop - vhToPx(2);
const handleScroll = () => {
  let amountScrolled = document.documentElement.scrollTop;
  let heightPercentage = amountScrolled / actionDistance;

  if (amountScrolled < actionDistance) {
    if (scrollingDirection(amountScrolled) == 'down') {
      face.style.height = String(faceHeight - (0.5 * originalFaceHeight * heightPercentage)) + 'px';
      face.style.width = String(faceWidth - (0.5 * originalFaceWidth * heightPercentage)) + 'px';
      face.style.left = String(originalFaceLeft - ((8/15) * originalFaceLeft * heightPercentage)) + 'px';
      if (scrolledPast) {
        face.style.top = String(originalFaceTop - ((23/25) * originalFaceTop * heightPercentage)) + 'px';
      }

    } else {
      face.style.height = String(faceHeight - (0.5 * originalFaceHeight * heightPercentage)) + 'px';
      face.style.width = String(faceWidth - (0.5 * originalFaceWidth * heightPercentage)) + 'px';
      face.style.left = String(originalFaceLeft - ((8/15) * originalFaceLeft * heightPercentage)) + 'px';
      if (scrolledPast) {
        face.style.top = String(vhToPx(2) + (actionDistance - ((23/25) * actionDistance * heightPercentage))) + 'px';
        description.style.visibility = 'visible';
        portfolio.style.visibility = 'hidden';
      }
    }
  } else {
    face.style.position = 'sticky';
    face.style.top = '2vh';
    face.style.left = '7vw';
    scrolledPast = true;

    if (amountScrolled > (aboutTop - portfolioTop)) {
      portfolio.style.visibility = 'hidden';
      about.style.visibility = 'visible';
    } else {
      portfolio.style.visibility = 'visible';
      about.style.visibility = 'hidden';
      description.style.visibility = 'hidden';
    }
  }

  lastScrollTop = amountScrolled;


  //description.style.position = 'sticky';

  //description.innerHTML = `You're scrolled at: ${amountScrolled}`;
                      // <br> The action distance is: ${actionDistance}
                      // <br> Percentage scrolled: ${heightPercentage}
                      // <br> The face height is: ${face.style.height}
                      // <br> The face width is: ${face.style.width}
                      // <br> The top is: ${face.style.top}
                      // <br> The left is: ${face.style.left}
                      // <br> Offset left: ${faceLeft}
                      // <br> Offset height: ${faceHeight}
                      // <br> Offset width: ${faceWidth}
                      // <br> Offset top: ${faceTop}
                      //`;
}

const handleClick = e => {
  window.open(url);
}

if (document.documentElement.scrollTop > actionDistance) {
  face.style.position = 'sticky';
  face.style.top = '2vh';
  face.style.left = '7vw';
  face.style.height = '25vh';
  face.style.width = '25vh';
  scrolledPast = true;

  if (document.documentElement.scrollTop > (aboutTop - portfolioTop)) {
    portfolio.style.visibility = 'hidden';
    about.style.visibility = 'visible';
  } else {
    portfolio.style.visibility = 'visible';
    about.style.visibility = 'hidden';
    description.style.visibility = 'hidden';
  }
}

document.onscroll = handleScroll;
port_button.onclick = () => { document.documentElement.scroll({
  top: portfolioTop,
  left: 0,
  behavior: 'smooth' }) };
about_button.onclick = () => { document.documentElement.scroll({
  top: aboutTop - vhToPx(7),
  left: 0,
  behavior: 'smooth' }) };
sq1.onclick = () => { window.open('https://github.com/davbyron/HMM') };
sq2.onclick = () => { window.open('https://sites.google.com/site/thekhoisanlanguages/tuu/xam') };
sq3.onclick = () => { window.open('../media/thesis.pdf') };
