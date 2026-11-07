import { useState } from "react";
import { EMPTY_COLOR, GRID_SIZE, INITIAL_COLOR } from "./constants";
import { exportPNG as downloadPNG } from "./export-png";
import { floodFill } from "./pixel-operations";
import type { Tool } from "./types";

export function usePixelEditor() {
  const [pixels, setPixels] = useState<string[]>(
    Array(GRID_SIZE * GRID_SIZE).fill(EMPTY_COLOR),
  );
  const [history, setHistory] = useState<string[][]>([]);
  const [selectedColor, setSelectedColor] = useState(INITIAL_COLOR);
  const [tool, setTool] = useState<Tool>("pen");

  const updatePixels = (newPixels: string[]) => {
    setHistory((previousHistory) => [...previousHistory.slice(-15), pixels]);
    setPixels(newPixels);
  };

  const paintCell = (index: number) => {
    if (tool === "bucket") {
      if (pixels[index] === selectedColor) return;
      updatePixels(floodFill(pixels, index, selectedColor));
      return;
    }

    const color = tool === "eraser" ? EMPTY_COLOR : selectedColor;
    if (pixels[index] === color) return;

    const newPixels = [...pixels];
    newPixels[index] = color;
    updatePixels(newPixels);
  };

  const undo = () => {
    if (history.length === 0) return;

    const previousState = history[history.length - 1];
    setHistory((previousHistory) => previousHistory.slice(0, -1));
    setPixels(previousState);
  };

  const clear = () => {
    updatePixels(Array(GRID_SIZE * GRID_SIZE).fill(EMPTY_COLOR));
  };

  const exportCurrentPNG = () => downloadPNG(pixels);

  return {
    pixels,
    history,
    selectedColor,
    setSelectedColor,
    tool,
    setTool,
    paintCell,
    undo,
    clear,
    exportPNG: exportCurrentPNG,
  };
}
