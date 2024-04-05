import React from 'react'

import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

function Projectcard() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div>
      <Card style={{ width: '18rem' }} onClick={handleShow} >
      <Card.Img variant="top" width={'100%'}  height={'250px'} src="https://i.pinimg.com/originals/4f/05/95/4f0595b0e1421428a053ff7aea868424.gif" />
      <Card.Body>
        <Card.Title>Project Title</Card.Title>
        
      </Card.Body>
    </Card>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <div className="row">

        <div className="col-6">

          <img   width={'100%'}  height={'200px'} src="https://i.pinimg.com/originals/4f/05/95/4f0595b0e1421428a053ff7aea868424.gif" alt="" />

        </div>

        <div className="col-6  text-center ">

          <h2>Project Title</h2>
          <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam ipsam sapiente reiciendis amet soluta velit quod eum eos autem? </p>
          <p>Technology used : <b>React ,Node </b> </p>

          

        </div>

        </div>
         

        </Modal.Body>
        <Modal.Footer>

        <div className='d-flex justify-content-between'>
            <Button  className='me-5'><a href=""> <FaGithub /> </a></Button>
            <Button  className='me-5'><a href=""> <FaLink /> </a></Button>
            <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          </div>

          
          
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default Projectcard