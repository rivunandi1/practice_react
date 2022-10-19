import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'


function Mettletech() {

    const [popular, setPopular] = useState([]);
    useEffect(() => {
        Viewdata(1);
    }, []);

// var button_value = 1
    const handleChange1 = (x) => {
        // button_value = document.getElementById("a").value
        Viewdata(x)
    }
    // const handleChange2 = () => {
    //     button_value = document.getElementById("b").value
    //     Viewdata()
    // }
    // const handleChange3 = () => {
    //     button_value = document.getElementById("c").value
    //     Viewdata()
    // }

    const Viewdata = async (x) => {
        const data= await axios.get(`https://randomuser.me/api/?results=${x}`)
        // const data = await api.json();

        //    console.log(data);
        console.log("=====>>>>>", data)
        //    console.log("=====>+++>>"+data.results)

        setPopular(data.data.results)

    }
    console.log("======>>>>>>>>>>>>", popular)
    return (
        <>
            <div id="f1"  >
                <h3>persons data : </h3>
                <div>
                    <input  type= "button" onClick={()=>handleChange1(5)} id="a" value="5"/>
                    <input  type= "button" onClick={()=>handleChange1(10)} id="b" value="10"/>
                    <input  type= "button" onClick={()=>handleChange1(15)} id="c" value="15"/>
                </div>
                {/* <div style={{textAlign: "center"}}> */}
                    <table border="1" style={{width:"50%"}}>
                        <thead >
                        <tr>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                   <tbody>
              
                {popular.map((e, i) => {
                    return (
                        
                            <tr id={i}>
                                <td >{e.id.name}</td>
                                <td >{e.gender}</td>
                                <td><img src={e.picture.thumbnail}/></td>
                                <td><input  type= "button" value="delete"/></td>
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