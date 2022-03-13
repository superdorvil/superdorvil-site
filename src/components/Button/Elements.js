import styled from 'styled-components';
import {COLORS} from '../../constants';

export const Container = styled.button`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: row;
  background: ${COLORS.BAD_ASS_ORANGE};
  border: 0px;
  border-radius: 5vw;
  cursor: pointer;
  &:hover {
    background: #FFFFFF;
    transition: all 0.1s ease-in-out;
  }
  padding-left: 40px;
  padding-right: 40px;
`;

export const Description = styled.p`
  padding-top: 16px;
  padding-bottom: 16px;
  padding-right: ${props => props.extra ? 2 : 0}vw;
  font-size: 20px;
  color: white;
  font-family: Roboto-Bold;
  &:hover {
    color: ${COLORS.BAD_ASS_ORANGE};
    transition: all 0.1s ease-in-out;
  }
`;
