# Pixart

Pixart is a browser-based pixel art editor built with React, TypeScript, and Vite. Draw on a 16 × 16 canvas, choose from the PICO-8 palette or a custom color, and export your artwork as a PNG.

Try it online: [pixart-editor.netlify.app](https://pixart-editor.netlify.app/)

## Features

- Draw with the pen, fill connected areas with the bucket, or erase pixels.
- Choose from 16 PICO-8 colors or use the custom color picker.
- Undo recent edits and clear the canvas.
- Export the canvas as a PNG image.
- Load the editor as a separate JavaScript chunk.

## Getting started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed by Vite in your browser.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Type-check the application and create a production build. |
| `npm run preview` | Serve the production build locally. |
| `npm run lint` | Run ESLint. |

## Project structure

```text
src/
  App.tsx                         # App shell and lazy-loaded editor
  components/
    pixel-canvas.tsx              # Composes the pixel editor
    pixel-canvas/
      color-palette.tsx           # Palette and custom color picker
      editor-toolbar.tsx          # Editing actions and tool selection
      pixel-grid.tsx              # Interactive 16 × 16 grid
      use-pixel-editor.ts         # Editor state and actions
      pixel-operations.ts         # Pixel manipulation functions
      export-png.ts               # PNG generation
      constants.ts                # Grid and palette settings
      types.ts                    # Shared editor types
```
