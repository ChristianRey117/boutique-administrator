"use client";
import CardItem from "@/app/components/card-items/card-items";
import { InputText } from "primereact/inputtext";

export default function ProductId() {
  return (
    <div className="container">
      <div className="row" style={{ margin: "5%" }}>
        <div className="col-12">
          <h1>Product TITLE</h1>
        </div>
      </div>

      <div className="row" style={{ margin: "10% 20%" }}>
        <div className="col-12">
          <form action="">
            <div className="flex flex-column gap-2 mb-4 ">
              <label htmlFor="username">Name of product</label>
              <InputText
                id="name"
                aria-describedby="username-help"
                type="tect"
                className="p-inputtext-lg"
                required
              />
              <small id="username-help">Enter name of product.</small>
            </div>

            <div className="flex flex-column gap-2 mb-4 ">
              <label htmlFor="username">Description of product</label>
              <InputText
                id="description"
                aria-describedby="username-help"
                type="text"
                className="p-inputtext-lg"
                required
              />
              <small id="username-help">Enter description of product.</small>
            </div>

            <div className="flex flex-column gap-2 mb-4 ">
              <label htmlFor="username">Available quantity</label>
              <InputText
                id="quantity"
                aria-describedby="username-help"
                type="number"
                className="p-inputtext-lg"
                required
              />
              <small id="username-help">
                Enter quantity available of product.
              </small>
            </div>

            <div className="flex flex-column gap-2 mb-4 ">
              <label htmlFor="username">Price</label>
              <InputText
                id="price"
                aria-describedby="username-help"
                type="tel"
                className="p-inputtext-lg"
                required
              />
              <small id="username-help">Enter price of product.</small>
            </div>

            <div className="flex flex-column gap-2 mb-4 ">
              <button className="btn btn-success" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
