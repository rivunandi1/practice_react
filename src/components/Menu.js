import React from "react";
import {Link}from 'react-router-dom';
class Menu extends React.Component
{
    state={
        id:101,
        name:'Rivu Nandi',
        loc:'kolkata'
    }

    render(){
        const li_style={float:'left',display:'inline-block',backgroundcolor:'lightgreen',width:'20%',border:'5px brown double'}
    return(
        <div>
        <ul>
            <li>
            <Link to="/firstex"><b>Usecase1</b></Link>
            </li>
            <li style={li_style}>
            <Link to={{pathname:'/users',u_id:this.state.id,u_name:this.state.name,u_loc:this.state.loc}}>Use case 3</Link>
            </li>
            <li style={li_style}>
            <Link to={{pathname:'/empinfo',
            emp_data:{u_id:this.state.id,u_name:this.state.name,u_loc:this.state.loc}}}>Usecase4</Link>
            </li>
            <li style={li_style}>
                <Link to={{pathname:'/studinfo/',
                stud_data:{st_id:this.state.id,st_name:this.state.name,st_loc:this.state.loc}}}><b>UseCase5</b></Link> 
             </li>
        </ul>
        </div>
    )
    }
}
export default Menu;