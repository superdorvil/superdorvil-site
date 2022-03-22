import styled from 'styled-components';
import {COLORS} from '../../constants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8vw;
`;

export const Title = styled.p`
  text-align: center;
  padding-top: 1.5vw;
  padding-bottom: 1.5vw;
  font-size: 6vw;
  color: ${COLORS.BAD_ASS_ORANGE};
  font-family: Montserrat-Regular;

`;

export const Divider = styled.div`
  align-items: center;
  height: 1px;
  background-color: ${COLORS.BAD_ASS_ORANGE};
`;
