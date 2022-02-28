import { getCtx } from './context-canvas';
import { translatCood } from './drawGrid';

const drawStar = (x, y) => {
  const { ctx, graphCenter } = getCtx();
  const graphCoord = translatCood(graphCenter, x, y);

  ctx.beginPath();
  ctx.arc(graphCoord.x, graphCoord.y, 6, 0, 2 * Math.PI);
  ctx.strokeStyle = 'white';
  ctx.fillStyle = 'orange';
  ctx.fill();
  ctx.stroke();
};

export default drawStar;
