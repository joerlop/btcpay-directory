import React, { useState } from "react";
import "./Directory.scss";

function DirectoryItem(props) {
  const [show, setShow] = useState(false);

  return (
    <div className="item">
      <div className="item-content">
        <a
          onMouseEnter={e => setShow(true)}
          onMouseLeave={e => setShow(false)}
          target="_blank"
          href={props.user.url}
        >
          {props.user.name}
        </a>
        <p className={`show-${show}`}>{props.user.description}</p>
      </div>
      <div className="separator"></div>
    </div>
  );
}

export default DirectoryItem;
