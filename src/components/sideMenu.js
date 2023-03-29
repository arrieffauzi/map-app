import React from "react";
import "../styles/sidemenu.css";
import { InfoCircleOutlined } from "@ant-design/icons";

export default function SideMenu() {
    const menu = [
      { name: "Browse", icon: <InfoCircleOutlined /> },
      { name: "Suggest Attraction", icon: <InfoCircleOutlined /> },
      { name: "Videos", icon: <InfoCircleOutlined /> },
      { name: "Blog", icon: <InfoCircleOutlined /> },
      { name: "About", icon: <InfoCircleOutlined /> },
    ];
  return (
    <div className="full-height side-container">
      <div className="menu">
        {menu.map((item, index) => {
          <div className="menu-item" key={index}>
            <div className="menu-content">
              {/* {item.icon} */}
              <span style={{ marginTop: 5 }}>{item.name}</span>
            </div>
          </div>;
        })}
      </div>
      <div className="filter">filter Menu</div>
    </div>
  );
}
