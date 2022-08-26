import React from "react";
class Users extends React.Component{

    render(){
        return(
            <div>
                <h2 style={{color:'green'}}>Use case 3</h2>
                <h1>welcome {this.props.location.u_id}</h1>
                <h2>Your name : {this.props.location.u_name}</h2>
                <h2>Your location : {this.props.location.u_loc}</h2>
            </div>
        );
    }
}
export default Users