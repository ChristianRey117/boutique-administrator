"use client";
import CardItem from "@/app/components/card-items/card-items";
import { InputText } from "primereact/inputtext";
import { FormEvent, useEffect, useState } from "react";
import { IProducts } from "../../products/page";

export default function ProductId() {
  const [product, setProduct] = useState<IProducts>();
  const [constId, setId] = useState<any>();

  const submitAction = (event: any) => {
    event.preventDefault();
    console.log(event.target[0].value);
    const changeProduct: any = {
      createAt: product?.createAt,
      title: event.target.name.value,
      quantity: Number(event.target.quantity.value),
      category: product?.category,
      collection: product?.collection,
      image: product?.image,
      description: event.target.description.value,
    };
    fetch("http://localhost:3000/products/" + constId, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(changeProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.reload();
      });
  };

  useEffect(() => {
    const params = new URLSearchParams(document.location.search);
    const id = params.get("id");
    setId(id);
    fetch("http://localhost:3000/products/" + id)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);
  return (
    <div className="container">
      <div className="row" style={{ margin: "5%" }}>
        <div className="col-12">
          <h1>{product?.title}</h1>
        </div>
      </div>

      <div className="row" style={{ margin: "10% 20%" }}>
        <div className="col-12">
          <form onSubmit={submitAction}>
            <div className="flex flex-column gap-2 mb-4 ">
              <label htmlFor="username">Name of product</label>
              <InputText
                id="name"
                aria-describedby="username-help"
                type="tect"
                className="p-inputtext-lg"
                required
                defaultValue={product?.title}
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
                defaultValue={product?.description}
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
                defaultValue={product?.quantity}
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
