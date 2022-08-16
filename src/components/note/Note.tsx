import './Note.styles.css';

export type NoteProps = {
    title: string;
    content: string;
}

const Note = ({ title, content }: NoteProps) => {
    return (
        <div className="note-container">
            <h1>{title}</h1>
            <p className='content'>{content}</p>
            <button>DELETE</button>
        </div>
    )
}

export default Note;