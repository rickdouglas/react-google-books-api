import React from 'react';
//import '../styles/Header.css';
import {Navbar, FormControl, Button, Form, Nav} from 'react-bootstrap';

const Header = (props) => {
    return (
      <Navbar fixed="top" bg="primary" expand="lg">
        <Navbar.Brand href="#home">Utilizando Google Books API com React JS e Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Form inline>
            <FormControl onChange={props.handleSearch}
                type="text" placeholder="Pesquisar por :" 
                className="mr-sm-2" />
            <Button onClick={props.searchBook} variant="outline-light">Buscar</Button>
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