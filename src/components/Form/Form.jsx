import { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

const Form = (props) => {
    const { action, method } = props;

    const [inputValue, setInputValue] = useState("Vlad");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue);
    };

    return (
        <form action={action} method={method} onSubmit={handleSubmit}>
            <Input type="text" className="username" placeholder={inputValue} value={inputValue} onChange={handleInputChange} />
            <Button text="Submit" type="submit" />
        </form>
    );
};

export default Form;