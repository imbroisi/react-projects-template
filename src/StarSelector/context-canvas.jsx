/* eslint-disable */
import React, {
  useState,
  createContext,
  useContext,
  useRef,
  useEffect,
  useReducer,
} from 'react';
import { GRID_SIZE } from './constants';
import {
  WIDTH,
  HEIGHT,
} from './styles';

const CanvasContext = createContext();

// export const GRID_SIZE = 40;

// export const WIDTH = 1600;
// export const HEIGHT = 900;

const ZOOM_FACTOR_1 = GRID_SIZE / 5000;

let ctx;
let canvas;
let graphCenter = { x: 0, y: 0 };
let mapCenter = { x: 0, y: 0 };
let zoom = 1;

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
  zoom,
  zoomFactor: zoom * ZOOM_FACTOR_1,
  mapCenter,
});

export const setMapCenter = (coord) => {
  mapCenter = { ...coord };
}

const CanvasProvider = ({ children }) => {
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const [lastCenterY, setLastCenterY] = useState(null);

  const setGraphCenter = (v) => {
    graphCenter = { ...v };
    forceUpdate();
  };

  const setZoom = (dir) => {
    if (dir === 'up') {
      zoom = zoom * 2;
      graphCenter.y = mapCenter.y * 2
      graphCenter.x = mapCenter.x * 2
      forceUpdate();
    } else if (zoom > 0.5) {
      zoom = zoom / 2;
      graphCenter.y = mapCenter.y / 2
      graphCenter.x = mapCenter.x / 2
      forceUpdate();
    }
  };

  const getGraphCenter = () => ({ ...graphCenter });

  const value = {
    getGraphCenter,
    setGraphCenter,
    getCtx,
    setCtx,
    setZoom,
  };

  console.log('(1) --->>>> RENDERING')

  return (
    <CanvasContext.Provider value={value}>
      {children}
    </CanvasContext.Provider>
  );
};

// eslint-disable-next-line react/prop-types
export const Canvas = ({ width, height, onReady }) => {
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
      width={width}
      height={height}
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
