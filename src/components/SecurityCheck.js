import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { AuthContext } from "../contexts/AuthContext";

//css
import "./components.css";
//encryption & decryption
import CryptoJS from "crypto-js";

const SecurityCheck = () => {
  const { setVerified } = useContext(AuthContext);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (process.env.REACT_APP_SECURITY === e.target[0].value) {
      setLoading(true);
      setTimeout(() => {
        localStorage.setItem(
          "token",
          CryptoJS.AES.encrypt(e.target[0]?.value, "8801110025").toString()
        );
        setVerified(true);
        setLoading(false);
      }, 3000);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setError(true);
      }, 3000);
    }
  };

  return (
    <div className="frame bg-black">
      <Container className="my-auto security-check text-center">
        <h1 className="col-12 display-3 text-center security-header">
          <span className="text-warning">Security</span>{" "}
          <span className="text-success">Check</span>
        </h1>
        <form onSubmit={handleSubmit}>
          {!loading ? (
            error ? (
              <>
                <h1
                  className="mx-auto mt-5 mb-4 py-1 px-2"
                  style={{
                    fontWeight: "bolder",
                    color: "red",
                    border: "1px dotted red",
                    width: "fit-content",
                  }}
                >
                  Access Denied
                </h1>
                <small className="text-secondary my-0">
                  Invalid credentials. Try{" "}
                  <button
                    className="btn btn-sm btn-link px-0 text-success"
                    onClick={(e) => {
                      e.preventDefault();
                      setLoading(false);
                      setError(false);
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    LOGIN
                  </button>{" "}
                  again
                </small>
              </>
            ) : (
              <input
                type="password"
                className="col-12 my-5 shadow security-pass p-2 text-center"
                required
                autoComplete="off"
              />
            )
          ) : (
            <div className="my-0 p-1">
              <div className="progress-bar progress-bar-striped progress-bar-animated col-12 my-5 mx-auto security-pass p-4 bg-black"></div>
            </div>
          )}
        </form>
      </Container>
    </div>
  );
};

export default SecurityCheck;
