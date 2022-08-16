import React, { ChangeEvent, useState } from "react";
import { NoteProps } from "../note/Note";
import './CreateArea.styles.css';

type CreateAreaProps = {
    onAddNote: (newNote: NoteProps) => void;
}

const CreateArea: React.FC<CreateAreaProps> = ({ onAddNote }) => {

    const [note, setNote] = useState({
        title: '',
        content: ''
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNote({ ...note, [name]: value });
    }

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        onAddNote(note);
    }

    const { title, content } = note;

    return (<div>
        <form>
            <input
                onChange={handleChange}
                name='title'
                value={title}
                placeholder='Title'
            />
            <textarea
                onChange={handleChange}
                name='content'
                value={content}
                placeholder='Take a note ...'
                rows={5}
            />
            <button onClick={handleSubmit}>Add</button>
        </form>
    </div>)
}

export default CreateArea;