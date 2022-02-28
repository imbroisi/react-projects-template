import React, { useState } from 'react';
import { Canvas } from 'react-three-fiber';
import CelestialDome from './CelestialDome';
import Controls from './Controls';
import Dashboard from './Dashboard';
import { SpaceWrapper } from './styles';

const Sky = () => {
  const [sky, setSky] = useState('sky_00_medium.webp');

  return (
    <SpaceWrapper>
      <Canvas camera={{ far: 10000 }}>
        <Controls />
        <CelestialDome background={sky} />
        <ambientLight color={0xffffff} intensity={2} />
      </Canvas>
      <Dashboard sky={sky} onChangeSky={(sel) => setSky(sel)} />
    </SpaceWrapper>
  );
};

export default Sky;
