import React, { Component } from "react";

class VarInc extends Component {
  state = {
    varInc: ""
    }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change.
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  submitNewVarIncToCalc = () => {
    let value = this.state.varInc;

    this.props.callbackFromParent(value)
    this.setState({varInc: ""})
    
}

  render() {
  return (
    <div>
      <h2>Input Variable Income Below</h2>
      <p>i.e., Commission, Tax Refunds, Side-Gig Check, etc.</p>
      <input type="name" name="varInc" value={this.state.varInc} onChange={this.handleInputChange}/>
      <br />
      <br />
      <input
        type="button"
        placeholder="submit"
        value="Submit"
        onClick={this.submitNewVarIncToCalc}
      />
    </div>
  );
};
};
export default VarInc;
