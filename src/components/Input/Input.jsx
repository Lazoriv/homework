import './Input.css';

const Input = (props) => {
    const { placeholder, type, 'aria-label': ariaLabel, className, value, onChange } = props;
    return <input type={type} placeholder={placeholder} value={value} onChange={onChange} aria-label={ariaLabel} className={className} />;
};

export default Input;