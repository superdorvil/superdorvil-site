import styled from 'styled-components';
import {COLORS} from '../../constants';

 export const IconSVG = styled.svg`
   display: 'inline-block';
   verticalAlign: 'middle';
   width: ${props => props.width}vw;
   height: ${props => props.height}vw;
   fill: ${COLORS.BAD_ASS_ORANGE};
   background-color: #FFFFFF;
   border-radius: ${props => props.width}vw;
   &:hover {
     transition: all 0.1s ease-in-out;
     fill: #FFFFFF;
     background-color: ${COLORS.BAD_ASS_ORANGE};
   }
 `;

 export const IconPath = styled.path``;
