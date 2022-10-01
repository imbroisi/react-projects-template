import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  cursor: pointer;
  height: 154px;
`;

export const Image = styled.img.attrs({
  alt: '',
  width: '2560',
  height: '154',
})`
  margin-left: 50%; 
  transform: translateX(-50%);
`;
