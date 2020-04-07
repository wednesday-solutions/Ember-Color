export const calculateChange = (e, hsl, container) => {
  e.preventDefault();
  let containerWidth = container.clientWidth;
  let x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;
  let left = x - (container.getBoundingClientRect().left + window.pageXOffset);

  let h;
  if (left < 0) {
    h = 0
  } else if (left > containerWidth) {
    h = 359
  } else {
    const percent = (left * 100) / containerWidth;
    h = ((360 * percent) / 100)
  }

  if (hsl.h !== h) {
    return {
      h,
      s: hsl.s,
      l: hsl.l,
      a: hsl.a,
      source: 'rgb',
    }
  }
  return null;
};
