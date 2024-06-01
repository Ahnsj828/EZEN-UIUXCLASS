const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

function grain(size, name, color) {
  canvas.width = size;
  canvas.height = size;

  ctx.fillStyle = color;

  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      if (Math.random() > 0.5) {
        ctx.fillRect(x, y, 1, 1);
      }
    }
  }

  canvas.toBlob((blob) => {
    const url = URL.createObjectURL(blob);

    document.documentElement.style.setProperty(name, `url(${url})`);
  });
}

grain(256, "--grain-square-black", "hsla(0, 100%, 0%, 1)");
grain(256, "--grain-square-white", "hsla(0, 100%, 100%, 1)");
grain(256, "--grain-square-white-opacity-blend", "hsla(25, 100%, 96%, 0.1375)");
