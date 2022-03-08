import styled from 'styled-components';
import {COLORS} from '../../constants';

export const Container = styled.div`
  flex-direction: column;
  display: flex;
  align-self: center;
  align-items: baseline;
  justify-content: center;
  padding-bottom: 6vw;
`;

export const SubTitleContainer = styled.div`
  margin-top: 2vw;
  margin-bottom: 3vw;
`;

export const Title = styled.p`
  font-size: 6vw;
  color: ${COLORS.BAD_ASS_ORANGE};
  font-family: Roboto-Regular;
`;

export const SubTitle = styled.p`
  margin-top: .5vw;
  font-size: 1.75vw;
  color: #FFFFFF99;
  font-family: Roboto-Regular;
`;
