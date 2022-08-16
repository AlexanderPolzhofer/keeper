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
          title={title}
          content={content}
        />
      })}
      <Footer />
    </div>
  );
}

export default App;
