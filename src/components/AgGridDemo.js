import React from 'react';
import '../App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { useEffect,useState } from 'react'
import axios from 'axios';

function AgGridDemo() {
    useEffect(() => {
        Viewdata()
    }, [])
    const ImageViewer= (props )=> {
        // console.log("props>>>",props)
        return(
        <img src={`${props.value}`}></img>
    ) };

    const [rowData, setRowData] = useState([])
    const [columnDefs, setColumnDefs] = useState([{ headerName: "Name", field: "name" },
    { headerName: "Age", field: "age"},{ headerName: "Phone Number", field: "phoneNumber" },
    { headerName: "Picture", field: "picture", cellRenderer: ImageViewer}])
    
 
   
    const defaultColDef = {
        sortable: true,
        editable: true,
        flex: 1, filter: true,
        floatingFilter: true
    }

    const Viewdata = async (x) => {
        const data = await axios.get(`https://randomuser.me/api/?page=3&results=10&seed=abc`)
        console.log(">>>>>", data)
        console.log("---------->>>>>", data.data.results[0])
        console.log("-???>>>>>", data.data.results[0].id.name)
        let employee_data = data.data.results
        console.log("->>>>>>>>>>>", employee_data)
        let ag_data=[];
        // setRowData(employee_data)
        employee_data.map((e) => {
          
          ag_data.push( { name: e.name.first , age: e.dob.age , phoneNumber: e.phone, picture: e.picture.thumbnail }  )  
          })
        setRowData(ag_data)
    }
    console.log("11864651?????????????++++++++++",rowData)

    return (
        <div className="App">
            <h1 align="center">React-App</h1>
            <h3>Employee Details</h3>
            <div className="ag-theme-alpine" style={{ height: '400px' }}>
                <AgGridReact
                    columnDefs={columnDefs}
                    rowData={rowData}
                    defaultColDef={defaultColDef}
                    Viewdata={Viewdata}
                >
                </AgGridReact>
            </div>
        </div>
    )
}

export default AgGridDemo