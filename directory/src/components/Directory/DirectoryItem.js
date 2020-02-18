import React from "react";
import "./Directory.scss";

function DirectoryItem(props) {

  return (
    <div className="item">
      <div className="item-content">
        {/* <div className="category-image-container">
          <a className="category-image-a" target="_blank" href={props.user.url}>
            <img className="category-image" src={nonprofit}/>
          </a>
        </div> */}
        <a target="_blank" href={props.user.url}>
          {props.user.name}
        </a>
        <p>{props.user.description}</p>
      </div>
      <div className="separator" />
    </div>
  );
}

export default DirectoryItem;
