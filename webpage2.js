import { getOffset } from './modules/get_offset.mjs';
import { vhToPx } from './modules/measurement_adjustments.mjs';
import { createScrollHandler } from './modules/shrink_on_scroll.mjs';
import { createClickHandler } from './modules/scroll_to_on_click.mjs';

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

const descriptionTop = getOffset(description, 'top');
const portfolioTop = getOffset(portfolio, 'top');
const aboutTop = getOffset(about, 'top');

let faceTop = getOffset(face, 'top');
let faceLeft = getOffset(face, 'left');
let faceHeight = face.offsetHeight;
let faceWidth = face.offsetWidth;

let lastScrollTop = 0;
let scrolledPast = false;
// const breakpoint = window.matchMedia("(max-width: 1125px)");

const actionDistance = descriptionTop - vhToPx(2, totalScrollHeight, clientHeight);

// breakpoint.addListener(() => {
//   if (breakpoint.matches) {
//     face.style.left = '1vw';
//   } else {
//     face.style.left = '7vw';
//   }
// });

createScrollHandler(document, face, actionDistance, scrolledPast, lastScrollTop, totalScrollHeight, clientHeight, faceHeight, faceWidth, faceLeft, faceTop);

createClickHandler(portButton, (portfolioTop - descriptionTop), 0);
createClickHandler(aboutButton, (aboutTop - descriptionTop), 0);
createClickHandler(sidePortButton, (portfolioTop - descriptionTop), 0);
createClickHandler(sideAboutButton, (aboutTop - descriptionTop), 0);

sq1.onclick = () => { window.open('https://github.com/davbyron/HMM') };
sq2.onclick = () => { window.open('https://sites.google.com/site/thekhoisanlanguages/tuu/xam') };
sq3.onclick = () => { window.open('./media/thesis.pdf') };
