import styled from 'styled-components';
import {COLORS} from '../../constants';

 export const IconSVG = styled.svg`
   display: 'inline-block';
   verticalAlign: 'middle';
   width: 3vw;
   height: 2.1vw;
   fill: #FFFFFF;
   &:hover {
     transition: all 0.1s ease-in-out;
     fill: ${COLORS.BAD_ASS_ORANGE};
   }
 `;

 export const IconPath = styled.path``;
