import Input from '../Input/Input';

const Form = (props) => {
    const { action, method } = props;
    const input = {
        type: "search",
        className: "search-bar",
        placeholder: "Search for the order #",
        ariaLabel: "Search for the order"
    };

    return <form action={action} method={method}>
        <Input type={input.type} className={input.className} placeholder={input.placeholder} aria-label={input.ariaLabel} />
    </form>;
}

export default Form;