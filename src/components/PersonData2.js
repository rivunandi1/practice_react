import React from "react";
import axios from "axios";

class PersonData2 extends React.Component
{
    state={
        persons:[]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            const persons=res.data;
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
                        <th>USERNAME</th>
                        <th>EMAIL</th>
                        <th>STREET</th>
                        <th>CITY</th>
                        <th>LAT</th>
                        <th>WEBSITE</th>
                        <th>COMPANY NAME</th>
                    </tr>
                {
                    this.state.persons.map((item)=>{
                        return <tr>
                                    <td>{item.id}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.address.street}</td>
                                    <td>{item.address.city}</td>
                                    <td>{item.address.geo.lat}</td>
                                    <td>{item.website}</td>
                                    <td>{item.company.name}</td>
                            </tr>
            
                    })
                }
                </table>
            </div>
        );
    }
}
export default  PersonData2