import './Input.css';

const Input = (props) => {
    const { placeholder, type, 'aria-label': ariaLabel, className } = props;
    return <input type={type} placeholder={placeholder} aria-label={ariaLabel} className={className} />;
};

export default Input;