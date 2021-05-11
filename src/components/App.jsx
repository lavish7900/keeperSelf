import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function handleSave(text) {
    setNotes((prevValue) => {
      return [...prevValue, text];
    });
  }

  function ondelete(id) {
    setNotes((prevValue) => {
      return prevValue.filter((itemNote, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onsave={handleSave} />
      {notes.map((itemNote, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={itemNote.title}
            content={itemNote.content}
            email={itemNote.email}
            delete={ondelete}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
