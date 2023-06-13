import React from 'react'
import {Container ,Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Navbarfile = () => {
  return (
   <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            Crud Application
          </Navbar.Brand>
        </Container>
      </Navbar>
   </>
  )
}

export default Navbarfile
