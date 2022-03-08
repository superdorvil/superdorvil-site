import styled from 'styled-components';
import {COLORS} from '../../constants';

export const Container = styled.div`
  padding-left: 7vw;
  display: flex;
  flex: 1;
  border-bottom: 1px solid;
  border-bottom-color: ${props => props.borderVisible === true ? '#FFFFFF' : 'transparent'};
`;

export const HeaderContainer = styled.div`

`;

export const ProjectContainer = styled.div`

`;

export const Title = styled.p`
  margin-top: 4vw;
  margin-bottom: 1.5vw;
  font-size: 6vw;
  color: ${COLORS.BAD_ASS_ORANGE};
`;

export const Project = styled.p`
  color: ${props => props.selected ? COLORS.BAD_ASS_ORANGE : '#FFFFFF99'};
  font-family: ${props => props.selected ? 'Roboto-Bold' : 'Roboto-Regular'};
  font-size: 1.75vw;
  margin-right: 2vw;
  margin-bottom: 1.75vw;
`;

export const Button = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  &:hover {
    transition: all 0.1s ease-in-out;
    background: #FFFFFF;
    color: #000000;
  }
`;
