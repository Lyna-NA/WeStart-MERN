import { getAllByPlaceholderText } from "@testing-library/react";
import React from "react";

class ExpenseForm extends React.Component {
  constructor() {
    super();
    this.state = {
      titleValue: "",
      dateValue: "",
      priceValue: 0,
      descriptionValue: "",
    };
  }

  titleOnChangeHandler = (event) => {
    this.setState({ titleValue: event.target.value });
  };

  dateOnChangeHandler = (event) => {
    this.setState({ dateValue: event.target.value });
  };

  priceOnChangeHandler = (event) => {
    this.setState({ priceValue: event.target.value });
  };

  descriptionOnChangeHandler = (event) => {
    this.setState({ descriptionValue: event.target.value });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    if(this.checkData()){
      let expense = this.getExpenseObject();
      //console.log(expense);
      this.props.onNewExpense(expense);
      this.clear();
    }
  };

  checkData = () => {
    // console.log(this.titleValue);
    // console.log(this.state.titleValue);

    if (
      this.state.titleValue != "" &&
      this.state.dateValue != "" &&
      this.state.priceValue != "" &&
      this.state.descriptionValue != ""
    )
      return true;
    alert("Please,\nEnter the Required Data!");
    return false;
  };

  getExpenseObject = () => {
    return {
      id: Date.now(),
      title: this.state.titleValue,
      date: this.state.dateValue,
      price: this.state.priceValue,
      description: this.state.descriptionValue,
    }
  };

  clear = () => {
    this.setState({
      titleValue: "",
      dateValue: "",
      priceValue: 0,
      descriptionValue: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              value={this.state.titleValue} // needed for clearing the form
              // onChange={(event) => {
              //   console.log(event.target.value);
              //   this.setState({titleValue: event.target.value});
              // }}
              onChange={this.titleOnChangeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              id="date"
              placeholder="Date"
              value={this.state.dateValue}
              onChange={this.dateOnChangeHandler}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="value">Value</label>
            <input
              type="number"
              name="value"
              id="value"
              placeholder="Value"
              value={this.state.priceValue}
              onChange={this.priceOnChangeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="value">Description</label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Description"
              value={this.state.descriptionValue}
              onChange={this.descriptionOnChangeHandler}
            />
          </div>
        </div>
        <button className="save-btn" type="submit">
          Save
        </button>
      </form>
    );
  }
}
export default ExpenseForm;
