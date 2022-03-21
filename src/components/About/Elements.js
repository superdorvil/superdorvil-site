import styled from 'styled-components';
import {COLORS} from '../../constants';

export const Container = styled.div``;

export const InnerContainer = styled.div`
  padding-top: 3vw;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const PhotoContainer = styled.div`
  width: 35vw;
  border-radius: 1vw;
  overflow: hidden;
`;

export const Message = styled.p`
  width: 60vw;
  border: .175vw solid;
  border-color: ${COLORS.BAD_ASS_ORANGE};
  border-radius: 2vw;
  color: #FFFFFF;
  padding: 1.25vw;
  background-color: transparent;
  font-family: Montserrat-Regular;
  font-size: 1.5vw;
  margin-top: 4vw;
`;

export const Footer = styled.p`
  padding-top: 10vw;
  padding-bottom: 5vw;
  color: #FFFFFF99;
  font-size: 1.5vw;
  text-align: center;
  padding-bottom: 5vw;
`;
