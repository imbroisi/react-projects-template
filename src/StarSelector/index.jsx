/* eslint-disable  */
import React, { useEffect, useRef, useState } from 'react';
import CanvasProvider, { Canvas, useCanvas, getCtx } from './context-canvas'; 
import { GRID_SIZE } from './constants'; 
import drawGrid from './drawGrid';
import drawStar from './drawStar';
import { Container, HEIGHT, WIDTH} from './styles';

const StarSelectorRaw = () => {
  const { setGraphCenter, getGraphCenter, setZoom } = useCanvas();

  const { zoom } = getCtx();

  // const [graphCenter, setGraphCenter] = useState({ x: 0, y: 0});
  // const ref = useRef();
  // let ctx;

  const handleCanvasReady = () => {
    const { ctx, canvas } = getCtx();

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    drawGrid();

    drawStar(100, 200);
    drawStar(-100, 100);
  };

  const handleMoveR = () => {
    const pos = getGraphCenter();
    pos.x += GRID_SIZE;
    setGraphCenter(pos);
  };

  const handleMoveL = () => {
    const pos = getGraphCenter();
    pos.x -= GRID_SIZE;
    setGraphCenter(pos);
  };

  const handleMoveU = () => {
    const pos = getGraphCenter();
    pos.y -= GRID_SIZE;
    console.log(' -========-->>>> pos', pos);

    setGraphCenter(pos);
  };

  const handleMoveD = () => {
    const pos = getGraphCenter();
    pos.y += GRID_SIZE;
    setGraphCenter(pos);
  };

  const handleMoveCG = () => {
    setGraphCenter({
      x: 0,
      y: 0,
    });
  };

  const handleMoveCE = () => {
    setGraphCenter({
      x: 0,
      y: 0,
    });
  };

  const handleZoomUp = () => {
    setZoom('up');
  };

  const handleZoomDw = () => {
    setZoom('dw');
  };

  return (
    <Container>
      <Canvas
        width={WIDTH}
        height={HEIGHT}
        onReady={handleCanvasReady}
      />
      <div style={{ color: 'white' }}>
        Move: 
        <button onClick={handleMoveU}> {'^'} </button>
        <button onClick={handleMoveD}> {'v'} </button>
        <button onClick={handleMoveL}> {'<'} </button>
        <button onClick={handleMoveR}> {'>'} </button>
        <button onClick={handleMoveCG}> {'CENTER GALAXY'} </button>
        <button onClick={handleMoveCE}> {'CENTER EARTH'} </button>
      </div>
      <div style={{ color: 'white' }}>
        Zoom: 
        <button onClick={handleZoomUp}> {'+'} </button>
        <button onClick={handleZoomDw}> {'-'} </button>
        {` ${zoom}`}
      </div>
    </Container>
  );
};

const StarSelector = () => (
  <CanvasProvider>
    <StarSelectorRaw />
  </CanvasProvider>
);

export default StarSelector;
