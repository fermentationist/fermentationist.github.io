import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
	display: grid;
	grid-template-columns: 1fr 2fr;
	top:0;
	width: 100%;
	position: sticky;
	scroll-snap-align: start;
	filter: invert(${props => props.theme.percentInvert});
	
	@media (max-width: 620px){
		grid-template-columns: 1fr;
		div.title-section {
			display: none;
		}
		div.section-content {
			width: 100%;
		}
	}

	.title-section {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
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
		font-size: ${props => props.theme.sectionTitleFontSize};
		padding: 3em;
		margin: 0;
	}
	.section-content {
		width: 100%;
		height: auto;
		background-color: ${props => props.theme.sectionBackgroundColor};
		background-image: url(${props => props.theme.sectionBackgroundImage});
		color: ${props => props.theme.sectionContentColor};
		font-family: ${props => props.theme.sectionContentFont};
		font-size: ${props => props.theme.sectionContentFontSize};
		letter-spacing: ${props => props.theme.sectionContentLetterSpacing};
		line-height: ${props => props.theme.sectionContentLineHeight};
		/* filter: invert(${props => props.theme.percentInvert}); */
		overflow-y: scroll;
	}
`;

const ContentSection = (props) => {
	return (
		<StyledSection className={`grid grid-section section-${props.sectionName}`} id={`${props.sectionName}`}>
			<div className="title-section">
				<h2 className="section-title">{props.title}</h2>
			</div>
			<div className={`section-content ${props.sectionName}-section-content`}>
				{props.children}
			</div>
		</StyledSection>
	);
}

export default ContentSection;