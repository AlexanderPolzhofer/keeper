import './Header.styles.css';

type THeader = {
    name: string;
}

const Header = ({ name }: THeader) => {
    return (
        <header className='header-container'>
            <h1>{name}</h1>
        </header>
    )
}

export default Header;