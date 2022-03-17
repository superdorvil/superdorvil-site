import styled from 'styled-components';

export const Container = styled.div`
  cursor: pointer;
  width: ${props => props.width}vw;
  &:hover {
    border-radius: 10vw;
    transition: all 0.1s ease-in-out;
    background-color: white;
  }
`;
