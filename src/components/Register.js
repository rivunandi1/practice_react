import React from 'react';
import View from './View';

export default class Register extends React.Component
{
    state={
        name:'',
        password:'',
        email:'',
        loc:'',
        age:'',
        dob:'',
        status:false
    }

    valChng=(event)=>{
        this.setState({[event.target.name]:[event.target.value]});
    
    }

    

    find=(event)=>{
        this.setState({status:true});
        console.log(this.state)
    }

    render()
    {
        return(
          <>
            NAME :
            <input type='text' name='name' onChange={this.valChng} />
            <br></br>
            PASSWORD :
            <input type='password' name='password' onChange={this.valChng}/>
            <br></br>
            EMAIL :
            <input type='email' name='email' onChange={this.valChng}/>
            <br></br>
            LOCATION :
            <input type='text' name='loc' onChange={this.valChng}/>
            <br></br>
            AGE :
            <input type='number' name='age' onChange={this.valChng}/>
            <br></br>
            DATE_OF_BIRTH :
            <input type='date' name='dob' onChange={this.valChng}/>
            <br></br>
           <button onClick={this.find}>VIEW</button>
           {
               (this.state.status==true)?
               (<View register_value={this.state}/>):
               (null)
           }
           
          </>
        );
        
    }


}
