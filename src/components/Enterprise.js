import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import CloneEnterprise from './CloneEnterprise';
import ModalEnterprise from './ModalEnterprise';
function Enterprise() {
    // Modal usestate
    const [show, setShow] = useState(false);
    const [editShow, setEditShow] = useState(false)

    const handleClose = () => {
        setShow(false);
        setEditFlag(false)
        setEditedId("")
        setEnterpriseData({ enterprise_name: "", enterprise_location: "" })
        setIndex("");
    }
    const handleShow = () => setShow(true);
    // Enterprise data store usestate
    const [index, setIndex] = useState('');

    const handleEditClose = () => setEditShow(false);

    const [enterpriseLists, setEnterpriseLists] = useState([]);
    const [enterpriseData, setEnterpriseData] = useState({ enterprise_name: "", enterprise_location: "" });
    const [enterpriseDataError, setEnterpriseDataError] = useState({ enterprise_name_Error: "", enterprise_location_Error: "" });
    const [editFlag, setEditFlag] = useState(false)
    const [editedId, setEditedId] = useState('');


    useEffect(() => {
        // console.log(enterpriseData)
        console.log("<<<<>>>>>", enterpriseLists);
    })
    const handleEditShow = (i) => {

        // setEditShow(true);
        setEditFlag(true)
        setEditedId(i)
        setShow(true)
        setEnterpriseData(enterpriseLists[i])
    }


    const handleChange = (e) => {
        // console.log(e.target.name)
        // console.log(e.target.value)
        const { name, value } = e.target
        let tempEnterpriseData = { ...enterpriseData };
        let tempEnterpriseDataError = { ...enterpriseDataError }


        if (name == "enterprise_name") {

            if (value == "") {
                tempEnterpriseDataError['enterprise_name_Error'] = "required input field !"
                tempEnterpriseData["enterprise_name"] = ""
                console.log("11111")
            } else {
                tempEnterpriseData["enterprise_name"] = value
                tempEnterpriseDataError['enterprise_name_Error'] = ""
                console.log("22222")
            }

        }
        if (name == "enterprise_location") {
            if (value == "") {
                tempEnterpriseDataError['enterprise_location_Error'] = "required input field !"
                tempEnterpriseData["enterprise_location"] = ""
                console.log("3333")
            } else {
                tempEnterpriseData["enterprise_location"] = value
                tempEnterpriseDataError['enterprise_location_Error'] = ""
                console.log("444444")
            }



        }
        // _hash[e.target.name]=e.target.value
        // console.log(">>>>>>>>>",_hash);

        setEnterpriseDataError(tempEnterpriseDataError)
        setEnterpriseData(tempEnterpriseData);
    }

    const handleSaveData = (e) => {
        let valid = form_validation()
        console.log("........", valid)
        if (valid) {
            if (editFlag == true) {
               let tempEditEnterpriseData= {...enterpriseData}
               let tempEditEnterpriseLists = enterpriseLists.slice()
               console.log("!1!!!!!!!!!!!",tempEditEnterpriseLists[editedId])
               tempEditEnterpriseLists[editedId] = tempEditEnterpriseData;
                setEnterpriseLists(tempEditEnterpriseLists)

            } else {
                setEnterpriseLists(currentArray => [...currentArray, enterpriseData])


            }
            handleClose();
        }


    }
    const form_validation = () => {
        let tempEnterpriseDataError = { ...enterpriseDataError }
        let valid = true
        if (enterpriseData.enterprise_name == "") {
            tempEnterpriseDataError['enterprise_name_Error'] = " required field !"
            valid = false
        }
        if (enterpriseData.enterprise_location == "") {
            tempEnterpriseDataError['enterprise_location_Error'] = " required field !"
            valid = false
        }
        setEnterpriseDataError(tempEnterpriseDataError)
        return valid
    }

    const handleDeleteData = (i) => {
        let tempEnterpriseLists = enterpriseLists.slice()
        tempEnterpriseLists.splice(i, 1);
        setEnterpriseLists(tempEnterpriseLists);
    }

    const handleEditedSaveData = (i) => {
        console.log("???>>>>>", i)
        setEnterpriseData(enterpriseLists[i])
        setIndex(i)
    }


    return (

        <div className="container ">
            <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
                <div className="row ">

                    <div className="col-sm-3 mt-5 mb-4 text-gred">
                        <form className="form-inline">
                            <Button variant="primary" onClick={handleShow}>
                                Add new
                            </Button>
                        </form>
                    </div>
                    <div className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{ color: "green" }}><h2><b>Enterprise Details</b></h2></div>
                    <div className="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">

                    </div>
                </div>
                <CloneEnterprise 
                enterpriseLists = {enterpriseLists} 
                handleEditShow = {handleEditShow}
                handleDeleteData ={handleDeleteData}
                />
               
               <ModalEnterprise 
               show ={show}
               editShow = {editShow}
               handleClose = {handleClose}
               editFlag = {editFlag}
               enterpriseData ={enterpriseData}
               enterpriseDataError = {enterpriseDataError}
               handleChange ={handleChange}
               handleSaveData= {handleSaveData}
               />


                </div>               
            </div>
        
    );
}

export default Enterprise;