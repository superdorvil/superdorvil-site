import styled from 'styled-components';
import {COLORS} from '../../constants';

export const Container = styled.div``;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const CollageContainer = styled.div`
  margin-top: 4vw;
  width: 60vw;
  border-color: ${COLORS.BAD_ASS_ORANGE};
`;

export const Message = styled.p`
  width: 60vw;
  border: .175vw solid;
  border-color: ${COLORS.BAD_ASS_ORANGE};
  border-radius: 2vw;
  color: #FFFFFF;
  padding: 1.5vw;
  padding-left: 3vw;
  padding-right: 3vw;
  margin-top: 4vw;
  background-color: transparent;
  font-family: Montserrat-Regular;
  font-size: 1.25vw;
  margin-bottom: 5vw;
`;

export const Footer = styled.p`
  margin-top: 10vw;
  margin-bottom: 5vw;
  color: #FFFFFF99;
  font-size: 1.5vw;
`;
