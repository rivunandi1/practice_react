import React,{useState} from "react";

function Hookseg1(){
    const [age, setAge] = useState('');
    const [loc, setLoc] = useState('');
    const [name, setName] = useState('');
    const [message, setmessage] = useState('');

    const valueChange=(e)=>{
        if(e.target.name==="name")
        {
            setName(e.target.value);
        }
        else if(e.target.name==="age")
    
         {
              setAge(e.target.value);
         }
         else if(e.target.name==="loc")
         {
            setLoc(e.target.value);
        }
};
const handleClick = event => {
    event.preventDefault();
setmessage(
    `I am ${age} Years Old . My name is ${name} . I stay in ${loc}`
)
  };




return(

   
        <div>
            Enter name:
            <input type="text" name="name" onChange={valueChange}/>
            <br></br>
            Enter age:
            <input type="number" name="age" onChange={valueChange}/>
            <br></br>
            Enter Loc:
            <input type="text" name="loc" onChange={valueChange}/>
            <br></br>
            <button onClick={handleClick}>click me !</button>
            <br></br>
            <h2>{message}</h2>
        </div>
);


}
export default Hookseg1;