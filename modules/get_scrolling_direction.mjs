// scrollingDirection() returns the direction that the user is
// scrolling by comparing the last location the user scrolled to the
// current location the user is scolled.

export const scrollingDirection = (amountScrolled, lastScrollTop) => {
  return amountScrolled > lastScrollTop ? 'down' : 'up';
}
