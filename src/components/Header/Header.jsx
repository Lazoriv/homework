import './Header.css';
import Logo from './Logo';
import Form from './Form';
import { useState } from 'react';

const Header = () => {
    const [username, setUsername] = useState('Vlad');
    const [searchQuery, setSearchQuery] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log('Username:', username);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log('Search query:', searchQuery);
    };

    const handleInputChange = (event) => {
        setUsername(event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const nameInput = {
        type: 'text',
        className: 'username',
        placeholder: 'Vlad',
        ariaLabel: 'Enter your name',
        value: username,
        onChange: handleInputChange,
    };

    const searchInput = {
        type: 'search',
        className: 'search-bar',
        placeholder: 'Search for the order #',
        ariaLabel: 'Search for the order',
        value: searchQuery,
        onChange: handleSearchChange,
    };

    return (
        <header>
            <Logo className="logo" text="PIZZA DAY" />
            <Form action="/search" method="GET" input={searchInput} onSubmit={handleSearchSubmit} />
            <Form action="" method="GET" input={nameInput} onSubmit={handleFormSubmit} />
        </header>
    );
};

export default Header;
