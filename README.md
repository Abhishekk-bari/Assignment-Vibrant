This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
# Spreadsheet Clone

A spreadsheet application built using Next.js, Framer Motion, Tailwind CSS, and Zustand. This project includes features like grid rendering, cell editing, undo/redo functionality, and a custom toolbar with various formatting options.

## Features

- **Dynamic Grid**: A grid with editable cells where users can input text and change text alignment.
- **Undo/Redo Functionality**: Maintain the history of cell changes and support undo/redo actions.
- **Custom Toolbar**: Includes options for formatting text, searching, and performing undo/redo operations.
- **Responsive Design**: Utilizes Tailwind CSS for styling and responsive design.

## stack -
Next.js: Framework for React-based applications.
Framer Motion: Library for animations.
Tailwind CSS: Utility-first CSS framework.
Zustand: State management library.

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>

   cd spreadsheet-clone

   npm install

   npm run dev

   Open your browser and go to http://localhost:3000 to see the app in action.


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

**Components:**
Grid.js
Represents the grid of cells. It handles:

Initializing the grid state with default cell styles.
Handling cell input changes and style updates.
Undo/redo functionality through useImperativeHandle.
Header.js
Displays the top header and menu bar with:

Google Sheets icon and file management options.
Toolbar with undo, redo, print, and text formatting options.
Dropdown menus for File and Edit actions.
Toolbar.js
A customizable toolbar for:

Performing search, undo, redo, and print actions.
Includes buttons with associated click handlers for various operations.
State Management
Zustand Store: Manages grid cell states and history for undo/redo functionality.

setCells(newCells): Updates cells and history.
undo(): Reverts to the previous state.
redo(): Re-applies the next state in the redo history.
Usage
Editing Cells: Click on a cell to input text. Use alignment buttons to adjust text alignment.
Undo/Redo Actions: Use the toolbar buttons to undo or redo changes.
Search Functionality: Use the search input to filter cells based on text content.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
