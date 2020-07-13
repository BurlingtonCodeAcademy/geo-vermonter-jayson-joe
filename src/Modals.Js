import React from "react";

class Modals extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			modalDisplayed: false,
		};
	}
	/* Toggles Modal*/

	toggleModal = (evt) => {
		evt.preventDefault();

		this.setState((prevState) => {
			return { modalDisplayed: !prevState.modalDisplayed };
		});
	};
	/* Display's Modal with County Names */
	render() {
		return (
			<div>
				{this.props.modalDisplay && (
					<div id="modal" className="modal">
						<h2> Do You Know Which County You Are In?</h2>
						<button
							id="cancelButton"
							className="button"
							onClick={this.props.closeModal}
							closeModal={this.closeModal}
							modalDisplay={this.props.modalDisplay}
						>
							Cancel
						</button>
						<form>
							<div>
								<select
									class="dropdown"
									name="counties"
									value={this.props.countyGuess}
									onChange={this.props.handleChange}
								>
									<button value="Addison County">Addison</button>
									<button value="Bennington County">Bennington</button>
									<button value="Caledonia County">Caledonia</button>
									<button value="Chittenden County">Chittenden</button>
									<button value="Essex County">Essex</button>
									<button value="Franklin County">Franklin</button>
									<button value="Grand Isle County">Grand Isle</button>
									<button value="Lamoille County">Lamoille</button>
									<button value="Orange County">Orange</button>
									<button value="Orleans County">Orleans</button>
									<button value="Rutland County">Rutland</button>
									<button value="Washington County">Washington</button>
									<button value="Windham County">Windham</button>
									<button value="Windsor County">Windsor</button>
								</select>
							</div>
						</form>
					</div>
				)}
			</div>
		);
	}
}

export default Modals;
