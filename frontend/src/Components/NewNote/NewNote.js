import React from "react";
import "./NewNote.css";

export default function New({allNotes, setAllNotes}) {

    function createNote() {

        // Retrieve user text from DOM and save it into variables
        const noteTitle = document.getElementById("newTitle").value;
        const noteCategory = document.getElementById("newCategory").value;
        const noteText = document.getElementById("newText").value;

        // Creating an object out of the variables
        const note = {
            title: noteTitle,
            category: noteCategory,
            message: noteText
        }

        // CLearing the inputs on the page
        document.getElementById("newTitle").value = "";
        document.getElementById("newCategory").value = "";
        document.getElementById("newText").value = "";

        fetch('http://localhost:8000/notes', {
            method: 'POST', // specify the request method
            headers: {
                'Content-Type': 'application/json' // specify that we're sending JSON
            },
            body: JSON.stringify(note)
        })
            .then(response => response.json()) // parse the JSON response
            .then(data => {
                // Adding the new note object to the array containing all notes
                setAllNotes([...allNotes, data]);
            }) // do something with the data
            .catch(error => console.error('Error:', error)); // catch any errors


    }

    return (
        <div className="new-note">
            <input id="newTitle" type="text" placeholder="Enter task title"/>
            <input id="newCategory" type="text" placeholder="Enter a category"/>
            <textarea id="newText" placeholder="Enter descriptions"></textarea>
            <button id="addButton" onClick={createNote} type="submit">Add</button>
        </div>
    )
}