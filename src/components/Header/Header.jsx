import './Header.css';
import Logo from './Logo';
import Form from './Form';
import LoginForm from './LoginForm';

const Header = () => {


    return (
        <header>
            <Logo className="logo" text="PIZZA DAY" />
            <Form action="/search" method="GET" />
            <LoginForm />
        </header>
    );
};

export default Header;