import {IconSVG, IconPath} from './Elements';

function Icon ({ icon, small }) {
  return(
    <IconSVG
      viewBox="0 0 1024 1024"
      small={small}>
      <IconPath d={icon} />
    </IconSVG>
  );
};

export default Icon;
