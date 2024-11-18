import './Header.css';
import Logo from './Logo';
import Form from './Form';
import Username from './Username';

const Header = () => {


    return (
        <header>
            <Logo className="logo" text="PIZZA DAY" />
            <Form action="/search" method="GET" />
            <Username class="username" text="Vlad" />
        </header>
    );
};

export default Header;