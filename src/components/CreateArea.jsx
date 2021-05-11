import React, { useState } from "react";

function CreateArea(props) {
  const [text, SaveText] = useState({
    title: "",
    content: "",
    email: ""
  });
  function handlChange(event) {
    const { name, value } = event.target;

    SaveText((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function handleClick(event) {
    props.onsave(text);
    SaveText({
      title: "",
      email: "",
      content: ""
    });

    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handlChange}
          name="title"
          value={text.title}
          placeholder="Title"
        />
        <input
          onChange={handlChange}
          name="email"
          value={text.email}
          placeholder="email"
        />
        <textarea
          onChange={handlChange}
          name="content"
          value={text.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
