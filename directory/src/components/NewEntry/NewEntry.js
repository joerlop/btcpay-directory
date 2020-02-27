import React, { useState } from "react";
import "./NewEntry.scss";

class NewEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      url: "",
      description: "",
      errName: false,
      errUrl: false,
      errDescription: false,
      error: false,
      success: false
    };
  }

  handleChange = e => {
    e.preventDefault();
    const capitalizedName =
      e.target.name.charAt(0).toUpperCase() + e.target.name.substring(1);

    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
      error: false,
      [`err${capitalizedName}`]: false
    });
  };

  evaluateInputs = () => {
    const result = {
      name: this.state.name.trim() === "",
      url: this.state.url.trim() === "",
      description: this.state.description.trim() === ""
    };
    return result;
  };

  handleSubmit = e => {
    e.preventDefault();
    const submitResult = this.evaluateInputs();
    if (submitResult.name || submitResult.url || submitResult.description) {
      this.setState({
        ...this.state,
        error: true,
        success:false,
        errName: submitResult.name,
        errUrl: submitResult.url,
        errDescription: submitResult.description
      });
    } else {
      this.setState({
        ...this.state,
        error: false,
        errName: false,
        errUrl: false,
        errDescription: false,
        success: true
      });
    }
  };

  render() {
    return (
      <div className="newentry-container">
        <h2>Organization Details</h2>
        <div className="form-container">
          <form onSubmit={e => this.handleSubmit(e)}>
            <label htmlFor="name">
              Name *
              <input
                value={this.state.name}
                onChange={e => this.handleChange(e)}
                className={`input-error-${this.state.errName}`}
                id="name"
                name="name"
                type="text"
                placeholder="Your organization's name"
              />
            </label>
            <label htmlFor="url">
              URL *
              <input
                value={this.state.url}
                onChange={e => this.handleChange(e)}
                className={`input-error-${this.state.errUrl}`}
                id="url"
                name="url"
                type="url"
                placeholder="URL of your organization"
              />
            </label>
            <label htmlFor="type">
              Type *
              <select id="type">
                <option defaultValue>App</option>
                <option>Host</option>
                <option>Merchant</option>
                <option>Non-ptofit</option>
              </select>
            </label>
            <label htmlFor="description">
              Description *
              <textarea
                value={this.state.description}
                onChange={e => this.handleChange(e)}
                className={`description input-error-${this.state.errDescription}`}
                id="description"
                name="description"
                maxLength="250"
              />
            </label>
            <button onClick={e => this.handleSubmit(e)}>Submit</button>
            <div className="submission-result">
              <p className={`error error-${this.state.error}`}>
                Please fill all the required fields.
              </p>
              <p className={`success success-${this.state.success}`}>
                Success! Your information has been sent.
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewEntry;
