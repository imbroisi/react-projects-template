/* eslint-disable  */
import React, { useEffect, useRef, useState } from 'react';
import CanvasProvider, { Canvas, useCanvas, getCtx } from './context-canvas'; 
import drawGrid from './drawGrid';
import drawStar from './drawStar';
import { Container} from './styles';

const StarSelectorRaw = () => {
  const { setGraphCenter, getGraphCenter } = useCanvas();
  // const [graphCenter, setGraphCenter] = useState({ x: 0, y: 0});
  // const ref = useRef();
  // let ctx;

  const handleCanvasReady = () => {
    const { ctx, canvas } = getCtx();

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    drawGrid();

    drawStar(100, 200);
    drawStar(-1000, 200);
  };

  const handleMoveR = () => {
    const pos = getGraphCenter();
    pos.x += 50;
    setGraphCenter(pos);
  };

  const handleMoveL = () => {
    const pos = getGraphCenter();
    pos.x -= 50;
    setGraphCenter(pos);
  };

  const handleMoveU = () => {
    const pos = getGraphCenter();
    pos.y -= 50;
    setGraphCenter(pos);
  };

  const handleMoveD = () => {
    const pos = getGraphCenter();
    pos.y += 50;
    setGraphCenter(pos);
  };

  const handleMoveC = () => {
    setGraphCenter({x: 0, y: 0 });
  };

  console.log('(2) --->>>> RENDERING')

  return (
    <Container>
      <Canvas onReady={handleCanvasReady} />
      <div style={{ color: 'white' }}>
        Move: 
        <button onClick={handleMoveU}> {'^'} </button>
        <button onClick={handleMoveD}> {'v'} </button>
        <button onClick={handleMoveL}> {'<'} </button>
        <button onClick={handleMoveR}> {'>'} </button>
        <button onClick={handleMoveC}> {'CENTER'} </button>
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
