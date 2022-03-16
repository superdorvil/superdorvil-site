import { Link as LinkS } from 'react-scroll';
import styled from 'styled-components';
import {COLORS} from '../../constants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding-top: 12vw;
  padding-bottom: 35vw;
  margin-left: 8vw;
`;

export const SubTitleContainer = styled.div`
  margin-top: 2vw;
  margin-bottom: 3vw;
`;

export const ButtonContainer = styled.div``;

export const Title = styled.p`
  font-size: 6vw;
  color: ${COLORS.BAD_ASS_ORANGE};
  font-family: Montserrat-Regular;
`;

export const SubTitle = styled.p`
  margin-top: .4vw;
  font-size: 1.65vw;
  color: #FFFFFF99;
  font-family: Montserrat-Regular;
`;
