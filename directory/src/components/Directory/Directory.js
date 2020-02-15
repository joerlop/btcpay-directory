import React, { useEffect, useState } from "react";
import "./Directory.scss";
import { useParams } from "react-router-dom";
import { list } from "./List";

function Directory() {
  let { filterName } = useParams();
  const [dirList, setList] = useState(list);

  useEffect(() => {
    if (filterName) {
        console.log(filterName)
      let filteredList = list.filter(user => user.type === filterName);
      setList(filteredList);
    } else {
      setList(list);
    }
  }, [filterName]);

  return (
    <div className="directory-container">
      <div className="list-container">
        {dirList.map(user => (
          <div className="item">
            <a href={user.url}>{user.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Directory;
