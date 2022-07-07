import React from "react";
import { Container } from "react-bootstrap";

//css
import "./components.css";

const SecurityCheck = ({ update }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    update(e.target[0].value);
  };

  return (
    <div className="frame bg-black">
      <Container className="my-auto security-check text-center">
        <h1 className="col-12 display-3 text-center security-header">
          <span className="text-warning">Security</span>{" "}
          <span className="text-success">Check</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            className="col-12 my-5 shadow security-pass p-2 text-center"
            required
          />
        </form>
      </Container>
    </div>
  );
};

export default SecurityCheck;
