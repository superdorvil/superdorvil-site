import {
  Project,
  Button,
} from './Elements';

function ProjectButton({project, projectMode, projectPressed}) {
  return (
    <Button
      onClick={(e) => {
        e.preventDefault();
        projectPressed(project);
      }}>
      <Project selected={projectMode === project}>{project}</Project>
    </Button>
  );
}

export default ProjectButton;
