import React from 'react';
//import '../styles/Header.css';
import {Navbar, FormControl, Button, NavDropdown, Form, Nav} from 'react-bootstrap';

const Header = (props) => {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React google books api</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Form inline>
            <FormControl onChange={props.handleSearch}
                type="text" placeholder="Search" 
                className="mr-sm-2" />
            <Button onClick={props.searchBook} variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>






      // <header className="main-header">
      //     <i className="fas fa-book fa-2x"></i>
      //     <h1>Testando a pagina</h1>
      // </header>
    );
}

export default Header;