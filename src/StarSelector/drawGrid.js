import { getCtx } from './context-canvas';
import {
  WIDTH,
  HEIGHT,
  GRID_SIZE,
  GRID_COLOR,
  GRID_COLOR_HILI,
} from './styles';

export const translatCood = (graphCenter, x = 0, y = 0) => (
  {
    x: x + graphCenter.x + WIDTH / 2,
    y: y + graphCenter.y + HEIGHT / 2,
  }
);

const drawGrid = () => {
  const { ctx, graphCenter } = getCtx();

  ctx.lineWidth = 1;
  const graphCoord = translatCood(graphCenter);

  for (let i = 0; i <= WIDTH; i += GRID_SIZE) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, HEIGHT);
    ctx.strokeStyle = i === graphCoord.x ? GRID_COLOR_HILI : GRID_COLOR;
    ctx.stroke();
  }

  for (let i = 0; i <= HEIGHT; i += GRID_SIZE) {
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(WIDTH, i);
    ctx.strokeStyle = i === graphCoord.y ? GRID_COLOR_HILI : GRID_COLOR;
    ctx.stroke();
  }

  // ctx.beginPath();
  // ctx.arc(graphCoord.x, graphCoord.y, 16, 0, 2 * Math.PI);
  // ctx.strokeStyle = 'black';
  // ctx.fillStyle = 'black';
  // ctx.fill();
  // ctx.stroke();
};

export default drawGrid;
