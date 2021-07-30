import React, { Component, Fragment ,useState } from 'react';
import {Button , Modal} from "react-bootstrap"


const ProductInfo =(props)=>{
 
  const [show, setShow] = useState(true);
  const [modelData , setmodelSData] = useState(props.modelData)

  const handleClose = () => {
    setShow(false);
    props.closeModelHandler()
  }
  

  
  

  return <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          >
          <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={modelData.image}></img>

         <p> Title: {modelData.name}</p>
          <p>Description: {modelData.description}</p>
          <p>Expiry Date: {modelData.expiryDate}</p>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          </Modal.Footer>
          </Modal>
</>

}

export default ProductInfo
