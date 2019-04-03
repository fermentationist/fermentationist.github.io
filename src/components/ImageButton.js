import React, {Component} from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    background-image: url(${props => props.theme.buttonImageA});
    height: ${props => props.theme.headerImageHeight};
	width: ${props => props.theme.headerImageWidth};
	border-radius: 33%;
	cursor: pointer;
	margin: 10px 0;
    align-self: center;
    outline: none;
    grid-area: portrait;
	z-index: 2;
	transition: 0.3s;
    /* box-shadow: ${props => props.theme.redShadow2NW}, ${props => props.theme.greenShadow2NE};
  	filter: saturate(95%); */
  	background-size: contain;
    background-repeat: no-repeat;
    user-select: none;
    -webkit-tap-highlight-color: transparent;

    @media (hover: hover){
        /*ampersand is sass selector for current element, made available by styled-components*/
        box-shadow: ${props => props.theme.redShadow2NW}, ${props => props.theme.greenShadow2NE};
  	    filter: saturate(95%);
         &:hover {
            box-shadow: ${props => props.theme.redShadow1NW}, ${props => props.theme.greenShadow1NE};
            background-image: url(${props => props.theme.buttonImageB});
            background-size: contain;
            filter: saturate(105%);
            transform: scale(0.97);
            transition: 0.5s;
        } 
    }

`;

export default class ImageButton extends Component {
    constructor (props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler (event) {
        console.log("ImageButton.clickHandler called.")
        console.log(this.props)
        return this.props.onClick(event);
            
    }
    render() {
        return (
        <React.Fragment>
            <StyledButton onClick={this.clickHandler}>{this.props.children}
            </StyledButton>
        </React.Fragment>
        );
    }
}
