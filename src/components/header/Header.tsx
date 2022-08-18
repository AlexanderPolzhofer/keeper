import './Header.styles.css';
import CodeIcon from '@mui/icons-material/Code';

type THeader = {
    name: string;
}

const Header = ({ name }: THeader) => {
    return (
        <header className='header-container'>
            <div className='header-text'>
                <CodeIcon />
                <span className='heading'> {name}</span>
            </div>
        </header>
    )
}

export default Header;