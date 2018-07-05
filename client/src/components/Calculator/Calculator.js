import React, { Component } from "react";
import "./Calculator.css";

import VarExp from "../VarExp";
import VarInc from "../VarInc";

class Calculator extends Component {
  state = {
    netIncome: "",
    payFrequency: "",
    monthlyHousing: "",
    monthlyInsurance: "",
    monthlyUtilities: "",
    retainedEarnings: "",
    variableIncome: [],
    variableExpenses: [],
    tempTotal: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change.
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  submitNewVarInc = value => {
    var updateVarInc = this.state.variableIncome.slice();
    updateVarInc.push(value);
    this.setState({ variableIncome: updateVarInc });
  };

  submitNewVarExp = value => {
    var updateVarExp = this.state.variableExpenses.slice();
    updateVarExp.push(value);
    this.setState({ variableExpenses: updateVarExp });
  };

  sumOfVarInc = () => {
    if (this.state.variableIncome.length === 0) {
      return 0;
    } else {
      let total = 0;
      for (let key in this.state.variableIncome) {
        // eslint-disable-next-line
        total += parseInt(this.state.variableIncome[key]);
      }
      return total;
    }
  };
  sumOfVarExp = () => {
    if (this.state.variableExpenses.length === 0) {
      return 0;
    } else {
      let total = 0;
      for (let key in this.state.variableExpenses) {
        // eslint-disable-next-line
        total += parseInt(this.state.variableExpenses[key]);
      }
      return total;
    }
  };

  deleteVarInc = () => {
    this.state.variableIncome.splice();
  };

  deleteVarExp = () => {
    this.state.variableExpenses.splice();
  };

  handleSubmit = event => {
    event.preventDefault();
    let annualIncome = this.state.netIncome * this.state.payFrequency;
    console.log(annualIncome);
    let annualExpenses =
      this.state.monthlyHousing * 12 +
      this.state.monthlyInsurance * 12 +
      this.state.monthlyUtilities * 12;
    console.log(annualExpenses);
    let retainedEarnings;

    if (this.state.tempTotal === "") {
      retainedEarnings =
        annualIncome - annualExpenses + this.sumOfVarInc() - this.sumOfVarExp();
      console.log(retainedEarnings);
      // this.state.retainedEarnings.push(retainedEarnings);
    } else {
      retainedEarnings =
        this.state.tempTotal + this.sumOfVarInc() - this.sumOfVarExp();
      console.log(retainedEarnings);
    }

    // let retainedEarnings =
    //   annualIncome - annualExpenses + this.sumOfVarInc() - this.sumOfVarExp();
    // console.log(retainedEarnings);

    this.setState({
      retainedEarnings,
      /*: retainedEarnings,*/
      netIncome: "",
      monthlyHousing: "",
      monthlyInsurance: "",
      monthlyUtilities: "",
      tempTotal: retainedEarnings
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1> Fill in the info below. </h1>
            <h2> Income </h2>
            <form>
              <label>
                Net income on latest paycheck
                <input
                  type="text"
                  name="netIncome"
                  value={this.state.netIncome}
                  onChange={this.handleInputChange}
                />
              </label>
              <br />
              <br />
              <label>
                Pay Frequency
                <input
                  type="radio"
                  name="payFrequency"
                  value={52}
                  onChange={this.handleInputChange}
                />
                Weekly
              </label>
              <label>
                <input
                  type="radio"
                  name="payFrequency"
                  value={26}
                  onChange={this.handleInputChange}
                />
                Biweekly
              </label>
              <label>
                <input
                  type="radio"
                  name="payFrequency"
                  value={24}
                  onChange={this.handleInputChange}
                />
                Semi-Monthly
              </label>
              <label>
                <input
                  type="radio"
                  name="payFrequency"
                  value={12}
                  onChange={this.handleInputChange}
                />
                Monthly
              </label>
              <h2> Expenses </h2>
              <p>
                Enter how much you pay each month for each of the following
                bills.
              </p>
              <label>
                Mortgage or Rent
                <input
                  type="text"
                  name="monthlyHousing"
                  value={this.state.monthlyHousing}
                  onChange={this.handleInputChange}
                />
              </label>
              <br />
              <br />
              <label>
                Insurance Payments
                <input
                  type="text"
                  name="monthlyInsurance"
                  value={this.state.monthlyInsurance}
                  onChange={this.handleInputChange}
                />
              </label>
              <br />
              <br />
              <label>
                Phone and Utilities
                <input
                  type="text"
                  name="monthlyUtilities"
                  value={this.state.monthlyUtilities}
                  onChange={this.handleInputChange}
                />
              </label>
              <br />
              <br />
              {/* <input type="submit" value="Submit" onChange={this.handleInputChange}/> */}

              <input
                type="button"
                placeholder="submit"
                value="Submit"
                onClick={this.handleSubmit}
              />
            </form>

            <br />

            <div id="user-total">${this.state.retainedEarnings}</div>
          </div>
          <div className="col-md-6">
            <VarInc callbackFromParent={this.submitNewVarInc} />
            <ul>
              {this.state.variableIncome.map(x => (
                <li>
                  {x}
                  <button onClick={() => this.deleteVarInc({ key: x })}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
            <VarExp callbackFromParent={this.submitNewVarExp} />
            <ul>
              {this.state.variableExpenses.map(x => (
                <li>
                  {x}
                  <button
                    onClick={() => this.deleteVarExp({ variableExpenses: x })}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
