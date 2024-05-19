"use client";
import CardItem from "@/app/components/card-items/card-items";
import { Card } from "react-bootstrap";

export default function Promotions() {
  return (
    <div className="container">
      <div className="row" style={{ margin: "5%" }}>
        <div className="col-12">
          <h1>Promotions</h1>
        </div>
      </div>

      <div className="row" style={{ margin: "10%" }}>
        <div className="col-4">
          <CardItem
            id={1}
            image={"/images/camisa-real.jpg"}
            title={"Promotion Prientemps"}
            nextStep={"/pages/promotion/"}
          ></CardItem>
        </div>
      </div>
    </div>
  );
}
