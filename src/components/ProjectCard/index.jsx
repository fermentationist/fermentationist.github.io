import React, {Component} from "react";
import styled from "styled-components";
import DevIcon from "devicon-react-svg";
import withTooltip from "../../hoc/withTooltip";

const StyledCard = styled.div`
	position: relative;
	z-index: 1;
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	margin: 25px;
	padding: 25px;
	border-radius: 1em;
	background-image: url("gray_kraft.webp");
	filter: invert();
	font-family: inherit;
	color: black;
	width: max(300px, 38vw);
	text-align: left;
	@media screen and (min-width: 600px) {
		width: min(800px, 38vw);
	}

	.project-title {
		display: block;
		font-family: inherit;
		color: inherit;
	}

	.project-image {
		display: block;
	}

	.project-description {
		font-family: inherit;
		margin: 0;
	}

	.project-links {
		list-style: none;
		padding: 0;
		color: inherit;
	}

	li.project-link > a{
		display: inline-flex;
		flex-direction: row-reverse;
		align-items: center;
	}

	li.project-link > a:hover {
		span {
			color : inherit;
		}
	}

	span.link-caption {
	}

	.dev-icons-list {
		margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: left;
        width: 100%;
	}

	/* to style LinkIcon when icon name is not found by component*/
	span[class*="icon-not-found"] {
		display: inline-block;
		padding: 0.5em;
		color: ${props => props.theme.techIconFillColor}
	}
	span[class*="icon-not-found"]:hover {
		color: ${props => props.theme.techIconHoverColor};
		transition: 0.6s;
	}
`;

const LinkIcon = styled(DevIcon)`
	fill: ${props => props.theme.techIconFillColor};
	width: 3.5em;
	height: auto;
	text-align: end;
	align-content: flex-start;
	padding-left: 0.75em;
	&:hover, & path:hover {
		fill: ${props => props.theme.techIconHoverColor};
		transition: 0.6s;
	}
`;

const StyledIcon = styled(DevIcon)`
	fill: ${props => props.theme.techIconFillColor};
	width: 3em;
	height: 3em;
	&:hover {
		fill: ${props => props.theme.techIconHoverColor};
		transition: 0.6s;
	}
`;

const TechIcon = withTooltip(StyledIcon);

const ProjectCard = props => {
	const links = props.links.map((link, i) => {
		const linkIcon = link.linkIcon ? (
			<LinkIcon icon={link.linkIcon} />
		) : null;
		const aLink = link.linkUrl ? (
			<a href={link.linkUrl}>
				{linkIcon}
				<span className="link-caption">
					{link.linkTitle}
				</span>
			</a>
		) : (// or
			<span className="link-caption">{link.linkTitle}</span>
		)
		return (
			<li className="project-link" key={i}>
				{aLink}
			</li>
		);
	});
	return (
		<StyledCard className={`project-card project-${props.title}`}>
			<a href={props.titleLinkUrl}>
				<h2 className="project-title">{props.title}</h2>
			</a>
			{props.imageUrl ? 
			(<img className="project-image" src={props.imageUrl} alt={props.title}/>) : null
			}
			<p className="project-description">{props.description}</p> 
			<ul className="project-links">
				{links}
			</ul>
			{props.devIcons.length ? 
				(
				<ul className="dev-icons-list">
					{props.devIcons.map((icon, i) => (
					<li className="dev-icon-list-item" key={i}>
						<TechIcon icon={icon} className="dev-icon" tooltip={icon}/>
					</li>
					))}
				</ul>
				) : null
			}
		</ StyledCard>
	);
}

export default ProjectCard;
