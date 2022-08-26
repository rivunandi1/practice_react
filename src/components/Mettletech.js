import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'


function Mettletech() {

    const [popular, setPopular] = useState([]);
    useEffect(() => {
        Viewdata();
    }, []);

var button_value = 1
    const handleChange1 = () => {
        button_value = document.getElementById("a").value
        Viewdata()
    }
    const handleChange2 = () => {
        button_value = document.getElementById("b").value
        Viewdata()
    }
    const handleChange3 = () => {
        button_value = document.getElementById("c").value
        Viewdata()
    }

    const Viewdata = async () => {
        const api = await fetch(`https://randomuser.me/api/?results=${button_value}`)
        const data = await api.json();

        //    console.log(data);
        console.log("=====>>>>>", data.results)
        //    console.log("=====>+++>>"+data.results)

        setPopular(data.results)

    }
    console.log("======>>>>>>>>>>>>", popular)
    return (
        <>
            <div id="f1"  >
                <h3>persons data : </h3>
                <div>
                    <input  type= "button" onClick={handleChange1} id="a" value="5"/>
                    <input  type= "button" onClick={handleChange2} id="b" value="10"/>
                    <input  type= "button" onClick={handleChange3} id="c" value="15"/>
                </div>
                {/* <div style={{textAlign: "center"}}> */}
                    <table border="1" style={{width:"50%"}}>
                        <thead >
                        <tr>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Image</th>
                        </tr>
                        </thead>
                   <tbody>
              
                {popular.map((e, i) => {
                    return (
                        
                            <tr id={i}>
                                <td >{e.id.name}</td>
                                <td >{e.gender}</td>
                                <td><img src={e.picture.thumbnail}/></td>
                            </tr>
                       
                    );
                })}
                </tbody>
                 </table>
                  {/* </div> */}
               
            </div>
        </>
    )
}

export default Mettletech