import styled from 'styled-components';
import {COLORS} from '../../constants';

export const Container = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
`;

export const CollageContainer = styled.div`
  margin-top: 6vw;
  width: 400px;
  border: 0px solid;
  border-color: ${COLORS.BAD_ASS_ORANGE};
  border-radius: 1.5vw;
  overflow: hidden;
  margin-right: 2vw;
`;

export const Message = styled.p`
  width: 400px;
  border: 1px solid;
  border-color: ${COLORS.BAD_ASS_ORANGE};
  border-radius: 1.5vw;
  color: #FFFFFF;
  padding: 1.5vw;
  margin-top:6vw;
  margin-left: 2vw;
  background-color: transparent;
  font-family: Roboto-Regular;
  font-size: 14.5px;
`;
