"use client";
import CardItem from "@/app/components/card-items/card-items";
import { InputText } from "primereact/inputtext";

export default function PromotionId() {
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
