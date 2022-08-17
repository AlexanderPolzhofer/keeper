import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Note from "./components/note/Note";
import CreateArea from "./components/create-area-component/CreateArea";
import { useState } from "react";
import { NoteProps } from './components/note/Note';

function App() {

  const [notes, setNotes] = useState<NoteProps[]>([]);

  const addNote = (note: NoteProps) => {
    setNotes((prevNotes) => {
      return [...prevNotes, note]
    })
  }

  const deleteNote = (id: number) => {
    setNotes(prevNotes => {
      return prevNotes.filter((newItem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header
        name='Keeper'
      />
      <CreateArea onAddNote={addNote} />
      {notes.map((noteItem, index) => {
        const { title, content } = noteItem;
        return <Note
          key={index}
          id={index}
          title={title}
          content={content}
          onDelete={deleteNote}
        />
      })}
      <Footer />
    </div>
  );
}

export default App;
