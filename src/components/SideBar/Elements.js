import styled from 'styled-components';
import {COLORS} from '../../constants';

export const Container = styled.div`
  border-right: 1px solid #FFFFFF;
  height: 100vh;
  width: 20vw;
  justify-content: center;
`;

export const PFPContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.p`
  color: #FFFFFF;
  font-family: Roboto-Bold;
  font-size: 1.5vw;
  padding-top: .75vw;
  text-align: center;
`;

export const Job = styled.p`
  color: #FFFFFF99;
  font-family: Roboto-Regular;
  font-size: .75vw;
  margin-top: .75vw;
  text-align: center;
`;

export const Button = styled.button`
  font-size: 2.5vw;
  cursor: pointer;
  background: transparent;
  border: none;
  &:hover {
    transition: all 0.1s ease-in-out;
    background: #FFFFFF;
    color: #000000;
  }
`;

export const ButtonText = styled.p`
  color: ${props => props.selected ? COLORS.BAD_ASS_ORANGE : '#FFFFFF'};
  font-family: ${props => props.selected ? 'Roboto-Bold' : 'Roboto-Regular'};
`;
