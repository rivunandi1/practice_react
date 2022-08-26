import React from 'react';

export default class Ex1 extends React.Ex1
{
    state={
        start:'WELCOME'
}
valchng=()=>{
    this.setState({start:'THANK YOU'})
}

  render()
  {
      return(
          <div>
              <h3>{this.state.start}</h3>
              <button onClick={this.valchang}></button>
          </div>
      )
  }
}