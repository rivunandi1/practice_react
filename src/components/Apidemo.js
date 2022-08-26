import React from "react";
import axios from 'axios'
class Apidemo extends React.Component
{
    apidata=(e)=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(
            (res)=>{
                console.log("RESPONSE :",res.data);
                console.log("USERID :",res.data.userId);
                console.log("id :",res.data.id);
                console.log("Title :",res.data.title); 
                console.log("Body :",res.data.body);
            }
        )
        .catch(
            (err)=>{
                console.log("ERROR :",err);
            }
        )
    }
    render()
    {
        return(
            <>
            <input type="button" value="SHOW" onClick={this.apidata}/>
            </>
        );
    }
}
export default Apidemo