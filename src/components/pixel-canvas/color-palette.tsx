import { PICO8_PALETTE } from "./constants";
import type { Tool } from "./types";

type ColorPaletteProps = {
  selectedColor: string;
  tool: Tool;
  onColorChange: (color: string) => void;
};

export function ColorPalette({
  selectedColor,
  tool,
  onColorChange,
}: ColorPaletteProps) {
  return (
    <div className="flex flex-col items-center gap-2 bg-slate-900/50 p-3.5 rounded-xl border border-slate-800/80 w-full">
      <div className="flex items-center justify-between w-full px-1">
        <span className="text-xs font-semibold text-slate-400">
          PICO-8 Swatches
        </span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 uppercase">
            {selectedColor}
          </span>
          <input
            type="color"
            value={selectedColor}
            onChange={(event) => onColorChange(event.target.value)}
            className="w-6 h-6 rounded cursor-pointer bg-transparent border-0 p-0"
          />
        </div>
      </div>
      <div className="grid grid-cols-8 sm:grid-cols-16 gap-1.5 w-full">
        {PICO8_PALETTE.map((color) => (
          <button
            key={color}
            onClick={() => onColorChange(color)}
            aria-label={`Select color ${color}`}
            aria-pressed={selectedColor === color && tool !== "eraser"}
            className={`h-6 sm:h-7 rounded transition transform active:scale-95 ${
              selectedColor === color && tool !== "eraser"
                ? "ring-2 ring-cyan-400 ring-offset-2 ring-offset-slate-950 scale-105"
                : "hover:opacity-90"
            }`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
}
