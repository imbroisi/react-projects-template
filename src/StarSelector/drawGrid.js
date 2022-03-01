/* eslint-disable  */
import { getCtx, setMapCenter } from './context-canvas';
import { GALAXY_RADIUS_Y, GALAXY_RADIUS_X, GRID_SIZE } from './constants';
import {
  WIDTH,
  HEIGHT,
  GRID_COLOR,
  GRID_COLOR_HILI,
} from './styles';

/*
  5000 ly = 40 px
  20000 ly = 40 * 20000 / 5000 = 168px
*/

// eslint-disable-next-line no-unused-vars
const GALAXY_CENTER_COORD = {
  x: 0,
  y: 160, // -26000,
};

export const translatCood = (graphCenter, x = 0, y = 0) => (
  {
    x: x + graphCenter.x + WIDTH / 2,
    y: y + graphCenter.y + HEIGHT / 2, // + GALAXY_CENTER_COORD.y,
  }
);

const numberWithCommas = (x) => (
  x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
);

const drawGrid = () => {
  // eslint-disable-next-line no-unused-vars
  const {
    ctx,
    graphCenter,
    zoom,
    zoomFactor,
    mapCenter,
  } = getCtx();

  ctx.lineWidth = 1;
  const graphCoord = translatCood(graphCenter);

  console.log('-->> graphCenter', graphCenter);
  console.log('-->> graphCoord', graphCoord);
  console.log('-->> mapCenter', mapCenter);

  ctx.font = '18px arial';

  // vertical lines
  // for (let i = 0; i <= WIDTH; i += GRID_SIZE) {
  //   ctx.beginPath();
  //   ctx.moveTo(i, 0);
  //   ctx.lineTo(i, HEIGHT);
  //   // ctx.strokeStyle = i === graphCoord.x ? GRID_COLOR_HILI : GRID_COLOR;
  //   ctx.strokeStyle = GRID_COLOR;
  //   ctx.stroke();
  // }

  // horizontal lines down
  // for (let i = graphCoord.y; i <= HEIGHT; i += GRID_SIZE) {
  for (let i = HEIGHT / 2; i <= HEIGHT; i += GRID_SIZE) {
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(WIDTH, i);
    // ctx.strokeStyle = i === graphCoord.y ? GRID_COLOR_HILI : GRID_COLOR;
    ctx.strokeStyle = GRID_COLOR;
    ctx.stroke();

    ctx.font = '14px Verdana';
    ctx.fillStyle = GRID_COLOR;
    const y = (graphCoord.y - i) / zoomFactor;
    ctx.fillText(`${i} ${numberWithCommas(y)} ${y === 0 ? '' : 'ly'}`, 4, i - 4);
  }

  // horizontal lines up
  // for (let i = 0; i <= graphCoord.y; i += GRID_SIZE) {
  for (let i = 0; i <= HEIGHT / 2; i += GRID_SIZE) {
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(WIDTH, i);
    // ctx.strokeStyle = i === graphCoord.y ? GRID_COLOR_HILI : GRID_COLOR;
    ctx.strokeStyle = GRID_COLOR;
    ctx.stroke();

    ctx.font = '14px Verdana';
    ctx.fillStyle = GRID_COLOR;
    const y = (graphCoord.y - i) / zoomFactor;
    ctx.fillText(`${i} ${numberWithCommas(y)} ${y === 0 ? '' : 'ly'}`, 4, i - 4);
  }

  // galaxy circle
  // ctx.beginPath();
  // // eslint-disable-next-line max-len
  // ctx.ellipse(graphCoord.x, graphCoord.y - (GALAXY_CENTER_COORD.y * zoom), GALAXY_RADIUS_X * zoomFactor, GALAXY_RADIUS_Y * zoomFactor, 2 * Math.PI, 0, 2 * Math.PI);
  // ctx.strokeStyle = GRID_COLOR;
  // ctx.fillStyle = 'transparent';
  // ctx.fill();
  // ctx.stroke();

  // The Black Hole
  ctx.beginPath();
  // eslint-disable-next-line max-len
  ctx.ellipse(graphCoord.x, graphCoord.y - (GALAXY_CENTER_COORD.y * zoom), 10, 30, Math.PI / 4, 0, 2 * Math.PI);
  ctx.strokeStyle = 'red';
  ctx.fillStyle = '#e98052';
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  // eslint-disable-next-line max-len
  ctx.ellipse(graphCoord.x, graphCoord.y - (GALAXY_CENTER_COORD.y * zoom), 4, 16, Math.PI / 4, 0, 2 * Math.PI);
  ctx.strokeStyle = 'yellow';
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.stroke();

  // center of the graphic
  ctx.beginPath();
  ctx.arc(WIDTH / 2, HEIGHT / 2, 4, 0, 2 * Math.PI);
  ctx.strokeStyle = GRID_COLOR;
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.stroke();


  // const mapCenterY = (graphCoord.y - HEIGHT / 2) / zoomFactor;
  // const mapCenterX = (graphCoord.x - WIDTH / 2) / zoomFactor;
  const mapCenterY = graphCoord.y - HEIGHT / 2;
  const mapCenterX = graphCoord.x - WIDTH / 2;

  console.log('+++++++++ mapCenterY', mapCenterY);

  setMapCenter({
    y: mapCenterY,
    x: mapCenterX,
  });
};

export default drawGrid;
