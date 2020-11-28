import React from "react";
import { Nav } from "react-bootstrap";
import "./style.css";
import { NavLink } from 'react-router-dom';


const Tab = ({tabData}) => {
  return (
    <div className="container my-3">
      <Nav fill variant="tabs" defaultActiveKey="/user" className="bg-transparent">
            {tabData.map(element =>
              <Nav.Item>
                  <NavLink to={`${element.tabId}`}><div class="text-color btn-light">{element.tabName}</div></NavLink>
              </Nav.Item>
              )}
      </Nav>
    </div>
  );
};

export default Tab;
