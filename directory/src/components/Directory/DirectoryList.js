import React from "react";
import "./Directory.scss";

function DirectoryList(props) {
  return (
    <div className="list-container">
      {props.list.map(user => (
        <div>
          <a href={user.url}>{user.name}</a>
        </div>
      ))}
    </div>
  );
}

export default DirectoryList;
