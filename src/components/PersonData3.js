import React from "react";
import axios from "axios";

class PersonData3 extends React.Component
{
    state={
        persons:[]
    }
    componentDidMount(){
        axios.get('https://reqres.in/api/users?page=2')
        .then(res=>{
            const persons=res.data.data;
            this.setState({persons});
        })
        .catch(err=>{
            console.log('error :'+err);
        })
    }
    render(){
        return(
            <div>
                <h3>Persons Data : </h3>
                <table border='1'>
                    <tr>
                        <th>ID</th>
                        <th>EMAIL</th>
                        <th>FIRST_NAME</th>
                        <th>LAST_NAME</th>
                        <th>AVATAR</th>
                    </tr>
                {
                    this.state.persons.map((item)=>{
                        return <tr>
                                    <td>{item.id}</td>
                                    <td>{item.email}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                    <td><img src={item.avatar} height="50px" width="50px"/></td>
                            </tr>
            
                    })
                }
                </table>
            </div>
        );
    }
}
export default  PersonData3