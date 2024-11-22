import './Button.css';

const Button = (props) => {
    const { disabled, className = "btn", text, onClick, type } = props;
    return (
        <button onClick={onClick} type={type} className={className} disabled={disabled}>
            {text}
        </button>
    );
}

export default Button;