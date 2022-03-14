import styled from 'styled-components';
import {COLORS} from '../../constants';

export const Container = styled.div`
  border-right: 1px solid #FFFFFF;
  justify-content: center;
  display: flex;
  height: 100vh;
  flex-direction: column;
  width: 25vw;
  position: fixed;
`;

export const PFPContainer = styled.div`
  width: 12vw;
  display: flex;
  border-radius: 1vw;
  align-self: center;
  overflow: hidden;
  margin-top: 60px;
  border: .175vw solid;
  border-color: ${COLORS.BAD_ASS_ORANGE};
  @media only screen and (max-height: 650px) {
    margin-top: 6vw;
  }
`;

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  @media only screen and (max-height: 650px) {
    margin-top: 6vw;
  }
`;

export const Name = styled.p`
  margin-top: 16px;
  color: #FFFFFF;
  font-family: Montserrat-Bold;
  font-size: 2vw;
  text-align: center;
`;

export const Job = styled.p`
  color: #FFFFFF99;
  font-family: Montserrat-Regular;
  font-size: 1.25vw;
  margin-top: 12px;
  text-align: center;
  @media only screen and (max-width: 800px) {
    font-size: 12px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  &:hover {
    transition: all 0.1s ease-in-out;
    background: #FFFFFF;
  }
`;

export const ButtonText = styled.p`
  font-size: 28px;
  padding-bottom: 6px;
  padding-top: 6px;
  color: ${props => props.selected ? COLORS.BAD_ASS_ORANGE : '#FFFFFF99'};
  font-family: ${props => props.selected ? 'Montserrat-Bold' : 'Montserrat-Regular'};
  &:hover {
    color: ${COLORS.BAD_ASS_ORANGE}
  }
  @media only screen and (max-width: 700px) {
    font-size: 20px;
  }
`;
