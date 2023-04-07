import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

const App = () => {
    const [notes, setNotes] = useState([]);

    function addItem(title, content) {
        setNotes([...notes, {title : title, content : content}]);
    }

    function deleteItem(id) {
        setNotes(notes.filter((note, index) => {
            return index !== id;
        }));
    }

    return (
        <div>
            <Header />
            <CreateArea addItem={addItem}/>
            {notes.map((note, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={note.title}
                        content={note.content}
                        onDelete={deleteItem}
                    />
                );
            })}
            <Footer />
        </div>
    );
}

export default App;