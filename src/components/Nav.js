import React, { Component } from "react";
import styled from "styled-components";
import posed from "react-pose";
import Burger from "./Burger";

//using styled components to add scoped css to component
const StyledNav = styled.nav`
    width: 100vw;
    font-family: ${props => props.theme.navFont};
	font-size: ${props => props.theme.navFontSize};
	display: block;
	top: 0px;
	color: ${props => props.theme.navTextColor};
    align-content: end;
    text-align: center;
    text-shadow: ${props => props.theme.textOutlineBlack};;

    .nav-links {
        padding: 0;
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        grid-area: nav;
    }
    .nav-links li {
        padding: 10px;
    }
    .nav-links a {
        color: ${props => props.theme.navTextColor};
        transition: 0.7s;
    }
    .nav-links a:hover {
        color: ${props => props.theme.navHoverColor};
        transition: 0.25s;
    }
    .red-outline:hover {
        text-shadow: ${props => props.theme.textOutlineRed};
    }
    .green-outline:hover {
        text-shadow: ${props => props.theme.textOutlineGreen};
    }
    .blue-outline:hover {
        text-shadow: ${props => props.theme.textOutlineBlue};
    }
    .burger-menu ul{
        list-style: none;
        text-shadow: none;
    }
    .burger-links{
        padding: 0;
    }
    .burger-links li{
        color: ${props => props.theme.navTextColor};
        padding-bottom: 2vh;
    }
`;

// a Pose div component is created to hide/show the nav menu
const PosedMenu = posed.div({
    visible: {
        opacity: 1,
        height: "initial",
    },
    hidden: {
        opacity: 0,
        height: 0,

    },
});


class Nav extends Component {
    constructor(props) {
        super(props);
        const screenWidth = window.innerWidth;
        this.state = {
            displayMenu: screenWidth >= 420,
            displayBurger: screenWidth < 420,
            openBurger: false,
        }
        this.handleResize = this.handleResize.bind(this);
        this.toggleBurgerMenu = this.toggleBurgerMenu.bind(this);
        this.closeBurger = this.closeBurger.bind(this);
    }
    toggleBurgerMenu(event) {
        this.setState({
            openBurger: !this.state.openBurger,
            displayMenu: !this.state.displayMenu,
        });
    }
    closeBurger(event) {
        this.setState({
            openBurger: !this.state.openBurger,
        })
    }
    handleResize() {
        const screenWidth = window.innerWidth;
        this.setState({
            displayMenu: screenWidth >= 420,
            displayBurger: screenWidth < 420,
            openBurger: false,
        });
    }
    componentDidMount() {
        window.addEventListener("resize", this.handleResize)
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }
    render() {
        return (
            <StyledNav className="nav">
                {this.state.displayBurger ?
                    <Burger pose={this.state.openBurger ? "open" : "closed"} open={this.state.openBurger} callback={this.toggleBurgerMenu}>
                        <div className="burger-menu">
                            <ul className="burger-links">
                                <li><a href="#about" onClick={this.closeBurger}>About</a></li>

                                <li><a href="#projects" onClick={this.closeBurger}>Projects</a></li>

                                <li><a href="#contact" onClick={this.closeBurger}>Contact</a></li>
                            </ul>
                        </ div>
                    </ Burger> :
                    <PosedMenu className="nav-menu" pose={this.state.displayMenu ? "visible" : "hidden"}>
                        <ul className="nav-links">
                            <li><a href="#about" className="red-outline">About</a></li>
                            <li>|</li>
                            <li><a href="#projects" className="green-outline">Projects</a></li>
                            <li>|</li>
                            <li><a href="#contact" className="blue-outline">Contact</a></li>
                        </ul>
                    </ PosedMenu>
                }
            </StyledNav>
        );
    }
}
export default Nav;