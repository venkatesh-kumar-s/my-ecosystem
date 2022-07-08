import React from "react";
import { Container } from "react-bootstrap";
import { ModulesList } from "../data";
import Search from "./Search";

const Item = () => {
  return (
    <Container>
      <Search />
      <div className="row item-holder mx-auto my-5">
        {ModulesList.map((r, i) => (
          <div key={i} className="col-sm-12 col-md-3 my-2">
            <a href={r.url} target="_blank">
              <img
                src={r.thumbnail}
                alt={r.title}
                className="h-100 w-100"
                style={{ borderRadius: 10, cursor: "pointer" }}
              />
            </a>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Item;
