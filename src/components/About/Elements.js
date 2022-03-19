import styled from 'styled-components';
import {COLORS} from '../../constants';

export const Container = styled.div``;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const PhotoContainer = styled.div`
  width: 45vw;
  margin-top: 4vw;
  border-radius: 1vw;
  overflow: hidden;
`;

export const CarouselContainer = styled.div`
  margin-left: 15vw;
`;

export const CarouselButton = styled.div`
  width: 4vw;
`;

export const RightButton = styled.div`
  position: absolute;
  top: 18vw;
  right: 6.4vw;
`;

export const LeftButton = styled.div`
  position: absolute;
  top: 18vw;
  left: -8.6vw;
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
  font-size: 1.5vw;
  margin-bottom: 5vw;
`;

export const Footer = styled.p`
  padding-top: 10vw;
  padding-bottom: 5vw;
  color: #FFFFFF99;
  font-size: 1.5vw;
`;
