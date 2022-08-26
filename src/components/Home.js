import React from "react";

export default function Dashboard(props){
    const signout =()=>{
        props.history.push("/login");
    };
    return(
        <div>
            <h1>Dashboard Page</h1>
            <hr />
            <button onClick={signout}>Sign out</button>
        </div>
    );
}