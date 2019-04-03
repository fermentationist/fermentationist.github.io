import React, { Component } from "react";
import Toggle from "./Toggle";
import styled from "styled-components";
import posed from "react-pose";

// used styled components to create a component with scoped css
const StyledBurger = styled.button`
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    
    .burger-bar {
        height: 4px;
        width: 28px;
        background-color: ${props => props.theme.navTextColor};
        transition: 0.2s ease-in-out;
        margin: 4px 5px 0 5px;
        padding: 0;
        border-radius: 3px;
    }

    div.burger-bar1.toggled{
        opacity: 0.75;
        transform: translate(0, 8px) rotate(225deg);
    }

    div.burger-bar2.toggled{
        transform: scale(0.25);
        opacity: 0;
        background-color: red;
    }

    div.burger-bar3.toggled{
        opacity: 0.75;
        transform: translate(0, -8px) rotate(-225deg);
    }
`;

// used Pose, Popmotion library, to apply animation effects to styled component
const PosedBurger = posed(StyledBurger)({
    open: {
        display: "inline",
        // x: "-30vw",
        transition: { duration: 500 },
    },
    closed: {
        x: "0",
        transition: { duration: 500 },
    },
});

// used Pose to create a div container to control hiding/showing of burger menu
const PosedDiv = posed.div({
    open: {
        display: "block",
        opacity: 1,
        transition: { duration: 666 },
    },
    closed: {
        opacity: 0,
        transition: { duration: 666 },
    },
});

// make burger component a toggle switch that can be passed a callback 
const BurgerToggle = Toggle(PosedBurger);

class BurgerButton extends Component {
    constructor(props) {
        super(props);
        this.callback = this.props.callback ? this.props.callback.bind(this) : null;
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(event) {
        this.setState({
            toggled: !this.props.open
        },
            () => this.callback ? this.callback(event) : event
        );
    }
    render() {
        return (
            <React.Fragment>
                <BurgerToggle className="burger burger-button" onClick={this.clickHandler} callback={this.props.callback} pose={this.props.open ? "open" : "closed"}>
                    <div className={`burger burger-bar burger-bar1 ${this.props.open ? "toggled" : ""}`}></div>
                    <div className={`burger burger-bar burger-bar2 ${this.props.open ? "toggled" : ""}`}></div>
                    <div className={`burger burger-bar burger-bar3 ${this.props.open ? "toggled" : ""}`}></div>
                </ BurgerToggle>
                <PosedDiv className="child-div" pose={this.props.pose}>
                    {this.props.children}
                </PosedDiv>
            </ React.Fragment>
        );
    }
}

export default BurgerButton;