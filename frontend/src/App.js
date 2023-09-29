import React, {useEffect, useState} from 'react';
import './App.css';
import MainPage from './Components/MainPage/MainPage';

function App() {

  // Initialise useState hook for storing and updating new notes
  const [allNotes, setAllNotes] = useState([]);

  useEffect(() => {
      fetch("http://localhost:8000/notes")
          .then(res => res.json())
          .then(data => setAllNotes(data))
          .catch(err => {
              console.error(err)
          })
  }, [])

  return (
    <div className="App">
      <MainPage allNotes={allNotes} setAllNotes={setAllNotes} />
    </div>
  );
}

export default App;