import styled from 'styled-components';
import {COLORS} from '../../constants';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

export const InnerContainer = styled.div`
  margin-bottom: 6vw;
  margin-left: 6vw;
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
