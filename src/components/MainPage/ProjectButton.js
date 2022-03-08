import {
  Project,
  Button,
} from './Elements';

function ProjectButton({project, projectMode, projectPressed}) {
  console.log(projectMode + '     ' + project);
  return (
    <Button
      onClick={(e) => {
        e.preventDefault();
        buttonPressed(project);
      }}>
      <Project selected={projectMode === project}>{project}</Project>
    </Button>
  );
}

export default ProjectButton;
