import './Header.css';
import Logo from './Logo';
import Input from '../Input/Input';
import Form from '../Form/Form';

const Header = () => {

    return (
        <header>
            <Logo className="logo" text="PIZZA DAY" />
            <Input className="search-bar" type="text" placeholder="Search for the order #" />
            <Form action="" method="GET" />
        </header>
    );
};

export default Header;