const Header = (props) => {
    return (
        <div>
            <ul>
                <h1>{props.title}</h1>
                <p>{props.des}</p>
                <li>Home</li>
                <li>Others</li>
            </ul>
        </div>
    );
};

export default Header;