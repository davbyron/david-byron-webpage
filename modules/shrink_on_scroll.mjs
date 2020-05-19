// createScrollHandler() creates a scroll event on the specified element
// that shrinks and expands the element between a specified distance.

// Import necessary modules
import { getOffset } from './get_offset.mjs';
import { vhToPx } from './measurement_adjustments.mjs';
import { scrollingDirection } from './get_scrolling_direction.mjs';

function createScrollHandler(element, movingElement, actionDistanceMax, actionDistanceMin) {
  let elementTop = getOffset(movingElement, 'top');
  let elementLeft = getOffset(movingElement, 'left');
  let elementHeight = movingElement.offsetHeight;
  let elementWidth = movingElement.offsetWidth;

  let lastScrollTop = 0;
  let scrolledPast = false;

  // actionDistance will be the vertical distance on the webpage
  // where the shrinking and expanding occurs.
  const actionDistance = actionDistanceMax - actionDistanceMin;

  const handleScroll = () => {
    let amountScrolled = document.documentElement.scrollTop;
    let heightPercentage = amountScrolled / actionDistance;

    if (amountScrolled < actionDistance) {
      if (scrollingDirection(amountScrolled, lastScrollTop) == 'down') {
        movingElement.style.height = String(elementHeight - (0.5 * elementHeight * heightPercentage)) + 'px';
        movingElement.style.width = String(elementWidth - (0.5 * elementWidth * heightPercentage)) + 'px';
        movingElement.style.left = String(elementLeft - ((8/15) * elementLeft * heightPercentage)) + 'px';
        if (scrolledPast) {
          movingElement.style.top = String(elementTop - ((23/25) * elementTop * heightPercentage)) + 'px';
        }
      } else {
        movingElement.style.height = String(elementHeight - (0.5 * elementHeight * heightPercentage)) + 'px';
        movingElement.style.width = String(elementWidth - (0.5 * elementWidth * heightPercentage)) + 'px';
        movingElement.style.left = String(elementLeft - ((8/15) * elementLeft * heightPercentage)) + 'px';
        if (scrolledPast) {
          movingElement.style.top = String(vhToPx(2) + (actionDistance - ((23/25) * actionDistance * heightPercentage))) + 'px';
        }
      }
    } else {
      movingElement.style.position = 'sticky';
      movingElement.style.top = '2vh';
      movingElement.style.left = '7vw';
      movingElement.style.height = '25vh';
      movingElement.style.width = '25vh';
      scrolledPast = true;
    }

    lastScrollTop = amountScrolled;
  }

  // Where to set the moving element if webpage is scrolled past actionDistance
  // on load.
  if (document.documentElement.scrollTop > actionDistance) {
    movingElement.style.position = 'sticky';
    movingElement.style.top = '2vh';
    movingElement.style.left = '7vw';
    scrolledPast = true;
  }

  element.addEventListener('scroll', handleScroll);
}

export { createScrollHandler };
