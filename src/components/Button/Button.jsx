import './Button.css';

const Button = (props) => {
    const { disabled, className = "btn", text, onClick, type, ...rest } = props;
    return (
        <button
            onClick={onClick}
            type={type}
            className={className}
            disabled={disabled}
            {...rest}
        >
            {text}
        </button>
    );
}

export default Button;