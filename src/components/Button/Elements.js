import styled from 'styled-components';
import {COLORS} from '../../constants';

export const Container = styled.button`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  background: ${COLORS.BAD_ASS_ORANGE};
  border: 0px;
  border-radius: 5vw;
  cursor: pointer;
  &:hover {
    background: #FFFFFF;
    transition: all 0.1s ease-in-out;
  }
`;

export const Description = styled.p`
  padding-top: 2vw;
  padding-bottom: 2vw;
  padding-left: 5vw;
  padding-right: 5vw;
  font-size: 2vw;
  color: white;
  font-family: Roboto-Bold;
  &:hover {
    color: ${COLORS.BAD_ASS_ORANGE};
    transition: all 0.1s ease-in-out;
  }
`;
