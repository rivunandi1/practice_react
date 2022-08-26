import React from 'react';

class Stateex extends React.Component
{

  state={
    uid:'',
    uid_error:'',
    pass:'',
    pass_error:''
  }
  mySubmitHandler=(e)=>{
    e.preventDefault();
    let count=0
    if(this.state.uid=='')
    {
      this.setState({uid_error:'user id cannot be empty'})
      count++
    }
    else{this.setState({uid_error:''})}
    if(this.state.pass=='')
    {
      this.setState({pass_error:'password cannot be empty'})
      count++
    }
    else{this.setState({pass_error:''})}
    if(count==0)
        {
          alert("Form is submitting successfully")
        }
        else{
            return false
        }
      }
      handleChange=(event)=>{
        this.setState({[event.target.name]:[event.target.value]})
      } 
  render()
    {
        var myStyle = {  
            fontSize: 20,  
            fontFamily: 'Courier',  
            color: 'red'  
         }  
      return (
         <div>
            
            <form   onSubmit={this.mySubmitHandler}>
             <label style = {myStyle}> USER_ID:</label> 
             <input type="text" name="uid" onChange={this.handleChange}/> 
             <span>{this.state.uid_error}</span>
              <br></br><br></br>
             <label style = {myStyle}>PASSWORD :</label> 
             <input type="password" name="pass" onChange={this.handleChange}/>
              <span>{this.state.pass_error}</span>
             <br></br><br></br>
             <input type="submit" value="Register"/>
            </form>
         </div>
      );
    }
  }
  
  export default Stateex;
