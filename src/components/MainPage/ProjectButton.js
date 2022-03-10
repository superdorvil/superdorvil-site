import { useSelector, useDispatch } from 'react-redux'
import {Project, Button} from './Elements';
import {setProjectMode} from '../../redux/mode/modeActions';

function ProjectButton({project}) {
  const dispatch = useDispatch();
  const projectMode = useSelector((state) => state.mode.projectMode);

  return (
    <Button
      onClick={(e) => {
        e.preventDefault();
        dispatch(setProjectMode(project));
      }}>
      <Project selected={projectMode === project}>{project}</Project>
    </Button>
  );
}

export default ProjectButton;
