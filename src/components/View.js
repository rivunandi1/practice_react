import React from 'react';

class View extends React.Component
{
    constructor(props)   
    {   
        super(props); //initialisation of props     
        this.state = {...props.register_value,
        data_updated:false,
        msg:"Data wll be shown within 5sec"
        };
        console.log(this.state,"*****************")    
    }  
   
    componentDidMount() {
        setTimeout(() => {
          this.setState({data_updated:true,msg:"result is......."})
        }, 5000)
    
      }
    render()    
    {
        const abc =()=>{
            if(this.state.data_updated){
                return (
                <table style={{ width: "50%", height: "40%", border: "5px double green", textalign:"center", padding:"10px"}} border='1'>
                        <tr >
                            <th>NAME</th>
                            <th>PASSWORD</th>
                            <th>EMAIL</th>
                            <th>LOCATION</th>
                            <th>AGE</th>
                            <th>DATE_OF_BIRTH</th>
                        </tr>
                        <tr>
                            <td>{this.state.name}</td>
                            <td>{this.state.password}</td>
                            <td>{this.state.email}</td>
                            <td>{this.state.loc}</td>
                            <td>{this.state.age}</td>
                            <td>{this.state.dob}</td>
                        </tr>
                </table>
                )
            }
        }
        return(
            <div>
                <b>{this.state.msg}</b>
               {abc()} 
            </div>
        )
    }
}

export default View