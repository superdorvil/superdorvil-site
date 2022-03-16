import { Link as LinkS } from 'react-scroll';
import styled from 'styled-components';
import {COLORS} from '../../constants';

export const Container = styled(LinkS)``;

export const Description = styled.p`
  cursor: pointer;
  background: ${COLORS.BAD_ASS_ORANGE};
  border-radius: 3vw;
  padding-top: 1.75vw;
  padding-bottom: 1.75vw;
  padding-left: 3vw;
  padding-right: 3vw;
  font-size: 1.75vw;
  color: #FFFFFF;
  font-family: Montserrat-Bold;
  &:hover {
    background: #FFFFFF;
    color: ${COLORS.BAD_ASS_ORANGE};
    transition: all 0.1s ease-in-out;
  }
`;
