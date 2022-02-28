/* eslint-disable react/prop-types */
import React from 'react';
import { TextureLoader, BackSide, WebGLCubeRenderTarget } from 'three';
import { useThree } from 'react-three-fiber';
import { ASSETS_URL } from 'common';

const CelestialDome = () => {
  const { scene, gl } = useThree();
  const loader = new TextureLoader();

  // const background = getSpaceInfo('space', 'background');

  const src = `${ASSETS_URL}/black.png`;

  // console.log('===>>> {ASSETS_URL}/{background}', `${ASSETS_URL}/${background}`);
  const texture = loader.load(
    src,
    () => {
      const rt = new WebGLCubeRenderTarget(texture.image.height);
      rt.fromEquirectangularTexture(gl, texture);
      scene.background = rt;
    },
  );

  return (
    <mesh>
      <meshBasicMaterial attach="material" map={texture} side={BackSide} />
    </mesh>
  );
};

export default CelestialDome;
