import React, { Component } from "react";
import {commonTheme} from "./themes/commonTheme";
import dTheme from "./themes/darkTheme";
import lTheme from "./themes/lightTheme";
import MainContent from "./components/MainContent";
import {ThemeProvider, createGlobalStyle} from "styled-components";

const lightTheme = {...commonTheme, ...lTheme};
const darkTheme = {...commonTheme, ...dTheme};

const GlobalStyle = createGlobalStyle`	
	html {
		box-sizing: border-box;
		font-size: 10px;
		scroll-behavior: smooth;
		user-select: none;
		/* to eliminate 'flashing' on click */
    	-webkit-tap-highlight-color: transparent;
		outline: none;
	}
	*, *:before, *:after {
		box-sizing: inherit;
	}
	body {
		padding: 0;
		margin: 0;
		font-size: 1.5rem;
	}
	a {
		text-decoration: none;
		color: inherit;
		
	}
	a:hover{
		color: ${props => props.theme.cardBodyHoverColor};
	}
	.grid {
		display: grid;
	}
`;

class App extends Component {
	constructor(props){
		super(props);
		this.themes = [lightTheme, darkTheme];
		this.state = {
			toggled: false,
		}
		this.state.theme = this.themes[Number(this.state.toggled)];
		this.toggleTheme = this.toggleTheme.bind(this);
	}
	toggleTheme () {
		this.setState({
			toggled: !this.state.toggled,
			theme: this.themes[Number(!this.state.toggled)]
		});
		console.log("toggled = ", this.state.toggled);
		console.log("theme = ", this.state.theme);
	}
    render() {
        return (
			<ThemeProvider theme={this.state.theme}>
				<div className="App">
					<GlobalStyle />
					<MainContent callback={this.toggleTheme} theme={this.state.theme} {...this.props}/>
				</div>
			</ThemeProvider>
        );
    }
}

export default App;
