import React from "react";

export default function Public(props){
    const abc = () =>{
        props.history.push("/login");
    };
    return(
        <>
            <h1>Public Page</h1>
            <p>Thank you!</p>
            <hr />
            <button onClick={abc}>Public</button>
        </>
    );
}