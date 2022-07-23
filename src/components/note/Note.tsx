import './Note.styles.css';

type TNote = {
    title: string;
    content: string;
}
const Note = ({ title, content }: TNote) => {
    return (
        <div className="note-container">
            <h1>{title}</h1>
            <p className='content'>{content}</p>
        </div>
    )
}

export default Note;