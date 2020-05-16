// Import necessary modules
import { getOffset } from './modules/get_offset.mjs';
import { vhToPx } from './modules/measurement_adjustments.mjs';
import { createScrollHandler } from './modules/shrink_on_scroll.mjs';
import { createClickHandler } from './modules/scroll_to_on_click.mjs';

// Create necessary liens to HTML
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

const descriptionTop = getOffset(description, 'top');
const portfolioTop = getOffset(portfolio, 'top');
const aboutTop = getOffset(about, 'top');


// Create event handlers
createScrollHandler(document, face, descriptionTop, vhToPx(2));
createClickHandler(portButton, (portfolioTop - descriptionTop), 0);
createClickHandler(aboutButton, (aboutTop - descriptionTop), 0);
createClickHandler(sidePortButton, (portfolioTop - descriptionTop), 0);
createClickHandler(sideAboutButton, (aboutTop - descriptionTop), 0);

sq1.onclick = () => { window.open('https://github.com/davbyron/HMM') };
sq2.onclick = () => { window.open('https://sites.google.com/site/thekhoisanlanguages/tuu/xam') };
sq3.onclick = () => { window.open('./media/thesis.pdf') };
