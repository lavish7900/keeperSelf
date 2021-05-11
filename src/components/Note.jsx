import React from "react";

function Note(props) {
  function handledelete() {
    props.delete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.email}</p>
      <p>{props.content}</p>

      <button onClick={handledelete}>DELETE</button>
    </div>
  );
}

export default Note;
