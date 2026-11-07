import { GRID_SIZE } from "./constants";

export function exportPNG(pixels: string[]): void {
  const canvas = document.createElement("canvas");
  const scale = 32;
  canvas.width = GRID_SIZE * scale;
  canvas.height = GRID_SIZE * scale;

  const context = canvas.getContext("2d");
  if (!context) return;

  context.imageSmoothingEnabled = false;

  pixels.forEach((color, index) => {
    const x = (index % GRID_SIZE) * scale;
    const y = Math.floor(index / GRID_SIZE) * scale;
    context.fillStyle = color;
    context.fillRect(x, y, scale, scale);
  });

  const link = document.createElement("a");
  link.download = "sprite-v4.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}
