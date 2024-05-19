"use client";
import { useRouter } from "next/navigation";
import { InputText } from "primereact/inputtext";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

export default function Login() {
  const _router = useRouter();
  return (
    <div className="container m-5">
      <div className="row" style={{ margin: "15%" }}>
        <div
          className="col-12"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Card style={{ width: "50%" }}>
            <Card.Body>
              <Card.Title className="mb-5" style={{ textAlign: "center" }}>
                Login
              </Card.Title>
              <Card.Text>
                <form style={{ padding: "10px" }}>
                  <div className="flex flex-column gap-2 mb-4 ">
                    <label htmlFor="username">Email</label>
                    <InputText
                      id="email"
                      aria-describedby="username-help"
                      type="email"
                      className="p-inputtext-lg"
                      required
                    />
                    <small id="username-help">Enter your email.</small>
                  </div>

                  <div className="flex flex-column gap-2 mb-4 ">
                    <label htmlFor="username">Password</label>
                    <InputText
                      id="password"
                      aria-describedby="username-help"
                      type="password"
                      className="p-inputtext-lg"
                      required
                    />
                    <small id="username-help">Enter your password.</small>
                  </div>

                  <div className="flex flex-column gap-2 mb-4 ">
                    <button
                      className="btn btn-success"
                      type="submit"
                      onClick={() => _router.push("/pages/products")}
                    >
                      Login
                    </button>
                  </div>
                </form>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
