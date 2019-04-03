import React from "react";
import ProjectList from "./ProjectList.js";
import ContentSection from "./ContentSection";
import styled from "styled-components";
import DevIcon from "devicon-react-svg";
import Header from "./Header";
import Footer from "./Footer";

const Main = styled.main`
	height: 100%;
	width: 100%;
	/* top: 0;
	left: 0; */
	display: grid;
	grid-area: main;
	grid-template-rows: repeat(5, minmax(100vh, 100vh));
	grid-template-areas:	"header"\n
	 						"about"\n
							"projects"\n
							"contact"\n
							"footer";
	scroll-snap-type: y mandatory;
	box-shadow: 0 0 33px rgba(3, 9, 27, 0.75) inset;
	z-index: 99;

	.section-header {
		grid-area: header;
		scroll-snap-align: start;
	}
	.section-about {
		grid-area: about;
		scroll-snap-align: start;
	}
	.section-projects {
		grid-area: projects;
		scroll-snap-align: start;
	}
	.section-contact {
		grid-area: contact;
		scroll-snap-align: start;
	}
	.section-footer {
		grid-area: footer;
		scroll-snap-align: start;
		position: sticky;
		top: 0;
		height: 100vh;
	}
	.section-contact ul {
		list-style: none;
	}
	ul.contact-links {
		padding: 2em;
	}
	.contact-email, .contact-links a {
		color: ${props => props.theme.mainTextColor};
		transition: 0.7s;
	}

	.contact-email:hover, .contact-links a:hover {
		color: ${props => props.theme.headerTitleHoverColor};
		transition: 0.25s;
	}
	.section-footer > div {
		background-color: transparent;
		background-image: none;
	}
	.about-text-container {
		padding: 3em;
	}

	@media (max-width: 620px) {
		ul.contact-links {
			text-align: center;
		}
	}
`;

const LinkIcon = styled(DevIcon)`
	fill: ${props => props.theme.sectionContentColor};
	width: 5em;
	height: auto;
	text-align: end;
	align-content: flex-start;
	&:hover{
		fill: ${props => props.theme.headerTitleHoverColor};
	}
`;

const MainContent = props => {
	return (
		<Main className="grid grid-main">

			<Header className="section-header" {...props} />

			<ContentSection sectionName="about" title="About">
				<div className="about-text-container">
					<p className="about-text">
					My name is Dennis, and I am a JavaScript developer.
					</p>
					<p className="about-text">
					I love solving challenging problems and learning new skills on the fly, in the service of a new idea or creation. I like to make interesting things with other creative people who care about the their craft, learning what I can from them. I am (mostly) not 
					ashamed to admit that I love JavaScript, but I also enjoy the occassional foray into Python. I brew a mean Kölsch.
					</p>
				</div>
			</ContentSection>

			<ContentSection sectionName="projects" title="Projects">
				<ProjectList {...props}/>
			</ContentSection>

			<ContentSection sectionName="contact" title="Contact">
				<ul className="contact-links">
					<li>
						<a className="contact-email" href="mailto:dennis.m.hodges@gmail.com">
							<LinkIcon icon="email" viewBox="0 0 45 25"/>
						</a>
					</li>
					<li>
						<a className="contact-github" href="https://github.com/fermentationist">
							<LinkIcon icon="github" viewBox="4 0 32 32" />
						</a>
					</li>
					<li>
						<a className="contact-linkedin" href="https://linkedin.com/in/dennis-hodges/">
							<LinkIcon icon="linkedin" />
						</a>
					</li>
					<li>
						<a className="contact-resume" href="https://drive.google.com/file/d/1RUPs2IvtJDUAh0OzpvUp25xQ8WelfHh6/view?usp=sharing">RESUMÉ</a>
					</li>
				</ul>
			</ContentSection>

			<Footer className="section-footer" {...props}/>

		</Main>
		);
}

export default MainContent;