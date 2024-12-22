import './Header.css';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <header>
            <Logo className="logo" text="PIZZA DAY" />
            <nav>
                <NavLink to="/menu">Menu</NavLink>
                <NavLink to="/cart">Cart</NavLink>
            </nav>
        </header>
    );
};

export default Header;