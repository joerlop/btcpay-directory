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
      errDesc: false,
      error: false,
      success: false
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.name.trim() === "") {
      this.setState({
        ...this.state,
        errName: true,
        error: true,
        success: false
      })
    }
    if (this.state.url.trim() === "") {
      this.setState({
        ...this.state,
        errUrl: true,
        error: true,
        success: false
      })
    }
    if (this.state.description.trim() === "") {
      this.setState({
        ...this.state,
        errDesc: true,
        error: true,
        success: false
      })
    }
    if (this.state.name.trim() !== "" & this.state.url.trim() !== "" & this.state.description.trim() !== "") {
      this.setState({
        ...this.state,
        error: false,
        errName: false,
        errUrl: false,
        errDesc: false,
        success: true
      })
    }
  };

  render() {
    return (
      <div className="newentry-container">
        <h2>Organization Details</h2>
        <div className="form-container">
          <form onSubmit={e => this.handleSubmit(e)}>
            <label for="name">
              Name *
              <input
                value={this.state.name}
                onChange={e => this.handleChange(e)}
                id="name"
                name="name"
                type="text"
                placeholder="Your organization's name"
              />
            </label>
            <label for="url">
              URL *
              <input
                value={this.state.url}
                onChange={e => this.handleChange(e)}
                id="url"
                name="url"
                type="url"
                placeholder="URL of your organization"
              />
            </label>
            <label for="type">
              Type *
              <select id="type">
                <option selected value="app">
                  App
                </option>
                <option value="host">Host</option>
                <option value="merchant">Merchant</option>
                <option value="non-profit">Non-ptofit</option>
              </select>
            </label>
            <label for="description">
              Description *
              <textarea
                value={this.state.description}
                onChange={e => this.handleChange(e)}
                className="description"
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
