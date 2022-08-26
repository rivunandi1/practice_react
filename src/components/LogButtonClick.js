import {useRef,useState} from 'react';

export default function LogButtonClick(){
    const countRef = useRef(0);
    const [hit,setHit]=useState(0);
    const handle=()=>{
        countRef.current++;
        console.log(`Clicked ${countRef.current} times`);
        setHit(countRef.current);
    };

    console.log("I renderd!");


    return(
        <div>
            <button onClick={handle}>Click Me</button>
            <br></br>
            <h3>page his occures {hit} times</h3>
        </div>
    );
}