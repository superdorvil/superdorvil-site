import styled from 'styled-components';
import {COLORS} from '../../constants';

export const Container = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
`;

export const CollageContainer = styled.div`
  margin-top: 50px;
  width: 55vw;
  border-color: ${COLORS.BAD_ASS_ORANGE};
`;

export const Message = styled.p`
  width: 70vw;
  border: 1px solid;
  border-color: ${COLORS.BAD_ASS_ORANGE};
  border-radius: 30px;
  color: #FFFFFF;
  padding: 20px;
  margin-top: 30px;
  background-color: transparent;
  font-family: Roboto-Regular;
  font-size: 14px;
  margin-bottom: 20px;
`;
