import React from 'react';
import Header from '../components/Header';
import Toolbar from '../components/Toolbar';
import Grid from '../components/Grid';

export default function Home() {
  const gridRef = React.useRef();

  const handleUndo = () => {
    if (gridRef.current) {
      gridRef.current.undo();
    }
  };

  const handleRedo = () => {
    if (gridRef.current) {
      gridRef.current.redo();
    }
  };

  return (
    <div>
      <Header />
      <Toolbar onUndo={handleUndo} onRedo={handleRedo} />
      <Grid ref={gridRef} />
    </div>
  );
}
