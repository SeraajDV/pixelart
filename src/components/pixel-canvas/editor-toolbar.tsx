import {
  Download,
  Eraser,
  Paintbrush,
  PaintBucket,
  RotateCcw,
  Undo2,
} from "lucide-react";
import type { Tool } from "./types";

type EditorToolbarProps = {
  historyLength: number;
  tool: Tool;
  onUndo: () => void;
  onClear: () => void;
  onExport: () => void;
  onToolChange: (tool: Tool) => void;
};

export function EditorToolbar({
  historyLength,
  tool,
  onUndo,
  onClear,
  onExport,
  onToolChange,
}: EditorToolbarProps) {
  const toolButtonClass = (selectedTool: Tool) =>
    `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold transition ${
      tool === selectedTool
        ? "bg-cyan-500 text-slate-950 shadow"
        : "bg-slate-800 text-slate-300 hover:bg-slate-700"
    }`;

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-2 bg-slate-900/90 backdrop-blur p-3 rounded-xl border border-slate-800 w-full shadow-lg">
        <button
          onClick={onUndo}
          disabled={historyLength === 0}
          className="flex items-center gap-1 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-300 rounded-lg text-sm font-semibold transition"
          title="Undo last stroke"
        >
          <Undo2 className="w-4 h-4" /> Undo
        </button>

        <button
          onClick={onClear}
          className="flex items-center gap-1 px-3 py-1.5 bg-rose-950/60 hover:bg-rose-900 text-rose-300 rounded-lg text-sm font-semibold transition border border-rose-900/50"
        >
          <RotateCcw className="w-4 h-4" /> Clear
        </button>

        <button
          onClick={onExport}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-sm font-semibold transition ml-auto shadow"
        >
          <Download className="w-4 h-4" /> Export
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 bg-slate-900/90 backdrop-blur p-3 rounded-xl border border-slate-800 w-full shadow-lg">
        <button
          onClick={() => onToolChange("pen")}
          className={toolButtonClass("pen")}
        >
          <Paintbrush className="w-4 h-4" /> Pen
        </button>

        <button
          onClick={() => onToolChange("bucket")}
          className={toolButtonClass("bucket")}
        >
          <PaintBucket className="w-4 h-4" /> Bucket
        </button>

        <button
          onClick={() => onToolChange("eraser")}
          className={toolButtonClass("eraser")}
        >
          <Eraser className="w-4 h-4" /> Eraser
        </button>

        <div className="h-6 w-px bg-slate-800 mx-1" />
      </div>
    </>
  );
}
