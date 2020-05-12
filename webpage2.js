const face = document.getElementById('picture');
const description = document.getElementById('description');
const portButton = document.getElementById('port_button');
const aboutButton = document.getElementById('about_button');
const sidePortButton = document.getElementById('side_port');
const sideAboutButton = document.getElementById('side_about');
const portfolio = document.getElementById('portfolio');
const sq1 = document.getElementById('sq1');
const sq2 = document.getElementById('sq2');
const sq3 = document.getElementById('sq3');
const about = document.getElementById('about');
const copyright = document.getElementById('copyright');
const body = document.querySelector('body');

let clientHeight = document.documentElement.clientHeight;
let clientWidth = document.documentElement.clientWidth;
let totalScrollHeight = document.documentElement.scrollHeight;

const getOffset = (element, side) => {
  let offset = 0;
  while(element) {
    if (side == 'top') {
      offset += element.offsetTop;
    } else {
      offset += element.offsetLeft;
    }
    element = element.offsetParent;
  }
  return offset;
}

const descriptionTop = getOffset(description, 'top');
const portfolioTop = getOffset(portfolio, 'top');
const aboutTop = getOffset(about, 'top');

let faceTop = getOffset(face, 'top');
let faceLeft = getOffset(face, 'left');
let faceHeight = face.offsetHeight;
let faceWidth = face.offsetWidth;

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

const actionDistance = descriptionTop - vhToPx(2);
const handleScroll = () => {
  let amountScrolled = document.documentElement.scrollTop;
  let heightPercentage = amountScrolled / actionDistance;

  if (amountScrolled < actionDistance) {
    if (scrollingDirection(amountScrolled) == 'down') {
      face.style.height = String(faceHeight - (0.5 * faceHeight * heightPercentage)) + 'px';
      face.style.width = String(faceWidth - (0.5 * faceWidth * heightPercentage)) + 'px';
      face.style.left = String(faceLeft - ((8/15) * faceLeft * heightPercentage)) + 'px';
      if (scrolledPast) {
        face.style.top = String(faceTop - ((23/25) * faceTop * heightPercentage)) + 'px';
      }

    } else {
      face.style.height = String(faceHeight - (0.5 * faceHeight * heightPercentage)) + 'px';
      face.style.width = String(faceWidth - (0.5 * faceWidth * heightPercentage)) + 'px';
      face.style.left = String(faceLeft - ((8/15) * faceLeft * heightPercentage)) + 'px';
      if (scrolledPast) {
        face.style.top = String(vhToPx(2) + (actionDistance - ((23/25) * actionDistance * heightPercentage))) + 'px';
        // description.style.visibility = 'visible';
        // portfolio.style.visibility = 'hidden';
      }
    }
  } else {
    face.style.position = 'sticky';
    face.style.top = '2vh';
    face.style.left = '7vw';
    scrolledPast = true;

    // if (amountScrolled > (aboutTop - portfolioTop)) {
    //   portfolio.style.visibility = 'hidden';
    //   about.style.visibility = 'visible';
    // } else {
    //   portfolio.style.visibility = 'visible';
    //   about.style.visibility = 'hidden';
    //   description.style.visibility = 'hidden';
    // }
  }

  lastScrollTop = amountScrolled;
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

  // if (document.documentElement.scrollTop > (portfolioTop + portfolio.scrollHeight)) {
  //   portfolio.style.visibility = 'hidden';
  //   about.style.visibility = 'visible';
  // } else {
  //   portfolio.style.visibility = 'visible';
  //   about.style.visibility = 'hidden';
  //   description.style.visibility = 'hidden';
  // }
}

document.onscroll = handleScroll;

portButton.onclick = () => { document.documentElement.scroll({
  top: portfolioTop - descriptionTop,
  left: 0,
  behavior: 'smooth' }) };
aboutButton.onclick = () => { document.documentElement.scroll({
  top: aboutTop - descriptionTop,
  left: 0,
  behavior: 'smooth' }) };
sidePortButton.onclick = () => { document.documentElement.scroll({
  top: portfolioTop - descriptionTop,
  left: 0,
  behavior: 'smooth' }) };
sideAboutButton.onclick = () => { document.documentElement.scroll({
  top: aboutTop - descriptionTop,
  left: 0,
  behavior: 'smooth' }) };

sq1.onclick = () => { window.open('https://github.com/davbyron/HMM') };
sq2.onclick = () => { window.open('https://sites.google.com/site/thekhoisanlanguages/tuu/xam') };
sq3.onclick = () => { window.open('./media/thesis.pdf') };
