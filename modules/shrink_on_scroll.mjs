import { vhToPx } from './measurement_adjustments.mjs';
import { scrollingDirection } from './get_scrolling_direction.mjs';

function createScrollHandler(element, movingElement, actionDistance, scrolledPast, lastScrollTop, totalScrollHeight, clientHeight, faceHeight, faceWidth, faceLeft, faceTop) {
  const handleScroll = () => {
    let amountScrolled = document.documentElement.scrollTop;
    let heightPercentage = amountScrolled / actionDistance;

    if (amountScrolled < actionDistance) {
      if (scrollingDirection(amountScrolled, lastScrollTop) == 'down') {
        movingElement.style.height = String(faceHeight - (0.5 * faceHeight * heightPercentage)) + 'px';
        movingElement.style.width = String(faceWidth - (0.5 * faceWidth * heightPercentage)) + 'px';
        movingElement.style.left = String(faceLeft - ((8/15) * faceLeft * heightPercentage)) + 'px';
        if (scrolledPast) {
          movingElement.style.top = String(faceTop - ((23/25) * faceTop * heightPercentage)) + 'px';
        }

      } else {
        movingElement.style.height = String(faceHeight - (0.5 * faceHeight * heightPercentage)) + 'px';
        movingElement.style.width = String(faceWidth - (0.5 * faceWidth * heightPercentage)) + 'px';
        movingElement.style.left = String(faceLeft - ((8/15) * faceLeft * heightPercentage)) + 'px';
        if (scrolledPast) {
          movingElement.style.top = String(vhToPx(2, totalScrollHeight, clientHeight) + (actionDistance - ((23/25) * actionDistance * heightPercentage))) + 'px';
        }
      }
    } else {
      movingElement.style.position = 'sticky';
      movingElement.style.top = '2vh';
      movingElement.style.left = '7vw';
      scrolledPast = true;
    }

    lastScrollTop = amountScrolled;
  }

  if (document.documentElement.scrollTop > actionDistance) {
    movingElement.style.position = 'sticky';
    movingElement.style.top = '2vh';
    movingElement.style.left = '7vw';
    movingElement.style.height = '25vh';
    movingElement.style.width = '25vh';
    scrolledPast = true;
  }

  element.addEventListener('scroll', handleScroll);
}

export { createScrollHandler };
