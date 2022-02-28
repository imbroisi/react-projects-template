/* eslint-disable */
import React, {
  useState,
  createContext,
  useContext,
  useRef,
  useEffect,
  useReducer,
} from 'react';

const CanvasContext = createContext();

export const WIDTH = 1600;
export const HEIGHT = 900;

let ctx;
let canvas;
let graphCenter = { x: 0, y: 0 };

export const setCtx = (data) => {
  ctx = data.ctx; 
  canvas = data.canvas; 
};

// export const setGraphCenter = (v) => {
//   console.log('(2) --->>> graphCenter', graphCenter);
//   graphCenter = { ...v };
// };

export const getCtx = () => ({
  ctx,
  canvas,
  graphCenter,
});

const CanvasProvider = ({ children }) => {
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  const setGraphCenter = (v) => {
    graphCenter = { ...v };
    console.log('(1) --->>> graphCenter', graphCenter);
    forceUpdate();
  };

  const getGraphCenter = () => ({ ...graphCenter });

  const value = {
    getGraphCenter,
    setGraphCenter,
    getCtx,
    setCtx,
  };

  console.log('(1) --->>>> RENDERING')

  return (
    <CanvasContext.Provider value={value}>
      {children}
    </CanvasContext.Provider>
  );
};

// eslint-disable-next-line react/prop-types
export const Canvas = ({ onReady }) => {
  const ref = useRef();
  const { setCtx } = useCanvas();
  // const ctx = useRef();

  useEffect(() => {
    const canvas = ref.current;
    setCtx({
      ctx: canvas.getContext('2d'),
      canvas,
    });

    setTimeout(() => {
      onReady();
    }, 0);

    console.log('--->>>> POS 1')

    // ctx.current.fillStyle = 'black';
    // ctx.current.fillRect(0, 0, canvas.width, canvas.height);
    // drawGrid(ctx.current, graphCenter);

    // drawStar(ctx.current, graphCenter, 100, 0);

    // ctx.moveTo(0, 0);
    // ctx.lineTo(150, 100);
    // ctx.stroke();
    // ctx.lineTo(50, 120);
    // ctx.stroke();

    // ctx.beginPath();
    // ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    // ctx.strokeStyle = 'orange';
    // ctx.fillStyle = 'orange';
    // ctx.fill();
    // ctx.stroke();
  });

  console.log('(3) --->>>> RENDERING')

  return (
    <canvas
      ref={ref}
      width={WIDTH}
      height={HEIGHT}
    />
  );
};

export const useCanvas = () => {
  const context = useContext(CanvasContext);
  if (context === undefined) {
    throw new Error('useCanvas must be used within a CountProvider');
  }
  return context;
};

export default CanvasProvider;
