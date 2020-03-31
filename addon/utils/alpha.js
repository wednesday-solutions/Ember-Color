export const calculateChange = (e, hsl, initialA, container) => {
  e.preventDefault();
  const containerWidth = container.clientWidth;
  const x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;
  const left = x - (container.getBoundingClientRect().left + window.pageXOffset);

  let a;
  if (left < 0) {
    a = 0
  } else if (left > containerWidth) {
    a = 1
  } else {
    a = Math.round((left * 100) / containerWidth) / 100
  }

  if (initialA !== a) {
    return {
      h: hsl.h,
      s: hsl.s,
      l: hsl.l,
      a,
      source: 'rgb',
    }
  }
  return null
};
