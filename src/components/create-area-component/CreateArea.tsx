import React, { ChangeEvent, useState } from "react";
import { NoteProps } from "../note/Note";
import './CreateArea.styles.css';
import AddIcon from '@mui/icons-material/Add';
import { Zoom } from '@mui/material';

type CreateAreaProps = {
    onAddNote: (newNote: NoteProps) => void;
}

const CreateArea: React.FC<CreateAreaProps> = ({ onAddNote }) => {

    const [isExpanded, setIsExpanded] = useState(false);

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
        onAddNote(note as any);
        setNote({ title: '', content: '' })
    }

    const handleExpanded = () => {
        setIsExpanded(!isExpanded);
    }

    const { title, content } = note;

    return (<div>

        <form>

            {isExpanded ? <input
                onChange={handleChange}
                name='title'
                value={title}
                placeholder='Title'
            /> : null}

            <textarea
                onClick={handleExpanded}
                onChange={handleChange}
                name='content'
                value={content}
                placeholder='Take a note ...'
                rows={isExpanded ? 5 : 1}
            />
            <Zoom in={isExpanded}>
                <button onClick={handleSubmit}><AddIcon /></button>
            </Zoom>

        </form>
    </div>)
}

export default CreateArea;