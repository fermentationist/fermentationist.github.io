import React, {Component} from "react";
import ProjectCard from "./ProjectCard.js";
import projects from "../projects.js";
import projectNames from "../projectNames";

class GithubProjectList extends Component {
	constructor (props) {
		super(props);
		this.state ={
			projects: []
		};
		this.getProjects = this.getProjects.bind(this);
	}
	async getProjects () {
		const projectsArray = await projectNames.map(async repoName => {
			const project = await fetch(`https://api.github.com/repos/fermentationist/${repoName}`)
			.then(response => response.json());
			const {name, description, html_url, homepage, clone_url} = project;
			return {name, description, links: [html_url, homepage, clone_url]};
		});
		console.log("await projectsArray", await Promise.all(projectsArray));
		return await Promise.all(projectsArray);
	}
	async componentWillMount () {
		this.setState({
			projects: await this.getProjects()
			}
		);
	}

	render () {
		console.log("this.state.projects=", this.state.projects)
		return (
				<React.Fragment>
					{this.state.projects.map(project => {
						return (
							<ProjectCard {...project} key={project.name}/>
							// <div>
							// 	{project.name}
							// </div>
						);
					})}
				</React.Fragment>
				);
	}

}
export default GithubProjectList;