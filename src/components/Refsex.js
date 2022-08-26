import React from "react";

class Refsex extends React.Component
{
    constructor(props)
    {
        super(props);
        this.callRef=React.createRef();
        this.callRef2=React.createRef();
        this.callRef3=React.createRef();
    }

    addingRefInput=(e)=>{
        alert(this.callRef.current.value+".........."+this.callRef2.current.value);

    }

    textchng=(e)=>{
        this.callRef.current.value="Have a nice day!!!!";
        this.callRef3.current.value="Thank you visit again";
    }
    render(){
        return(
            <div>
                ENTER NAME:
                <input type="text" ref={this.callRef}/>
                <br></br>
                ENTER DATE:
                <input type="date" ref={this.callRef2}/>
                <br></br>
                <input type="button" value="click" onClick={this.addingRefInput}/>
                <br></br>
                <input type="button" value="show" onClick={this.textchng}/>
                <br></br>
                <h2 ref={this.callRef3}>Welcome</h2>
            </div>
        )
    }
}
export default Refsex;