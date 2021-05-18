import React, { useState } from 'react';
import {Modal, Card, Button} from 'react-bootstrap';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../styles/Header.css';

function Book({ avatar, title, description, publishedDate }) {
  const [openCard, setOpenCard] = useState(false);

  function updateOpenCard() {
    setOpenCard(!openCard);
  }
  const AvatarBook = () => {
    console.log("avatar", avatar);
    if (avatar == null) {
      return <img src="" />;
    } else {
      return <img src={avatar.thumbnail} />;
    }
  };


  return (
    <>
      <div className="container-sm 6 offset-4">
        <div className="row-4 row-sm-6 row-md-4">
          <div className="col-4">{<AvatarBook />}</div>
        </div>
        <div className="row-4 row-sm-6 row-md-4">
          <div className="col-4">{<a onClick={updateOpenCard}>{title}</a>}</div>
        </div>
        </div>
    </>

    // <Container fluid="md">
    //   <Row>
    //     <Col sm={4}>
    //       <AvatarBook />
    //       <a onClick={updateOpenCard}>{title}</a>
    //     </Col>
    //   </Row>
    // </Container>

    // <Modal show={openCard} onHide={updateOpenCard} autoFocus={true}>
    //   <Modal.Header closeButton>
    //     <Modal.Title>Modal heading</Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body>
    //     <AvatarBook />
    //     <span>{title}</span>
    //     <span>{description}</span>
    //     <span>{publishedDate}</span>
    //   </Modal.Body>
    // </Modal>
  );
}

export default Book;