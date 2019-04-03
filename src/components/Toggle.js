import React, {Component} from "react";

const  ToggleButton = (ButtonComponent) => {
	return class Toggle extends Component {
		constructor (props) {
			super(props);
			this.state = {
				toggled: true,
			}
			this.callback = props.callback;
			this.clickHandler = this.clickHandler.bind(this);
		}
		clickHandler (event) {
			this.setState({
				toggled: !this.state.toggled
			});
			this.callback(event);
		}
		render () {			
			return (
				<React.Fragment>
					<ButtonComponent onClick={this.clickHandler} {...this.props}/>
				</React.Fragment>
				);
		}
	}
}

export default ToggleButton;