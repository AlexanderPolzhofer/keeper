import './Note.styles.css';

export type NoteProps = {
    id: number;
    title: string;
    content: string;
    onDelete: (id: number) => void;
}

const Note: React.FC<NoteProps> = ({ id, title, content, onDelete }) => {

    const handleClick = () => {
        onDelete(id);
    }

    return (
        <div className="note-container">
            <h1>{title}</h1>
            <p>{content}</p>
            <button onClick={handleClick} className='note-button'>DELETE</button>
        </div>
    )
}

export default Note;