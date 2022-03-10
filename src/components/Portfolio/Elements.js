import styled from 'styled-components';
import {COLORS} from '../../constants';

export const Container = styled.div`
  width: 100vw - 275px;
  justify-content: center;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageContainer = styled.div`
  margin-top: 1.5vw;
  width: 400px;
  border: 2px solid;
  border-color: ${COLORS.BAD_ASS_ORANGE};
  border-radius: 1.5vw;
  overflow: hidden;
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  margin-top: 1vw;
`;

export const AboutContainer = styled.div`
  width: 60vw;
  border: 1px solid;
  border-color: ${COLORS.BAD_ASS_ORANGE};
  border-radius: 1.5vw;
  margin-top: 1vw;
`;

export const AboutDescription = styled.div`
  padding: 1vw;
  color: #FFFFFF;
  text-align: center;
`;
