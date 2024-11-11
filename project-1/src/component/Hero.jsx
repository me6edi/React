const Hero = (props) => {
    return (
        <div>
            <img src="https://images.unsplash.com/photo-1664188578262-08c57ebf69ae?q=80&w=1077&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <ul>
                {/* <li>Name:{props.item["name"]}</li>
                <li>Age:{props.item["age"]}</li>
                <li>City:{props.item["city"]}</li> */}
                <button onClick={props.ChildClick}>Submit</button>
            </ul>
        </div>
    );
};

export default Hero;