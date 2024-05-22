"use client";
import CardItem from "@/app/components/card-items/card-items";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

export default function Promotions() {
  const [collections, setCollections] = useState(Array<ICollections>);
  const _router = useRouter();

  useEffect(() => {
    fetch("http://localhost:3000/collections")
      .then((res) => res.json())
      .then((data) => {
        setCollections(data);
      });
  }, []);
  return (
    <div className="container">
      <div className="row" style={{ margin: "5%" }}>
        <div className="col-12">
          <h1>Collections</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <button
            className="btn btn-success"
            style={{ margin: "0% 10%" }}
            onClick={() => _router.push("/pages/add/collection")}
          >
            Add new collection
          </button>
        </div>
      </div>

      <div className="row" style={{ margin: "5% 10%" }}>
        {collections.map((collection) => {
          return (
            <div className="col-4 mb-4">
              <CardItem
                id={Number(collection.id)}
                image={collection.image}
                title={collection.nameColletion}
                nextStep={"/pages/promotion/get?id="}
              ></CardItem>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export interface ICollections {
  id: string;
  nameColletion: string;
  descriptionColletion: string;
  availableData: string;
  image: string;
}
