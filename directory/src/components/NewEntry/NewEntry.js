import React, { useEffect, useState } from "react";
import "./NewEntry.scss";

function NewEntry() {

  return (
    <form>
      <label for="name">
        Name
        <input id="name" type="text" />
      </label>
      <label for="url">
        URL
        <input id="url" type="url" />
      </label>
      <label for="type">
        Type
        <select id="type">
          <option selected value="app">App</option>
          <option value="host">Host</option>
          <option value="merchant">Merchant</option>
          <option value="non-profit">Non-ptofit</option>
        </select>
      </label>
      <label for="description">
        Description
        <input id="description" type="text" />
      </label>
    </form>
  );
}

export default NewEntry;