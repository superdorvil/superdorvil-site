import styled from 'styled-components';
import {COLORS} from '../../constants';

export const Container = styled.div`
  border-right: 1px solid #FFFFFF;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 275px;
  @media only screen and (max-width: 1000px) {
    width: 225px;
  }
`;

export const PFPContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  align-self: center;
  overflow: hidden;
  margin-top: 60px;
  border: 2px solid;
  border-color: ${COLORS.BAD_ASS_ORANGE};
  @media only screen and (max-height: 650px) {
    margin-top: 30px;
  }
`;

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  @media only screen and (max-height: 650px) {
    margin-top: 20px;
  }
`;

export const Name = styled.p`
  margin-top: 16px;
  color: #FFFFFF;
  font-family: Roboto-Bold;
  font-size: 22px;
  text-align: center;

`;

export const Job = styled.p`
  color: #FFFFFF99;
  font-family: Roboto-Regular;
  font-size: 12px;
  margin-top: 12px;
  text-align: center;
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
  font-family: ${props => props.selected ? 'Roboto-Bold' : 'Roboto-Regular'};
  &:hover {
    color: ${COLORS.BAD_ASS_ORANGE}
  }
  @media only screen and (max-width: 1000px) {
    font-size: 24px;
    padding-bottom: 5px;
    padding-top: 5px;
  }
`;
