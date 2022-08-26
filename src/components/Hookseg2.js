import React,{useState,useEffect} from "react";

function Hookseg2(){
    const [name,setName]=useState({firstName:'Rivu',surname:'Nandi'});
    const [title,setTitle] = useState('Biology');

    useEffect(()=>{
        const timer =setInterval(()=>{
            setName({firstName:'Swarup',surname:'Mondal'})
            setTitle('Test React Js')
        },5000);
        return()=>clearInterval(timer);
    },[]);

    return(
        <div>
            <h1>Title:{title}</h1>
            <h3>Name:{name.firstName}</h3>
            <h3>Surname:{name.surname}</h3>
        </div>
    );

}
export default Hookseg2;