import React from "react";
import ProjectList from "./ProjectList.js";
import styled from "styled-components";

const Main = styled.main`
	grid-area: main;
	grid-template-rows: repeat(3, minmax(100vh, 100vh));
	grid-template-areas: 	"about"\n
							"projects"\n
							"contact";
	.section-about {
		position: sticky;
		top: 50vh;
		grid-area: about;
	}
	.section-projects {
		position: sticky;
		top: 0;
		grid-area: projects;
		overflow-x: hidden;
	}
	.section-contact {
		position: sticky;
		top: 0;
		grid-area: contact;
	}

	.grid-section {
		grid-template-columns: 1fr 2fr;
		top:0;
		width: 100%;
	}

	.title-section {
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		position: sticky;
		top: 0;
		background-color: ${props => props.theme.sectionTitleBackgroundColor};
		background-image: url(${props => props.theme.sectionTitleBackgroundImage});
		justify-content: flex-start;
		align-items: center;
		overflow-y: hidden;
		filter: invert(${props => props.theme.percentInvert});
	}
	
	.section-title {
		font-family: ${props => props.theme.sectionTitleFont};
		color: ${props => props.theme.sectionTitleColor};
		padding-top: 33px;
		margin: 0;
	}
	.section-content {
		width: 66vw;
		height: 100%;
		padding: 33px;
		background-color: ${props => props.theme.sectionBackgroundColor};
		background-image: url(${props => props.theme.sectionBackgroundImage});
		color: ${props => props.theme.sectionContentColor};
		font-family: ${props => props.theme.sectionContentFont};
		font-size: ${props => props.theme.sectionContentFontSize};
		letter-spacing: ${props => props.theme.sectionContentLetterSpacing};
		line-height: ${props => props.theme.sectionContentLineHeight};
		overflow-y: hidden;
		filter: invert(${props => props.theme.percentInvert});
	}
	.section-contact ul {
		list-style: none;
	}

	.contact-email, .contact-links a {
		color: ${props => props.theme.mainTextColor};
		transition: 0.7s;
	}

	.contact-email:hover, .contact-links a:hover {
		color: ${props => props.theme.headerTitleHoverColor};
		transition: 0.25s;
	}
`;

const MainContent = (props) => {
	return (
		<React.Fragment>
			<Main className={`grid grid-content`}>
				<section className={`grid grid-section section-about z1`}>
					<div className={`title-section`}>
						<h2 className={`section-title`}>About</h2>
					</div>
					<div className={`section-content z0`} id="about">
						<p className={`about-text`}>
						I love solving challenging problems and learning new skills on the fly, in the service of a new idea or creation. I want to make interesting things with other creative people who care about the quality of their work. I also brew a mean Kölsch.
						</p>
					</div>
				</section>

				<section className={`grid grid-section section-projects z1`}>
					<div className={`title-section`}>
						<h2 className={`section-title`}>Projects</h2>
					</div>
					<div className={`section-content z0`} id="projects">
						<ProjectList />
					</div>
				</section>

				<section className={`grid grid-section section-contact z1`}>
					<div className={`title-section`}>
						<h2 className={`section-title`}>Contact</h2>
					</div>
					<div className={`section-content z0`} id="contact">
						<h3>Dennis Hodges</h3>
						<p> 
							<a className={`contact-email`} href="mailto:dennis.m.hodges@gmail.com">dennis.m.hodges@gmail.com</a>
						</p>
						<ul className={`contact-links`}>
							<li>
								<a className={`contact-github`} href="#">github link</a>
							</li>
							<li>
								<a className={`contact-linkedin`} href="#">linkedin link</a>
							</li>
							<li>
								<a className={`contact-resume`} href="#">resume link</a>
							</li>
						</ul>
					</div>
				</section>

			</Main>
		</React.Fragment>
		)
}

export default MainContent;