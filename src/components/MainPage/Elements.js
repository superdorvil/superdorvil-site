import styled from 'styled-components';
import {COLORS} from '../../constants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-bottom: 1px solid;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProjectContainer = styled.div`
  margin-left: 6vw;
`;

export const Divider = styled.div`
  height: 1px;
  display: flex;
  width: 100vw - 275px;
  background-color: ${props => props.borderVisible === true ? '#FFFFFF' : 'transparent'};
`;

export const Title = styled.p`
  margin-left: 6vw;
  margin-top: 2vw;
  margin-bottom: 1.5vw;
  font-size: 4.5vw;
  color: ${COLORS.BAD_ASS_ORANGE};
`;

export const Project = styled.p`
  color: ${props => props.selected ? COLORS.BAD_ASS_ORANGE : '#FFFFFF99'};
  font-family: ${props => props.selected ? 'Roboto-Bold' : 'Roboto-Regular'};
  font-size: 1.75vw;
  margin-right: 3vw;
  padding-bottom: 1.75vw;
  text-decoration-color: ${props => props.selected ? COLORS.BAD_ASS_ORANGE : 'transparent'};
  text-decoration: ${props => props.selected ? 'underline' : ''};
  &:hover {
    background: #FFFFFF;
    transition: all 0.1s ease-in-out;
    color: ${COLORS.BAD_ASS_ORANGE};
  }
`;

export const Button = styled.button`
  padding: 0px;
  margin: 0px;
  cursor: pointer;
  background: transparent;
  border: none;
`;
