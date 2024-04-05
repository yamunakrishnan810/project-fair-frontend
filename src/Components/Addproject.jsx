import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Addproject() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <button   onClick={handleShow} className='btn bg-light text-dark m-5'>Add</button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className="row">
            <div className="col-6 mt-3 pt-5">
            <label> 
        <input type="file" style={{display:'none'}} />
          <img width={'300px'} height={'200px'} src="https://institute.careerguide.com/wp-content/uploads/2020/10/e426702edf874b181aced1e2fa5c6cde.gif" alt="" />
        </label>
            </div>
            <div className="col-6 text-center">
              <input type="text" placeholder='Project Title' className='form-control mb-3' />
              <input type="text" placeholder='Language used' className='form-control mb-3' />
              <input type="text" placeholder='Git hub link' className='form-control mb-3' />
              <input type="text" placeholder='Live Link' className='form-control mb-3' />
              <input type="text" placeholder='Overview' className='form-control mb-3' />

              

            </div>
          </div>

        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-between'>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="light" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Addproject