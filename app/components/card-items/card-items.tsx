import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";

export default function CardItem({ id, title, image, nextStep }: ICardItem) {
  const _router = useRouter();
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    fetch(
      nextStep === "/pages/product/"
        ? "http://localhost:3000/products/" + id
        : "http://localhost:3000/collections/" + id,
      { method: "DELETE" }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.reload();
      });
  };

  return (
    <div>
      <Card>
        <Card.Img
          variant="top"
          src={image}
          onClick={() => _router.push(nextStep + id)}
        />
        <Card.Body>
          <Card.Title>
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              {title}
            </p>
          </Card.Title>

          <div className="row">
            <div className="col-6">
              <button
                className="rounded-full pl-2 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-md font-bold dark:bg-zinc-800"
                style={{ width: "60px", marginLeft: "25%" }}
              >
                <span>Editar </span>
              </button>
            </div>

            <div className="col-6">
              <button
                className="rounded-full pl-2 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-md font-bold dark:bg-zinc-800"
                style={{ width: "80px", marginLeft: "25%" }}
                onClick={() => setShow(true)}
              >
                <span>Eliminar </span>
              </button>
            </div>
          </div>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Do you want delete this item?</Modal.Title>
        </Modal.Header>
        <Modal.Body>That action cant be removed!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export interface ICardItem {
  id: number;
  title: string;
  image: string;
  nextStep: string;
}
