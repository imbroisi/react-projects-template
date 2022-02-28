// import api from 'api';

// const types = {
//   stations: {
//     type: 'Station',
//     icon: 'CropDinOutlined',
//     warpable: true,
//     warpNormalDistace: 4000,
//     warpAutoPilotDistace: 10000,
//   },
//   asteroids: {
//     type: 'Asteroids',
//     icon: 'ScatterPlotOutlined',
//     warpable: true,
//     warpNormalDistace: 4000,
//     warpAutoPilotDistace: 10000,
//   },
//   stargates: {
//     type: 'Stargate',
//     icon: 'BlurOnOutlined',
//     warpable: true,
//     warpNormalDistace: 4000,
//     warpAutoPilotDistace: 10000,
//     safeDistance: 2000,
//     models: {
//       Stargate02: {
//         glb: '/stargates/Stargate02.glb',
//         material: 'WarpGateBlue',
//         geometry: 'WarpGate01',
//       },
//       Stargate03: {
//         glb: '/stargates/Stargate03.glb',
//         material: 'WarpGateG\\DarkGrey',
//         geometry: 'WarpGate03',
//       },
//     },
//   },
//   planets: {
//     type: 'Planet',
//     icon: 'Brightness1Outlined',
//     isFarObj: true,
//     warpable: true,
//   },
//   moons: {
//     justAdornment: true,
//     type: 'Moon',
//     icon: 'Brightness2Outlined',
//     isFarObj: true,
//     warpable: false,
//   },
// };

// const loadSystem = async (entryPoint) => {
//   const spaceConfigData = await api('spaceData', { id: entryPoint.systemId });

//   spaceConfigData.types = types;

//   global.SpaceStore = {
//     EntryPoint: entryPoint,
//     StationId: entryPoint.station,
//     // SpaceName,
//     ListedById: {},
//     elements: {},
//     ...spaceConfigData,
//   };

//   Object.keys(spaceConfigData.space).forEach((type) => {
//     if (typeof spaceConfigData.space[type] !== 'object') {
//       global.SpaceStore[type] = spaceConfigData.space[type];
//     } else {
//       Object.keys(spaceConfigData.space[type]).forEach((name) => {
//         global.SpaceStore.elements[name] = {
//           name,
//           ...global.SpaceStore.elements[name],
//           ...spaceConfigData.space[type][name],
//           ...spaceConfigData.types[type],
//         };
//       });
//     }
//   });

//   Object.keys(spaceConfigData.space).forEach((type) => {
//     if (typeof spaceConfigData.space[type] === 'object') {
//       Object.keys(spaceConfigData.space[type]).forEach((name) => {
//         global.SpaceStore.ListedById[name] = global.SpaceStore.elements[name];
//       });
//     }
//   });
// };

// export default loadSystem;
