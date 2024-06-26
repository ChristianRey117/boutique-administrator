"use client";
import CardItem from "@/app/components/card-items/card-items";
import { InputText } from "primereact/inputtext";
import { FormEvent, useEffect, useState } from "react";
import { IProducts } from "../../products/page";
import { useRouter } from "next/navigation";

export default function AddProduct() {
  const _router = useRouter();
  const submitAction = (event: any) => {
    event.preventDefault();
    console.log(event.target[0].value);
    const newProduct: any = {
      createAt: new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
      title: event.target.name.value,
      quantity: Number(event.target.quantity.value),
      category: "default category",
      collection: event.target.collection.value,
      image: "/images/camisa-america.jpg",
      description: event.target.description.value,
    };
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        _router.push("/pages/products");
      });
  };

  useEffect(() => {}, []);
  return (
    <div className="container">
      <div className="row" style={{ margin: "5%" }}>
        <div className="col-12">
          <h1>Add New Product</h1>
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
              <label htmlFor="username">Collection</label>
              <InputText
                id="collection"
                aria-describedby="username-help"
                type="text"
                className="p-inputtext-lg"
                required
              />
              <small id="username-help">Enter collection of product.</small>
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
