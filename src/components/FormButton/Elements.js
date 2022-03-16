import styled from 'styled-components';
import {COLORS} from '../../constants';

export const Container = styled.input`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: row;
  background: ${COLORS.BAD_ASS_ORANGE};
  border: 0px;
  border-radius: 3vw;
  cursor: pointer;
  font-size: 1.75vw;
  color: #FFFFFF;
  padding-left: 3vw;
  padding-right: 3vw;
  padding-top: 1.75vw;
  padding-bottom: 1.75vw;
  font-family: Montserrat-Bold;
  &:hover {
    background: #FFFFFF;
    color: ${COLORS.BAD_ASS_ORANGE};
    transition: all 0.1s ease-in-out;
  }
`;
