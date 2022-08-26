import React from "react";
import axios from "axios";

class PersonData4 extends React.Component
{
    state={
        persons:[]
    }
    componentDidMount(){
        axios.get('https://reqres.in/api/unknown')
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
                <h3>Persons Data Listing: </h3>
                <dl>
                    <dt>ID : </dt>
                    <dt>Name : </dt>
                    <dt>Year : </dt>
                    <dt>Color : </dt>
                    <dt>Pantone_Value : </dt>
                       
                {
                    this.state.persons.map((item)=>{
                        return (<dt>
                                    <dd>{item.id}</dd>
                                    <dd>{item.name}</dd>
                                    <dd>{item.year}</dd>
                                    <dd>{item.color}</dd>
                                    <dd>{item.pantone_value}</dd>
                            </dt>)
            
                    })
                }
                </dl>
            </div>
        );
    }
}
export default  PersonData4