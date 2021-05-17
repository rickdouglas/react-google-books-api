import React, { useState } from 'react';
import {Modal, Card, Button} from 'react-bootstrap'

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
    <div className="Cards">
      <div>
        <Modal show={openCard} onHide={updateOpenCard}>
          <Modal.Body>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <AvatarBook />
            <a onClick={updateOpenCard}>{title}</a>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={<AvatarBook />} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Modal.Body>
        </Modal>
      </div>

      <Modal show={openCard} onHide={updateOpenCard}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AvatarBook />
          <span>{title}</span>
          <span>{description}</span>
          <span>{publishedDate}</span>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Book;