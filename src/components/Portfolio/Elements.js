import styled from 'styled-components';
import {COLORS} from '../../constants';

export const Container = styled.div`
  align-items: center;
  padding-bottom: 5vw;
`;

export const ImageContainer = styled.div`
  margin-top: 3vw;
  width: 35vw;
  border: .175vw solid;
  border-color: ${COLORS.BAD_ASS_ORANGE};
  border-radius: 2vw;
  overflow: hidden;
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonContainer = styled.a`
  position: absolute;
  right: 3vw;
  cursor: pointer;
`;

export const AboutContainer = styled.div`
  width: 60vw;
  border: .175vw solid;
  border-color: ${COLORS.BAD_ASS_ORANGE};
  border-radius: 2vw;
  margin-top: 1vw;
  margin-top: 2.5vw;
`;

export const Divider = styled.div`
  align-items: center;
  height: ${props => props.dividerInvisible ? 0 : 1}px;
  background-color: #FFFFFF;
  width: 65vw;
  margin-bottom: ${props => props.dividerInvisible ? 0 : 5}vw;
  margin-top: 5vw;
`;

export const Title = styled.div`
  color: #FFFFFF;
  font-size: 3vw;
  margin-top: 2.25vw;
  @media only screen and (max-width: 500px) {
    font-size: 3.5vw;
  }
`;

export const AboutDescription = styled.p`
  padding: 1vw;
  color: #FFFFFF;
  text-align: center;
  font-size: 1.5vw;
  @media only screen and (max-width: 500px) {
    font-size: 2vw;
  }
`;
