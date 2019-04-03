import React, {Component} from "react";
import ImageButton from "./ImageButton";
import Toggle from "./Toggle";
import Nav from "./Nav";
import styled from "styled-components";

let vh = window.innerHeight * 0.01;

const ToggleButton = Toggle(ImageButton);

const StyledHeader = styled.header`
	grid-area: header;
	display: grid;
	grid-template-areas: 	"title"\n
							"portrait"\n
							"subtitle"\n
							"nav";
	grid-template-rows: minmax(auto, 33vh) 1fr auto auto minmax(auto, 1fr);
	width: 100vw;
	height: ${100 * vh}px;
	justify-items: center;
    scroll-snap-align: start;

	/* this is the header background. Pseudo-selector hack allows application of filter to background image only*/
	&:after{
		z-index: -1;
		position: absolute;
		top: 0;
		content: "";
		background: url(${props => props.theme.headerBackgroundImage}), ${props => props.theme.headerBackgroundColor};
		background-size: 60px;
		filter: blur(${props => props.theme.headerBackgroundBlur});
		opacity: 0.95;
		height: 100%;
		width: 100%;
	}

	.header-title {
		margin: 0;
		padding: 10px 0;
		font-size: ${props => props.theme.headerTitleFontSize};
		font-family: ${props => props.theme.headerTitleFont};
		letter-spacing: calc((1vw + 1vh) / 2);
		color: ${props => props.theme.headerTitleColor};
		grid-area: title;
		transition: 0.7s;
		align-self: center;
		text-shadow: ${props => props.theme.textOutlineWhite}, ${props => props.theme.headerTitleShadow}, ${props => props.theme.textOutlineRedGreen};
	}

	.header-title:hover{
		color: ${props => props.theme.headerTitleHoverColor};
		transition: 0.3s;
	}

	.header-subtitle {
		margin: 0;
		padding: 20px;
		grid-area: subtitle;
		font-family: ${props => props.theme.headerSubtitleFont};
		font-size: ${props => props.theme.headerSubtitleFontSize};
		color: ${props => props.theme.headerSubtitleColor};
		text-align: center;
		text-shadow: ${props => props.theme.textOutlineRedGreen}, ${props => props.theme.headerSubtitleShadow}, ${props => props.theme.textOutlineBlack};
	}

	.header-subtitle:hover {
		color: ${props => props.theme.headerSubtitleHoverColor};
		text-shadow: ${props => props.theme.textOutlineRed}, ${props => props.theme.textOutlinePink}, ${props => props.theme.headerTitleShadow};
	}
	.nav {
		grid-area: nav;
	}
	@media screen and (max-width: 400px) {
        .header-title {
            font-size: calc((7vw + 7vh) / 2);
            }
	}
`;

class Header extends Component {
	constructor (props) {
		super(props);
		this.state = {
            displayNav: true,
		}
		this.handleResize = this.handleResize.bind(this);
	}
	handleResize () {
		const height = window.innerHeight;
		this.setState({
			vh: height * 0.01,
			}, 
		);
	}
	componentDidMount () {
		window.addEventListener("resize", this.handleResize);
	}
	componentWillUnmount () {
		window.removeEventListener("resize", this.handleResize);
		}
		
	render () {
		const injectedStyle = {
			height: `${this.state.vh * 100}px`
		}
		return (
			<StyledHeader className="grid grid-header" id="header" style={injectedStyle} {...this.props}>
				<h1 className="header-title">
						Dennis Hodges
				</h1>
				<h2 className="header-subtitle">
					Full-Stack Javascript Developer
				</h2>
				<ToggleButton {...this.props}/>
				<Nav pose={this.state.displayNav ? "visible" : "hidden"} {...this.props}/>
			</ StyledHeader>
		);
	}
}

export default Header;