import { useState } from "react";
import { ColorPalette } from "./pixel-canvas/color-palette";
import { EditorToolbar } from "./pixel-canvas/editor-toolbar";
import { PixelGrid } from "./pixel-canvas/pixel-grid";
import { usePixelEditor } from "./pixel-canvas/use-pixel-editor";

export default function PixelCanvas() {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const {
    pixels,
    history,
    selectedColor,
    tool,
    setTool,
    setSelectedColor,
    paintCell,
    undo,
    clear,
    exportPNG,
  } = usePixelEditor();

  const selectColor = (color: string) => {
    setSelectedColor(color);
    if (tool === "eraser") setTool("pen");
  };

  return (
    <div
      className="flex flex-col items-center gap-6 p-6 max-w-xl w-full select-none"
      onMouseUp={() => setIsMouseDown(false)}
    >
      <div className="text-center">
        <h1 className="text-3xl font-extrabold tracking-wider text-cyan-400 drop-shadow">
          PIXART
        </h1>
        <p className="text-xs px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
          Pixel Art Editor
        </p>
      </div>

      <PixelGrid
        pixels={pixels}
        tool={tool}
        isMouseDown={isMouseDown}
        onMouseDown={() => setIsMouseDown(true)}
        onPaintCell={paintCell}
      />

      <EditorToolbar
        historyLength={history.length}
        tool={tool}
        onUndo={undo}
        onClear={clear}
        onExport={exportPNG}
        onToolChange={setTool}
      />

      <ColorPalette
        selectedColor={selectedColor}
        tool={tool}
        onColorChange={selectColor}
      />
    </div>
  );
}
