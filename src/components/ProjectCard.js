import React, {Component} from "react";
import styled from "styled-components";
import DevIcon from "devicon-react-svg";

const StyledCard = styled.div`
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	margin: 25px;
	padding: 25px;
	border-radius: 13px;
	background-color: ${props => props.theme.cardBackgroundColor};
	background-image: url("${props => props.theme.cardBackgroundImage}");
	font-family: ${props => props.theme.cardBodyFont};
	color: ${props => props.theme.cardBodyColor};

	.project-title {
		display: block;
		font-family: ${props => props.theme.cardTitleFont};
		color: ${props => props.theme.cardTitleColor};
	}

	.project-image {
		display: block;
	}

	.project-description {
		font-family: ${props => props.theme.cardBodyFont};
	}

	.project-links {
		list-style: none;
		padding: 0;
		color: ${props => props.theme.cardBodyColor};
	}

	li.project-link > a{
		display: inline-flex;
		flex-direction: row-reverse;
		align-items: center;
	}

	li.project-link > a:hover {
		span {
			color : ${props => props.theme.cardBodyHoverColor};
		}
		svg {
			fill: ${props => props.theme.cardBodyHoverColor};
		}
	}

	span.link-caption {
	}

	.dev-icons-list {
        padding: 0;
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: left;
        width: 100%;
	}

`;

const LinkIcon = styled(DevIcon)`
	fill: ${props => props.theme.cardBodyColor};
	width: 3em;
	height: auto;
	text-align: end;
	align-content: flex-start;
	padding-left: 0.75em;
`;

const TechIcon = styled(DevIcon)`
	fill: ${props => props.theme.cardBodyColor};
	fill: red;
	width: 4em;
	height: 4em;
`;

class ProjectCard extends Component {
	constructor (props) {
		super(props);
		this.state = {...props};
	}
	render() {
		return (
			<StyledCard className={`project-card project-${this.state.title}`}>
				<h2 className="project-title">{this.state.title}</h2>
				{this.state.imageUrl ? 
				(<img className="project-image" src={this.state.imageUrl} alt={this.state.title}/>) : null
				}
				<p className="project-description">{this.state.description}</p> 
				<ul className="project-links">
					{this.state.links.map((link, i) => {
						return (
							<li className="project-link" key={i}>
								<a href={link.linkUrl}>
								{
									link.linkIcon ? (
										<LinkIcon icon={link.linkIcon} />
									) : null
								}
								<span className="link-caption">{link.linkTitle}</span>
								</a>
							</li>
						);
					})}
				</ul>
				{this.state.devIcons.length ? 
					(
					<ul className="dev-icons-list">
						{this.state.devIcons.map((icon, i) => (
						<li className="dev-icon-list-item" key={i}>
							<TechIcon icon={icon} className="dev-icon"/>
						</li>
						))}
					</ul>
					) : null
				}
			</ StyledCard>
		);
	}
}

export default ProjectCard;
