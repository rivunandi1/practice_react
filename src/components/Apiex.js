import React from "react";
import axios from 'axios'
class Apiex extends React.Component
{
    state={userid:'',
            id:'',
            title:'',
            body:''
        }
    show=(event)=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(
            (res)=>{
                this.setState({
                    userid:res.data.userId,
                    id:res.data.id,
                    title:res.data.title,
                    body:res.data.body
                });
            }
        )
        .catch(
            (err)=>{
                console.log("ERROR CASE :"+err);
            }
        )
    }
    render()
    {
        return(
            <>
            <h3>API ACESS:</h3>
            <input type="button" value="click" onClick={this.show}/>
            <br></br>
            userid:{this.state.userid}
            <br></br>
            id:{this.state.id}
            <br></br>
            title:{this.state.title}
            <br></br>
            body:{this.state.body}
            <br></br>
            </>
        );
    }
}
export default Apiex