import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
  align-self: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 32px;
`;

export const ButtonContainer = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  @media only screen and (max-height: 1000px) {
    margin-top: 6px;
  }
`;

export const Button = styled.div`
  cursor: pointer;
`;
