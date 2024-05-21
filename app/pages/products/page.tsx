"use client";
import CardItem from "@/app/components/card-items/card-items";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState(Array<IProducts>);
  const _router = useRouter();

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

      <div className="row">
        <div className="col-12">
          <button
            className="btn btn-success"
            style={{ margin: "0% 10%" }}
            onClick={() => _router.push("/pages/add/product")}
          >
            Add new produit
          </button>
        </div>
      </div>

      <div className="row" style={{ margin: "5% 10%" }}>
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
  price: number;
}
