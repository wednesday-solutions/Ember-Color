const checkboardCache = {};

export const render = (c1, c2, size) => {
  if (typeof document === 'undefined') {
    return null
  }
  const canvas = document.createElement('canvas')
  canvas.width = size * 2;
  canvas.height = size * 2;
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    return null
  }
  ctx.fillStyle = c1;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = c2;
  ctx.fillRect(0, 0, size, size);
  ctx.translate(size, size);
  ctx.fillRect(0, 0, size, size);
  return canvas.toDataURL();
};

export const get = (c1, c2, size, serverCanvas) => {
  const key = `${ c1 }-${ c2 }-${ size }}`;

  if (checkboardCache[key]) {
    return checkboardCache[key];
  }

  const checkboard = render(c1, c2, size, serverCanvas);
  checkboardCache[key] = checkboard;
  return checkboard;
};
