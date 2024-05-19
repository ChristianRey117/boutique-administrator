"use client";
import { Card } from "react-bootstrap";

export default function Products() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Products</h1>
        </div>
      </div>

      <div className="row" style={{ margin: "10%" }}>
        <div className="col-4">
          <Card>
            <Card.Img variant="top" src={"/images/camisa-real.jpg"} />
            <Card.Body>
              <Card.Title>
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  TITLE
                </p>
              </Card.Title>
              <Card.Text>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  TETXT
                </p>
              </Card.Text>
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
        </div>

        <div className="col-4">
          <Card>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  TITLE
                </p>
              </Card.Title>
              <Card.Text>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  TETXT
                </p>
              </Card.Text>
              <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                <span>Buy now </span>
                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                  $PRICE
                </span>
              </button>
            </Card.Body>
          </Card>
        </div>

        <div className="col-4">
          <Card>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  TITLE
                </p>
              </Card.Title>
              <Card.Text>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  TETXT
                </p>
              </Card.Text>
              <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                <span>Buy now </span>
                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                  $PRICE
                </span>
              </button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
