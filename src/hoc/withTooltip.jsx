import React, {Component} from "react";
import styled from "styled-components";

const withTooltip = (TargetComponent, {toolTip=null, backgroundColor="gray", fontColor="white", fontSize="0.75em", font="inherit"} = {}) => {
    return class WithToolTip extends Component {
        constructor (props){
            super(props);
            this.StyledTargetComponent = styled(TargetComponent)`
                pointer-events: auto; /* reset pointer-effects back to default */
            `;
            this.StyledDiv = styled.div`
                position: relative;
                pointer-events: none; /* deactivate pointer-effects so containing div doesn't activate tooltip*/
                padding-top: 0.35em;
                margin-top: 5vh;
                &:before, &:after {
                    opacity: 0;
                    visibility: hidden;
                    filter: blur(1);
                    margin: 0;
                    padding: 0;
                }
                &:before {
                    position: absolute;
                    top: -1.85em;
                    left: 35%;
                    margin-right: 35%;
                    padding: 0.5em; 
                    width: auto;
                    border-radius: 7%;
                    background-color: ${backgroundColor};
                    color: ${fontColor};
                    content: attr(data-icon);
                    text-align: center;
                    font-family: ${font};
                    font-size: ${fontSize};
                    line-height: 1em;
                    z-index: 99;
                }
                /* triangle border hack to make "speech bubble"  */
                &:after {
                    position: absolute;
                    top: 0em;
                    left: 35%;
                    width: 0;
                    border-top: 10px solid ${backgroundColor};
                    border-right: 10px solid transparent;
                    border-left: 10px solid transparent;
                    content: "";
                    font-size: 0;
                    line-height: 0;
                    margin-bottom: 0.5em;
                    z-index: 98;
                }
                @media (hover: hover){
                    &:hover:before, &:hover:after {
                        opacity: 1;
                        visibility: visible;
                        filter: blur(0);
                        transition: 666ms;
                    }
                }
            `;
        }
        render (){
            return (<this.StyledDiv data-icon={this.props.tooltip ? this.props.tooltip : toolTip ? toolTip : ""} ><this.StyledTargetComponent {...this.props}/></this.StyledDiv>);
        }
    }
}

export default withTooltip;