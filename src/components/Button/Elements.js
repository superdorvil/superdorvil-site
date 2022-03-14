import styled from 'styled-components';
import {COLORS} from '../../constants';

export const Container = styled.button`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: row;
  background: ${COLORS.BAD_ASS_ORANGE};
  border: 0px;
  border-radius: 3vw;
  cursor: pointer;
  &:hover {
    background: #FFFFFF;
    transition: all 0.1s ease-in-out;
  }
  padding-left: 3vw;
  padding-right: 3vw;
`;

export const Description = styled.p`
  padding-top: 1.75vw;
  padding-bottom: 1.75vw;
  padding-right: ${props => props.icon ? 2 : 0}vw;
  font-size: 1.75vw;
  color: white;
  font-family: Montserrat-Bold;
  &:hover {
    color: ${COLORS.BAD_ASS_ORANGE};
    transition: all 0.1s ease-in-out;
  }
`;
