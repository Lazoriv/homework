import Input from '../Input/Input';
import Button from '../Button/Button';

const Form = (props) => {
    const { action, method, input, onSubmit } = props;
    const { type, onChange, className, placeholder, 'aria-label': ariaLabel, value } = input;

    return (
        <form action={action} method={method} onSubmit={onSubmit}>
            <Input
                type={type}
                onChange={onChange}
                className={className}
                placeholder={placeholder}
                aria-label={ariaLabel}
                value={value}
            />
            <Button text="Submit" type="submit" />
        </form>
    );
};

export default Form;
