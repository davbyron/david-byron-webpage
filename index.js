// vhToPx() and vwToPx() convert whole vh and vw units into pixels,
// respectively, when given information about the document/window
// height and width.

let clientHeight = document.documentElement.clientHeight;
let clientWidth = document.documentElement.clientWidth;
let scrollHeight = document.documentElement.scrollHeight;

const vhToPx = (amount) => {
  let pixelHeight = (amount * 0.01) * (scrollHeight - clientHeight);
  return pixelHeight;
}

const vwToPx = (amount) => {
  let pixelWidth = (amount * 0.01) * clientWidth;
  return pixelWidth;
}

// getOffset() is a function that returns either the actual
// offset top or left values of the specified element by tracing
// the offset value of each parent element.
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

const slideTitles = ['Flowers at Home, 2012',
                    'Fair Ride, 2013',
                    'Carrick-a-Rede, 2014',
                    'Giant\'s Causeway, 2014',
                    'Howth, 2014',
                    'Croke Park, 2014',
                    'Killarney, 2014',
                    'Killarney National Park, 2014',
                    'Brooklyn Bridge, 2015',
                    'Canal St. x Greenwich St., 2015',
                    'Hammock on Governor\'s Island, 2015',
                    'Washington Square Park, 2015',
                    'Musée de l\'Orangerie (1), 2016',
                    'Musée de l\'Orangerie (2), 2016',
                    'Les Nymphéas, Claude Monet\'s Garden at Giverny, 2016',
                    'Basilique du Sacré-Cœur, 2016',
                    'Parc Montsouris, 2016',
                    'The Road to Mont-Saint-Michel, 2016',
                    'Mont-Saint-Michel, 2016',
                    'Tour Eiffel, 2016',
                    'Parc de la Ciutadella, 2016',
                    'Sagrada Familia (1), 2016',
                    'Sagrada Familia (2), 2016',
                    'The View from Tibidabo, 2016',
                    'Inconspicuous Barcelona Street, 2016',
                    'A Bridge in Auckland, 2017',
                    'Waiheke Island, 2017'];

const showSlides = (n) => {
  const slides = document.getElementsByClassName('slide');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i=0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  let currentSlide = slides[slideIndex-1]

  currentSlide.style.display = 'flex';

  let text = slideTitles[slideIndex-1];

  document.getElementById('picDescription').innerHTML = text;
  // Set padding left offset to the (parent width - img width) / 2
  document.getElementById('picDescription').style.paddingLeft = ((document.getElementById('slideshow').clientWidth - currentSlide.childNodes[1].clientWidth) / 2.0).toString() + 'px'
}

let slideIndex = Math.floor(Math.random() * slideTitles.length); // make this random

window.onload = (event) => {
  showSlides(slideIndex);
};

const changeSlides = (n) => {
  showSlides(slideIndex += n);
}

const showImgUI = () => {
  document.getElementById('prev').style.display = 'flex';
  document.getElementById('next').style.display = 'flex';
}

const removeImgUI = () => {
  document.getElementById('prev').style.display = 'none';
  document.getElementById('next').style.display = 'none';
}

// Get elements
const scrollButton = document.querySelector('.scroll-button');
const header = document.querySelector('header');
const aboutSection = document.getElementById('about');

const aboutTop = getOffset(aboutSection, 'top'); // Top of page to "About" section
const translateDist = aboutTop - vhToPx(1); // How far to scroll

// Event listeners
scrollButton.onclick = () => {
  document.documentElement.scroll({
    top: translateDist,
    left: 0,
    behavior: 'smooth'
  });
};
