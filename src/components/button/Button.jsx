import './Button.css';

const Button = (props) => {
    const { disabled, className = "btn", text, onClick } = props;
    return (
        <button onClick={onClick} className={className} disabled={disabled}>
            {text}
        </button>
    );
}

export default Button;