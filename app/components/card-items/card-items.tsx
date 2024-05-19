import { Card } from "react-bootstrap";

export default function CardItem({ id, title, image }: any) {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
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
            >
              <span>Eliminar </span>
            </button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
