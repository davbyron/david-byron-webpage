export const scrollingDirection = (amountScrolled, lastScrollTop) => {
  return amountScrolled > lastScrollTop ? 'down' : 'up';
}
