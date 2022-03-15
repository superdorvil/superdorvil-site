import styled from 'styled-components';
import {COLORS} from '../../constants';

export const Container = styled.div`
  padding-bottom: 12vw;
`;

export const InnerContainer = styled.div`
  align-items: center;
  flex-direction: column;
  display: flex;
`;

export const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FriendlyMessageContainer = styled.div`
  margin-top: .5vw;
  margin-bottom: 2.5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FriendlyMessage = styled.p`
  color: #FFFFFF99;
  margin-top: .4vw;
  font-family: Montserrat-Regular;
  font-size: 1.5vw;
`;

export const Name = styled.input`
  width: 60vw;
  border: .175vw solid;
  border-color: ${COLORS.BAD_ASS_ORANGE};
  border-radius: 4vw;
  color: #FFFFFF;
  flex-direction: row;
  padding-top: 1.5vw;
  padding-bottom: 1.5vw;
  padding-left: 3vw;
  padding-right: 3vw;
  font-size: 1.5vw;
  background-color: transparent;
  font-family: Montserrat-Regular;
`;

export const Email = styled.input`
  width: 27vw;
  border: .175vw solid;
  border-color: ${COLORS.BAD_ASS_ORANGE};
  border-radius: 4vw;
  margin-top: 2vw;
  margin-right: 3vw;
  font-size: 1.5vw;
  color: #FFFFFF;
  flex-direction: row;
  padding: 1.5vw;
  padding-left: 3vw;
  padding-right: 3vw;
  background-color: transparent;
  font-family: Montserrat-Regular;
`;

export const Phone = styled.input`
  width: 27vw;
  border: .175vw solid;
  border-color: ${COLORS.BAD_ASS_ORANGE};
  border-radius: 4vw;
  margin-top: 2vw;
  margin-left: 3vw;
  font-size: 1.5vw;
  color: #FFFFFF;
  flex-direction: row;
  padding: 1.5vw;
  padding-left: 3vw;
  padding-right: 3vw;
  background-color: transparent;
  font-family: Montserrat-Regular;
`;

export const Message = styled.textarea`
  width: 60vw;
  height: 13vw;
  border: .175vw solid;
  border-color: ${COLORS.BAD_ASS_ORANGE};
  border-radius: 2vw;
  margin-top: 2vw;
  margin-bottom: 2vw;
  padding: 1.5vw;
  padding-left: 3vw;
  padding-right: 3vw;
  font-size: 1.5vw;
  color: #FFFFFF;
  background-color: transparent;
  font-family: Montserrat-Regular;
`;
