/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React from 'react';
import { Container } from './styles';
import SkySelector from './SkySelector';

const Dashboard = ({ sky, onChangeSky }) => {
  return (
    <Container>
      <SkySelector sky={sky} onChange={onChangeSky} />
    </Container>
  );
};

export default Dashboard;
