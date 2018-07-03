import React, { Component } from "react";

class VarExp extends Component {
  state = {
    varExp: "",

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

  submitNewVarExpToCalc = () => {
    let value = this.state.varExp;

    this.props.callbackFromParent(value)
    this.setState({varExp: ""})
}

  render() {
  return (
    <div>
      <h2>Input Variable Expenses Below</h2>
      <p>i.e., Groceries, Gas, Dry Cleaning, Emergency Expenses, etc.</p>
      <input type="name" name="varExp" value={this.state.varExp} onChange={this.handleInputChange}/>
      <br />
      <br />
      <input
        type="button"
        placeholder="submit"
        value="Submit"
        onClick={this.submitNewVarExpToCalc}
      />
    </div>
  );
};
};

export default VarExp;