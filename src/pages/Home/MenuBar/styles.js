import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  background-color: #0A0B0D;
  padding: 20px 48px 14px;
  box-sizing: border-box;
  font-size: 12px;

  > * {
      &:first-child {
        font-size: 14px;
      }
    }
`;

export const Items = styled.div`
  display: flex;
  font-weight: bold;

  > * {
      &:first-child {
        margin-left: 0;
      }
    }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 36px;

  :hover {
    color: #0078fa;
  }
`;

export const IconWrapper = styled.div`
  width: 24px;
  margin-right: 8px;
`;
