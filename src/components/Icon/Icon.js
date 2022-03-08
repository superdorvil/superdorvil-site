import React from 'react';
import { IconSVG, IconPath } from './Elements';

function Icon ({ icon, width, height }) {
  return(
    <IconSVG
      viewBox="0 0 1024 1024">
      <IconPath d={icon} />
    </IconSVG>
  );
};

export default Icon;
