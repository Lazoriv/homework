import Input from '../Input/Input';
import Button from '../Button/Button';
import { useState } from 'react';

const LoginForm = () => {

    const [username, setUsername] = useState('Vlad');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(username);
    }

    const handleInputChange = (event) => {
        setUsername(event.target.value);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <Input type="text" onChange={handleInputChange} placeholder={username} className="username" value={username} />
            <Button text="Submit" type="submit" />
        </form>
    );
}

export default LoginForm;