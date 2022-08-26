import React from "react";

class Lifecycle extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {hello: "welcome to kolkata"};
        console.log("constructor is called");
    }

    componentWillMount()
    {
        console.log("componentWillMount() is called");
    }
    componentDidMount()
    {
        console.log("componentDidMount() is called");
    }
    
    changestate=(e)=>
    {
        this.setState({hello:"Ejob India"});
    }

    render()
    {
        return(
            <div>
                <h1>Welcome all,{this.state.hello}</h1>
                <h2>
                    <button onClick={this.changestate}>CLICK HERE</button>
                </h2>
            </div>
        )
    }

    shouldComponentUpdate()
    {
        console.log("shouldComponentUpdate() is called");
        return true;
    }

    componentWillUpdate()
    {
        console.log("componentWillUpdate() is called");
        alert("state value wll be update soon....")
    }
    componentDidUpdate()
    {
        console.log("componentDidUpdate() is called");
        alert("state value is updated...")
    }
}

export default Lifecycle