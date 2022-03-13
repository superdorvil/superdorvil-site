import styled from 'styled-components';
import {COLORS} from '../../constants';

 export const IconSVG = styled.svg`
   display: 'inline-block';
   verticalAlign: 'middle';
   width: 48px;
   height: 48px;
   fill: ${COLORS.BAD_ASS_ORANGE};
   background-color: #FFFFFF;
   border-radius: 48px;
   &:hover {
     transition: all 0.1s ease-in-out;
     fill: #FFFFFF;
     background-color: ${COLORS.BAD_ASS_ORANGE};
   }
   @media only screen and (max-height: 1000px) {
     width: 40px;
     height: 40px;
     border-radius: 40px;
   }
 `;

 export const IconPath = styled.path``;
