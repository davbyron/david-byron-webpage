const vhToPx = (amount, totalScrollHeight, clientHeight) => {
  let pixelHeight = (amount * 0.01) * (totalScrollHeight - clientHeight);
  return pixelHeight;
}

const vwToPx = (amount, clientWidth) => {
  let pixelWidth = (amount * 0.01) * clientWidth;
  return pixelWidth;
}

export { vhToPx, vwToPx };
