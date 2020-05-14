function createClickHandler(element, down, over) {
  element.onclick = () => {
    document.documentElement.scroll({
      top: down,
      left: over,
      behavior: 'smooth'
    });
  };
}

export { createClickHandler };
