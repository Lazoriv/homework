import { useContext, useState } from 'react';
import { AuthContext } from "../../App";
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';
import { useNavigate } from 'react-router-dom';



const Form = (props) => {
    const { action, method } = props;
    const [inputValue, setInputValue] = useState("");
    const { setUserName } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setUserName(inputValue);
        navigate('/menu');
    };

    return (
        <div className="container">
            <Title text="The best pizza." />
            <Subtitle text="Straight out of the oven, straight to you." className="subtitle" />
            <form action={action} method={method} onSubmit={handleSubmit}>
                <Input
                    type="text"
                    className="username"
                    placeholder={inputValue}
                    value={inputValue}
                    onChange={handleInputChange} />
                <Button text="Submit" type="submit" />
            </form>
        </div>
    );
};

export default Form;