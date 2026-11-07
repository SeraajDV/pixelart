import { lazy, Suspense } from "react";

const PixelCanvas = lazy(() => import("./components/pixel-canvas"));

export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
      <Suspense
        fallback={
          <p className="text-sm text-slate-400" role="status">
            Loading pixel editor...
          </p>
        }
      >
        <PixelCanvas />
      </Suspense>
    </main>
  );
}