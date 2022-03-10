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
  display: flex;
  align-self: center;
`;

export const Divider = styled.div`
  height: 1px;
  display: flex;
  width: 100vw - 275px;
  background-color: ${props => props.borderVisible === true ? '#FFFFFF' : 'transparent'};
`;

export const Title = styled.p`
  text-align: center;
  margin-top: 2vw;
  font-size: 4.5vw;
  color: ${COLORS.BAD_ASS_ORANGE};
`;

export const Project = styled.p`
  color: ${props => props.selected ? COLORS.BAD_ASS_ORANGE : '#FFFFFF99'};
  font-family: ${props => props.selected ? 'Roboto-Bold' : 'Roboto-Regular'};
  font-size: 1.75vw;
  padding-left: 2vw;
  padding-right: 2vw;
  padding-top: .75vw;
  padding-bottom: .75vw;
  margin-top: .25vw;
  margin-bottom: 1vw;
  border-radius: 1vw;
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
