import React from 'react'
import { Button, Modal} from 'react-bootstrap';

function ModalEnterprise(props) {
    console.log("Modal props_____>>>>",props)
  return (
    
        <div className="model_box">
                    <Modal
                        show={props.show}
                        onHide={props.handleClose}
                        backdrop="static"
                        keyboard={false}>

                        <Modal.Header closeButton>
                            <Modal.Title>{props.editFlag ? 'Edit Record' : 'Add Record'}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form>
                                <div className="form-group">

                                    <input type="text" className="form-control" id="name" name="enterprise_name" value={props.enterpriseData.enterprise_name} aria-describedby="nameHelp" onChange={(e) => props.handleChange(e)} placeholder="Enter Name" />
                                    <div id="error"> {props.enterpriseDataError.enterprise_name_Error} </div>
                                </div>

                                <div className="form-group mt-3">
                                    <input type="text" className="form-control" id="location" name="enterprise_location" value={props.enterpriseData.enterprise_location} aria-describedby="locationHelp" onChange={(e) => props.handleChange(e)} placeholder="Enter Location" />
                                    <div id="error"> {props.enterpriseDataError.enterprise_location_Error} </div>
                                </div>

                                <br></br>
                                <div class="modal-footer" id="modal-footer">
                                    <Button variant="primary" type="button" className={props.editFlag ? "btn btn-warning mt-4" : "btn btn-success mt-4"} onClick={() => props.handleSaveData()}> {props.editFlag ? 'Edit Record' : 'Add Record'}</Button>
                                    <Button variant="secondary" onClick={props.handleClose}> Close </Button>
                                </div>
                            </form>
                        </Modal.Body>
                    </Modal>
    </div>
  )
}

export default ModalEnterprise