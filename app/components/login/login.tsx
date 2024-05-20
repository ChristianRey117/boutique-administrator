"use client";
import { useRouter } from "next/navigation";
import { InputText } from "primereact/inputtext";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import MessageDialog from "../message-dialog/message-dialog";

export default function Login() {
  const _router = useRouter();
  const [modalShow, setModalShow] = useState(false);
  const submitAction = (event: any) => {
    event.preventDefault();
    const user = event.target.user.value;
    const password = event.target.password.value;

    if (user == "ilovecats" && password == "ihatedogs") {
      document.cookie = "isLogin=true;";
      _router.push("/pages/products");
    } else {
      setModalShow(true);
    }
  };
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
                <form style={{ padding: "10px" }} onSubmit={submitAction}>
                  <div className="flex flex-column gap-2 mb-4 ">
                    <label htmlFor="username">Username</label>
                    <InputText
                      id="user"
                      aria-describedby="username-help"
                      type="text"
                      className="p-inputtext-lg"
                      required
                    />
                    <small id="username-help">Enter your user.</small>
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
                    <button className="btn btn-success" type="submit">
                      Login
                    </button>
                  </div>
                </form>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <MessageDialog
        show={modalShow}
        title="Error Login"
        subtitle="Incorrect username or password"
        text="You should write the right password and username!"
        onHide={() => setModalShow(false)}
      ></MessageDialog>
    </div>
  );
}
