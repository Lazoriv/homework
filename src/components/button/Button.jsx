import './Button.css';

const Button = (props) => {
    const { disabled, className = "btn", text } = props;
    return (
        <button className={className} disabled={disabled}>
            {text}
        </button>
    );
}

export default Button;