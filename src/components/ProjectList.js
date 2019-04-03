import React, {Component} from "react";
import ProjectCard from "./ProjectCard.js";
import projectArray from "../projects.js";
import styled from "styled-components";

const StyledDiv = styled.div`
	
`;

class ProjectList extends Component {
	constructor (props) {
		super(props);
		this.state ={
			projects: projectArray
		};
	}

	render () {
		return (
				<StyledDiv className="projects" id="projects">
					{this.state.projects.map((project, i) => {
						return (
							<ProjectCard {...project} key={`project-${i}`}/>
						);
					})}
				</StyledDiv>
				);
	}

}
export default ProjectList;