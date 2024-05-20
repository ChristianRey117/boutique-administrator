"use client";
import CardItem from "@/app/components/card-items/card-items";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { ICollections } from "../../promotions/page";

export default function PromotionId() {
  const [collection, setCollection] = useState<ICollections>();

  useEffect(() => {
    const params = new URLSearchParams(document.location.search);
    const id = params.get("id");
    fetch("http://localhost:3000/collections/" + id)
      .then((res) => res.json())
      .then((data) => {
        setCollection(data);
      });
  }, []);
  return (
    <div className="container">
      <div className="row" style={{ margin: "5%" }}>
        <div className="col-12">
          <h1>Promotion TITLE</h1>
        </div>
      </div>

      <div className="row" style={{ margin: "10% 20%" }}>
        <div className="col-12">
          <form action="">
            <div className="flex flex-column gap-2 mb-4 ">
              <label htmlFor="username">Name of promotion</label>
              <InputText
                id="name"
                aria-describedby="username-help"
                type="tect"
                className="p-inputtext-lg"
                required
                defaultValue={collection?.nameColletion}
              />
              <small id="username-help">Enter name of promotion.</small>
            </div>

            <div className="flex flex-column gap-2 mb-4 ">
              <label htmlFor="username">Description of promotion</label>
              <InputText
                id="description"
                aria-describedby="username-help"
                type="text"
                className="p-inputtext-lg"
                required
                defaultValue={collection?.descriptionColletion}
              />
              <small id="username-help">Enter description of promotion.</small>
            </div>

            <div className="flex flex-column gap-2 mb-4 ">
              <label htmlFor="username">Available date</label>
              <InputText
                id="date"
                aria-describedby="username-help"
                type="date"
                className="p-inputtext-lg"
                required
                defaultValue={collection?.availableData}
              />
              <small id="username-help">
                Enter date available of promotion.
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
