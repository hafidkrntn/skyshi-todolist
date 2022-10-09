import React from 'react'
import { Navbar, Container } from 'react-bootstrap'

const Navigation = () => {
  return (
    <Navbar bg="primary" >
    <Container>
      <Navbar.Brand href="/" className="text-white font-weight-bold" style={{width: "229px", paddingLeft:"90px" }}>TO DO LIST</Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Navigation;