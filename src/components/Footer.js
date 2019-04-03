import React from "react";
import DevIcon from "devicon-react-svg";
import styled from "styled-components";

const StyledFooter = styled.footer`
	grid-area: footer;
	height: 100vh;
	position: sticky;
	top: 0;
	text-align: center;
	font-family: ${props => props.theme.footerFont};
	color: ${props => props.theme.footerColor};
	font-size: ${props => props.theme.footerFontSize};
	background-color: ${props => props.theme.footerBackgroundColor}; 
	background-image: ${props => props.theme.footerBackgroundImage};
	scroll-snap-align: start;
	span.react-text {
		font-family: arial;
		display: inline-block;
	}
	span.made-with {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
`;

const LinkIcon = styled(DevIcon)`
	fill: ${props => props.theme.footerColor};
	width: 2em;
	height: auto;
`;

const Footer = () => {
	return (
		<StyledFooter className="grid-footer">
			<span className="made-with"><span>made with ❤️ and <span className="react-text">React</span></span><LinkIcon icon="react" /></span>
			<p>©2019 Dennis Hodges</p>
			<p><a href="#top">⬆︎TOP⬆︎</a></p>
		</StyledFooter>
	);
}

export default Footer;