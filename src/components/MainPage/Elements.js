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
  padding-left: 275px;
  background-color: ${props => props.borderVisible === true ? '#FFFFFF' : 'transparent'};
  @media only screen and (max-width: 1000px) {
    padding-left: 225px;
  }
`;

export const Title = styled.p`
  text-align: center;
  margin-top: 30px;
  font-size: 75px;
  color: ${COLORS.BAD_ASS_ORANGE};
  font-family: Roboto-Regular;
  @media only screen and (max-width: 1000px) {
    font-size: 50px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 40px;
  }
`;

export const Project = styled.p`
  color: ${props => props.selected ? COLORS.BAD_ASS_ORANGE : '#FFFFFF99'};
  font-family: ${props => props.selected ? 'Roboto-Bold' : 'Roboto-Regular'};
  font-size: 24px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 4px;
  padding-bottom: 4px;
  margin-bottom: 10px;
  border-radius: 15px;
  text-decoration-color: ${props => props.selected ? COLORS.BAD_ASS_ORANGE : 'transparent'};
  text-decoration: ${props => props.selected ? 'underline' : ''};
  &:hover {
    background: #FFFFFF;
    transition: all 0.1s ease-in-out;
    color: ${COLORS.BAD_ASS_ORANGE};
  }
  font-family: Roboto-Regular;
  @media only screen and (max-width: 1000px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 12px;
  }
`;

export const Button = styled.button`
  padding: 0px;
  margin: 0px;
  cursor: pointer;
  background: transparent;
  border: none;
`;
