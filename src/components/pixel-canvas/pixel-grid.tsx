import { GRID_SIZE } from "./constants";
import type { Tool } from "./types";

type PixelGridProps = {
  pixels: string[];
  tool: Tool;
  isMouseDown: boolean;
  onMouseDown: () => void;
  onPaintCell: (index: number) => void;
};

export function PixelGrid({
  pixels,
  tool,
  isMouseDown,
  onMouseDown,
  onPaintCell,
}: PixelGridProps) {
  return (
    <div
      className="grid gap-px bg-slate-900 p-2.5 rounded-2xl shadow-2xl border border-slate-800 cursor-crosshair"
      style={{
        gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(0, 1fr))`,
      }}
      onMouseDown={onMouseDown}
    >
      {pixels.map((color, index) => (
        <div
          key={index}
          className="w-5 h-5 sm:w-7 sm:h-7 transition-colors duration-75 rounded-xs"
          style={{ backgroundColor: color }}
          onMouseDown={() => onPaintCell(index)}
          onMouseEnter={() =>
            isMouseDown && tool !== "bucket" && onPaintCell(index)
          }
        />
      ))}
    </div>
  );
}
