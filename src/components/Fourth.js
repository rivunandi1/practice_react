import React from 'react';

class Fourth extends React.Component
{
 state={
     id:10,
     name:'Raj',
     loc:'kolkata',
     age:22
 }

 render()
 {
     return(
       <div>
           <ul type='square'>
              <li>ID : {this.state.id}</li>
              <li>NAME : {this.state.name}</li>
              <li>LOC : {this.state.loc}</li>
              <li>AGE : {this.state.age}</li>
           </ul>
       </div>
     );
 }

}

export default Fourth