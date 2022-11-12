import Page from "../../components/Page";
import ProjectCard from "../../components/ProjectCard";
import projects from "../../config/projects";

const Projects = props => {
  return (
    <Page>
      {
        projects.map((project, i) => {
          return (
            <ProjectCard {...project} key={`project-${i}`}/>
          );
        })
      }
    </Page>
  )
}

export default Projects;