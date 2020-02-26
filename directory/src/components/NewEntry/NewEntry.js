import React, { useState } from "react";
import "./NewEntry.scss";

function NewEntry() {
  return (
    <div className="newentry-container">
      <h2>Organization Details</h2>
      <div className="form-container">
        <form>
          <label for="name">
            Name
            <input id="name" type="text" placeholder="Your organization's name" />
          </label>
          <label for="url">
            URL
            <input id="url" type="url" placeholder="URL of your organization" />
          </label>
          <label for="type">
            Type
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
            Description
            <textarea className="description" id="description" />
          </label>
          <button>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewEntry;
