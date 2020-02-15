import React from "react";
import "./Directory.scss";
import downArrow from "../../images/down-arrow2.svg";

function DirectoryItem(props) {
  return (
    <div className="item">
      <a target="_blank" href={props.user.url}>{props.user.name}</a>
      <p>{props.user.description}</p>
    </div>
  );
}

export default DirectoryItem;
