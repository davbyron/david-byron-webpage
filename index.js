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

  slides[slideIndex-1].style.display = 'block';

  text = slideTitles[slideIndex-1];
  document.getElementById('picDescription').innerHTML = text;
}

let slideIndex = Math.floor(Math.random() * slideTitles.length); // make this random
showSlides(slideIndex);

const changeSlides = (n) => {
  showSlides(slideIndex += n);
}
