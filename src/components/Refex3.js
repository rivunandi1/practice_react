import React from "react";

export default class Refex3 extends React.Component
{
    constructor(props){
        super(props);

        this.username=React.createRef();
        this.password=React.createRef();
        this.state = {
            errors: []
          };
    }

    handlesubmit=(event)=>{
        event.preventDefault();
        const username =this.username.current.value;
        const password =this.password.current.value;
        const errors =this.handleValidation(username,password); 

        if (errors.length>0){
            this.setState({errors});
            alert("successful submit done!");
        }
    };
    handleValidation=(username,password)=>{
        const errors=[];
        if (username.length===0){
            errors.push("username canot be empty");
        }
        if (username.length<6){
            errors.push("password should be atleast 6 characters long");
        }
        return errors;
    };
    render(){
        const{errors}=this.state;
        return (
            <div>
                <h1>React Ref example</h1>
                <form onSubmit={this.handlesubmit}>
                    {errors.map(error=> <p key={error}>{error}</p>)}
                    <label>Username:</label>
                    <input type="text" ref={this.username}/>
                    <br></br><br></br>
                    <label>Password:</label>
                    <input type="password" ref={this.password}/>
                    <br></br><br></br>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
