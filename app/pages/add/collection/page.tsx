"use client";
import CardItem from "@/app/components/card-items/card-items";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { ICollections } from "../../promotions/page";

export default function AddCollection() {
  const submitAction = (event: any) => {
    event.preventDefault();
    const changeCollection: any = {
      availableData: event.target.availableData.value,
      nameColletion: event.target.nameColletion.value,
      descriptionColletion: event.target.descriptionColletion.value,
    };
    fetch("http://localhost:3000/collections", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(changeCollection),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.reload();
      });
  };

  useEffect(() => {}, []);
  return (
    <div className="container">
      <div className="row" style={{ margin: "5%" }}>
        <div className="col-12">
          <h1>Add new collection</h1>
        </div>
      </div>

      <div className="row" style={{ margin: "10% 20%" }}>
        <div className="col-12">
          <form onSubmit={submitAction}>
            <div className="flex flex-column gap-2 mb-4 ">
              <label htmlFor="username">Name of collection</label>
              <InputText
                id="nameColletion"
                aria-describedby="username-help"
                type="tect"
                className="p-inputtext-lg"
                required
              />
              <small id="username-help">Enter name of collection.</small>
            </div>

            <div className="flex flex-column gap-2 mb-4 ">
              <label htmlFor="username">Description of collection</label>
              <InputText
                id="descriptionColletion"
                aria-describedby="username-help"
                type="text"
                className="p-inputtext-lg"
                required
              />
              <small id="username-help">Enter description of collection.</small>
            </div>

            <div className="flex flex-column gap-2 mb-4 ">
              <label htmlFor="username">Available date</label>
              <InputText
                id="availableData"
                aria-describedby="username-help"
                type="date"
                className="p-inputtext-lg"
                required
              />
              <small id="username-help">
                Enter date available of collection.
              </small>
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
