import React, { useState } from "react";
import { Modal, Card } from "react-bootstrap";
import _ from 'lodash';
import "../styles/Book.css";
import "../styles/Box.css";

function Book({ avatar, title, description, publishedDate }) {
  const [openCard, setOpenCard] = useState(false);

  function updateOpenCard() {
    setOpenCard(!openCard);
  }
  const AvatarBook = () => {
    console.log("avatar", avatar);
    if (avatar == null) {
      return null;
    } else {
      return avatar.thumbnail;
    }
  };
// Tentei fazer uma fução que cria um componete retornando o thumbnail do resultado que vem na api
  return (
    <div className="card">
      <Card border="primary" style={{ width: "18rem" }} className="box" >
        <Card.Img style={{height:"18rem"}} variant="top" src={`${_.get(avatar, "thumbnail")}/50px100` || 'holder.js/100px180' } />
        <Card.Body>
          <Card.Link>{<a onClick={updateOpenCard}>{title}</a>}</Card.Link>
        </Card.Body>
        <Card.Footer>
          <i className="far fa-star"></i>
        </Card.Footer>
      </Card>

      <Modal show={openCard} onHide={updateOpenCard} autoFocus={true}>
        <Modal.Header closeButton>
          <Modal.Title>{`${title} - ${publishedDate}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card style={{ width: "18rem" }} className="box">
            <Card.Img variant="top" src={`${_.get(avatar, "thumbnail")}/100px180` || 'holder.js/100px180' } />
            <Card.Body>
              <Card.Title>{<a onClick={updateOpenCard}>{title}</a>}</Card.Title>
              <Card.Text>
                {description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Book;
