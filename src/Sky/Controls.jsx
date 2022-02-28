/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';
import { extend, useThree } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const INITIAL_CAMERA_Z = 4;

extend({ OrbitControls });

const Controls = ({ moveTo, ...props }) => {
  const { camera, gl } = useThree();
  const ref = useRef();

  useEffect(() => {
    camera.position.z = INITIAL_CAMERA_Z;
  }, [camera]);

  return (
    <orbitControls
      ref={ref}
      target={[0, 0, 0]}
      {...props}
      args={[camera, gl.domElement]}
      maxDistance={100}
      minDistance={10}
      enableZoom
      enablePan={false}
    />
  );
};

export default Controls;
