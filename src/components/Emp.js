import React from "react";
class Emp extends React.Component{
    state={
        p_stid:'',
        p_stnm:'',
        p_stloc:''
    }

    componentWillMount()
    {
        if(!this.props.location.emp_data)
        {
            alert("No Props Found!")
        }
        else
        {
            this.setState(
                {
                    p_stid:this.props.location.emp_data.u_id,
                   p_stnm:this.props.location.emp_data.u_name,
                   p_stloc:this.props.location.emp_data.u_loc
                }
            )
        }
    }

    render(){
        return(
            <div>
                <h2 style={{color:'green'}}>Use case 3</h2>
                <h1>welcome {this.state.p_stid}</h1>
                <h2>Your name : {this.state.p_stnm}</h2>
                <h2>Your location : {this.state.p_stloc}</h2>
            </div>
        );
    }
}
export default Emp