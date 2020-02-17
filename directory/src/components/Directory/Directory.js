import React, { useEffect, useState } from "react";
import "./Directory.scss";
import { useParams } from "react-router-dom";
import { list } from "./List";
import DirectoryItem from "./DirectoryItem"

function shuffle(array) {

	let currentIndex = array.length;
	let temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

};

function Directory() {
  let { filterName } = useParams();
  const [dirList, setList] = useState(shuffle(list));

  useEffect(() => {
    if (filterName) {
      let completeList = shuffle(list)
      let filteredList = completeList.filter(user => user.type === filterName);
      setList(filteredList);
    } else {
      let completeList = shuffle(list);
      setList(completeList);
    }
  }, [filterName]);

  return (
    <div className="directory-container">
      <div className="list-container">
        {dirList.map(user => (
            <DirectoryItem user={user} />
        ))}
      </div>
    </div>
  );
}

export default Directory;
