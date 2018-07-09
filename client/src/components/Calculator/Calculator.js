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
        total += parseInt(this.state.variableExpenses[key]);
      }
      return total;
    }
  };

  deleteVarInc = (index) => {
    console.log(index)
    let test = [].concat(this.state.variableIncome.slice(0,index)).concat(this.state.variableIncome.slice(index+1))
    console.log(test)
    this.setState({variableIncome: test})
    //this.state.variableIncome
  };

  //make this function like the one above
  deleteVarExp = (index) => {
    console.log(index)
    let test = [].concat(this.state.variableExpenses.slice(0,index)).concat(this.state.variableExpenses.slice(index+1))
    console.log(test)
    this.setState({variableExpenses: test})
  }

  // saveTotal = () => {
  //   app.post()
    //check out devconnector tutorial on how to post comments, should be along the same lines as how to post the total to the savedTotals array
  // }

  handleSubmit = event => {
    event.preventDefault();
    let annualIncome = this.state.netIncome * this.state.payFrequency;
    console.log(annualIncome);
    let annualExpenses =
      this.state.monthlyHousing * 12 +
      this.state.monthlyInsurance * 12 +
      this.state.monthlyUtilities * 12;
    console.log(annualExpenses);
    let retainedEarnings
  

    if (this.state.tempTotal === "") {
       retainedEarnings =
        annualIncome - annualExpenses + this.sumOfVarInc() - this.sumOfVarExp();
      console.log(retainedEarnings);
      // this.state.retainedEarnings.push(retainedEarnings);
    } else {
       retainedEarnings =
        this.state.tempTotal +
        this.sumOfVarInc() -
        this.sumOfVarExp();
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
              <br />
              <br />
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

             
            </form>

            <br />

            <div id="user-total">
            Total
            <br />
            ${this.state.retainedEarnings}</div>
          </div>
          <div className="col-md-6">
            <VarInc callbackFromParent={this.submitNewVarInc} />
            <br />
            <ul>
              {this.state.variableIncome.map( (x,index) =>
                <li>
                  {x}
                  
                  <button onClick={() => this.deleteVarInc(index)}>x</button>
                </li>
              )}
            </ul>
            <VarExp callbackFromParent={this.submitNewVarExp} />
            <br />
            <ul>
              {this.state.variableExpenses.map( (x, index) => 
                <li>
                  {x}
                  <button onClick={() => this.deleteVarExp(index)}>x</button>
                </li>
              )}
            </ul>
            <br />
            <input
                type="button"
                placeholder="submit"
                value="TOTAL"
                onClick={this.handleSubmit}
              />
            <br />
            <br />
            <button onClick={() => this.saveTotal(this.state.retainedEarnings)}>Save</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
