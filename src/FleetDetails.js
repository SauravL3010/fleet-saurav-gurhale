import React, {useState} from 'react'
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function FleetDetails({data}) {

    function camelCase(str) {
        if (str[0].toLowerCase() === 'e'){
            const f = str[0].toUpperCase()
            const l = str[1].toUpperCase()
            return f + "-" + l + str.slice(2, )
        }
        const f = str[0].toUpperCase()
        return f + str.slice(1, )
    }

    const modeType = data ? data.map(i => camelCase(i.modeType.toLowerCase())).join(", ") : ""

    // Handles Modal view
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // 
    const [website, setWebsite] = useState(data[0].website)
    const [description, setDescription] = useState(data[0].description)



  return (

    <>

    <div className="col" onClick={handleShow}>
        <div className="card p-3 mb-2">
            <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                    <div className="icon"> <img className="icon" src={data[0].icon} alt="icon"/> </div>
                </div>
            </div>
            <div className="mt-3">
                <h3 className="heading"><strong>{data[0].name}</strong></h3>
                <div className="mt-2">
                    <div className="mt-2"> <span className="text1">{modeType}</span> </div>
                </div>
            </div>
        </div>
        </div>

    
    <Modal size="lg"
        centered show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title className="modal-title">{data[0].name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label className="modal-color">Website</Form.Label>
                <Form.Control className="modal-input" type="website" placeholder="" value={website} onChange={e => setWebsite(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label className="modal-color">Description</Form.Label>
                <Form.Control className="modal-input" type="description" placeholder="" value={description} onChange={e => setDescription(e.target.value)}/>
            </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
            <button className="close" type="button" onClick={handleClose}>
                Close
            </button>
            <button className="update" type="button" onClick={handleClose}>
                Update
            </button>
            </Modal.Footer>
        </Modal>

    </>
  )
}
