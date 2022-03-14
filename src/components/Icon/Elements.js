import styled from 'styled-components';
import {COLORS} from '../../constants';

 export const IconSVG = styled.svg`
   display: 'inline-block';
   verticalAlign: 'middle';
   width: ${props => props.small ? 32 : 48}px;
   height: ${props => props.small ? 32 : 48}px;
   fill: ${COLORS.BAD_ASS_ORANGE};
   background-color: #FFFFFF;
   border-radius: 48px;
   &:hover {
     transition: all 0.1s ease-in-out;
     fill: #FFFFFF;
     background-color: ${COLORS.BAD_ASS_ORANGE};
   }
   @media only screen and (max-width: 850px) {
     width: ${props => props.small ? 4 : 6}vw;
     height: ${props => props.small ? 4 : 6}vw;
     border-radius: ${props => props.small ? 4 : 6}vw;
   }
 `;

 export const IconPath = styled.path``;
