"use client";
import CardItem from "@/app/components/card-items/card-items";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState(Array<IProducts>);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <div className="container">
      <div className="row" style={{ margin: "5%" }}>
        <div className="col-12">
          <h1>Products</h1>
        </div>
      </div>

      <div className="row" style={{ margin: "10%" }}>
        {products.map((product) => {
          return (
            <div className="col-4 mb-4">
              <CardItem
                id={product.id}
                image={product.image}
                title={product.title}
                nextStep={"/pages/product/get?id="}
                key={product.id}
              ></CardItem>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export interface IProducts {
  id: number;
  createAt: string;
  title: string;
  quantity: number;
  category: string;
  collection: string;
  image: string;
  description: string;
}
