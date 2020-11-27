import React from "react";
import { Nav } from "react-bootstrap";
import "./style.css";

const Tab = ({tabData}) => {
  return (
    <div className="container my-3">
      <Nav fill variant="tabs" defaultActiveKey="/user" className="bg-transparent">
            {tabData.map(element => 
              <Nav.Item>
                <Nav.Link className="text-color btn-outline-secondary"> {element} </Nav.Link>
              </Nav.Item>)}
      </Nav>
    </div>
  );
};

export default Tab;
