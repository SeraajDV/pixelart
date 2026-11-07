import { GRID_SIZE } from "./constants";

export function floodFill(
  pixels: string[],
  startIndex: number,
  fillColor: string,
): string[] {
  const targetColor = pixels[startIndex];
  if (targetColor === fillColor) return pixels;

  const filledPixels = [...pixels];
  const queue = [startIndex];
  const visited = new Set<number>();
  let queueIndex = 0;

  while (queueIndex < queue.length) {
    const index = queue[queueIndex++];
    if (visited.has(index)) continue;
    visited.add(index);

    if (filledPixels[index] !== targetColor) continue;

    filledPixels[index] = fillColor;
    const row = Math.floor(index / GRID_SIZE);
    const column = index % GRID_SIZE;

    if (row > 0) queue.push(index - GRID_SIZE);
    if (row < GRID_SIZE - 1) queue.push(index + GRID_SIZE);
    if (column > 0) queue.push(index - 1);
    if (column < GRID_SIZE - 1) queue.push(index + 1);
  }

  return filledPixels;
}
