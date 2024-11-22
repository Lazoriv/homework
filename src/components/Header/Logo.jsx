const Logo = (props) => {
    const { text, className } = props;
    return <div className={className}>{text}</div>;
}

export default Logo;