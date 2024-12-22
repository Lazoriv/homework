import { useController } from 'react-hook-form';
import './Input.css';

const Input = (props) => {
    const {
        //control, 
        name,
        placeholder,
        type,
        'aria-label': ariaLabel,
        className,
        id
    } = props;

    // const { field } = useController({ name, control });

    return (
        <div>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                aria-label={ariaLabel}
                className={className}
            // {...field}
            />
        </div>
    );
};

export default Input;