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
    tempTotals: []
  };

  if (tempTotals = 0) {
    let retainedEarnings =
      annualIncome - annualExpenses + this.sumOfVarInc() - this.sumOfVarExp();
      console.log(retainedEarnings);
  }
  else { 
    let retainedEarnings = tempTotals[ tempTotals.length - 1 ] + this.sumOfVarInc() - this.sumOfVarExp();
    console.log(retainedEarnings)
  }
};
