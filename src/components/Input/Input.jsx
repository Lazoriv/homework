import './Input.css';

const Input = (props) => {
    const { placeholder, type, 'aria-label': ariaLabel, className, value, onChange, id, readOnly, required } = props;
    return <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-label={ariaLabel}
        className={className}
        readOnly={readOnly}
        required={required}
    />;
};

export default Input;