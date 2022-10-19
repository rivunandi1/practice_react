import React from 'react'


function CloneEnterprise(props) {
    console.log("-----",props)
    
  return (
    <div>
         <div className="row">
                
                <div className="table-responsive " >
                    <table className="table table-striped table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>En. No. </th>
                                <th>Name </th>
                                <th>Location</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        {props.enterpriseLists.map((e, i) => {
                            return (
                                <tbody>
                                    <tr id={i}>
                                        <td>{i + 1}</td>
                                        <td>{e.enterprise_name}</td>
                                        <td>{e.enterprise_location}</td>
                                        <td>
                                            <a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons" onClick={() => props.handleEditShow(i)} >&#xE254;</i></a>
                                            <a href="#" className="delete" title="Delete" data-toggle="tooltip" style={{ color: "red" }} onClick={() => props.handleDeleteData(i)} ><i className="material-icons" >&#xE872;</i></a>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        })
                        }

                    </table>
                </div>
            </div>

    </div>
  )
}

export default CloneEnterprise