import './Header.css';
import Logo from './Logo';
import Input from '../Input/Input';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <header>
            <Logo className="logo" text="PIZZA DAY" />
            <nav>
                <NavLink to="/menu">Menu</NavLink>
                <NavLink to="/cart">Cart</NavLink>
            </nav>
            <Input className="search-bar" type="text" placeholder="Search for the order #" />

        </header>
    );
};

export default Header;