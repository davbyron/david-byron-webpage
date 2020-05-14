export const getOffset = (element, side) => {
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
