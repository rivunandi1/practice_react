import React from 'react'
import { useState, useEffect } from 'react'

function Todo() {

    const [message, setMessage] = useState('');
    // const [add_flag, setAddFlag] = useState(false);
    const [list, setList] = useState([]);
    const [error, setError] = useState(false);
    const [toggleEdit, setToggleEdit] = useState(false);
    const [index, setIndex] = useState('');


    useEffect(() => {
        console.log(">>>___>>>>", list)
        // {
        //     toggleEdit ? <button onClick={() => handleEdit()}>Edit</button> : <input type="button" value="Save" id="b" onClick={() => save()} />
        // }
    })

    // const add = () => {
    //     // setAddFlag(true);
    //     console.log("============")
    //     setMessage("");
    // }

    const save = (i, ev) => {
        if (message.length == 0) { setError(true) }
        else {
            if (toggleEdit == true) {
                let tempList = list.slice()
                let editPosition = index
                tempList[editPosition] = message;
                setList(tempList)
                setMessage("");
                setToggleEdit(false);
                setIndex("");
            }
            else {
                setError(false)
                console.log(">>>>>>>", message)
                setList((ls) => [...ls, message])
                setMessage("");
            }
            // setAddFlag(false);
        }
    }

    const handleChange =(event)=> {
        event.preventDefault();
        setMessage(event.target.value);
        // setMessage("");
        console.log('value is:', event.target.value);
        console.log(list);
    };

    const handleDelete = (i) => {
        var tempList = list.slice()
        tempList.splice(i, 1);
        setList(tempList);
        // console.log(i)
        // console.log("?????????",i)
        // document.getElementById(i).remove();
        // console.log(">>>>>>>>>>><<<<<<<<<<<<<>>>>>>>>>>",list.splice(i,1));
    }

    const handleEdit = (i) => {
        console.log("?????????", i)
        setMessage(list[i])
        setToggleEdit(true);
        setIndex(i)
    }


    return (
        <div>

            {/* {add_flag == false ? <input type="button" value="Add" id="a" onClick={() => add()} /> : null} */}
            <div>
                <input type="text" id="message" name="message" onChange={(e) => handleChange(e)} value={message} />
                <input type="button" value="Save" id="b" onClick={(i, ev) => save(i, ev)} />
                {error ? <div id="c">Input Field should not Empty !! </div> : null}
            </div>

            {list.map((m, i) => {
                return (
                    <>
                        <div>
                            {/* <button onClick={() => handleDelete(i)}>Delete</button>
                            <button onClick={() => handleEdit(i)}>Edit</button> */}
                            {/* <input type="text" id="message" name="message" value={m} /> */}
                            <p id="message" name="message" >{m}</p>
                            <div>
                                <button onClick={() => handleDelete(i)}>Delete</button>
                                <button onClick={() => handleEdit(i)}>Edit</button>
                            </div>
                        </div>
                    </>
                );
            }
            )}
        </div>
    )
}

export default Todo