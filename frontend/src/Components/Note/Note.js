import React from "react";
import "./Note.css";

export default function Note({noteId, noteTitle, noteCategory, noteMessage, allNotes, setAllNotes}) {

    function deleteNote() {
        console.log(noteId)
        console.log(allNotes)
        fetch("http://localhost:8000/notes?id="+noteId, {method:"DELETE"})
            .then(res => {
                if(res.ok) {
                    // Create new array to store all notes except deleted note
                    const newAllNotes = [];

                    // Add all notes to array except the deleted note
                    allNotes.map(note => {
                        if (note.title !== noteTitle && note.category !== noteCategory) {
                            newAllNotes.push(note);
                        }
                    })

                    // Update state variable that stores all notes to contain new array of notes
                    setAllNotes(newAllNotes);
                }
            })
            .catch(err => {
                console.error(err);
            })
    }

    return (
        <div className="note">
            <p id="note-category">{noteCategory}</p>
            <p id="note-title">{noteTitle}</p>
            <p id="note-message">{noteMessage}</p>
            <button id="del-button" onClick={deleteNote}>Delete</button>
        </div>
    )
}