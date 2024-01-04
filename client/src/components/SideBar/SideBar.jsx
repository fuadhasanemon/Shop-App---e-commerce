import React from "react";
import "./sideBar.scss";

const SideBar = () => {
  return (
    <div className="sidebar-area">
      <div className="sidebar-widget">
        <h3 className="widget-title">Search Product</h3>
        <hr />
        <input
          type="search"
          className="form-control"
          placeholder="Search . . ."
        />
      </div>

      <div className="sidebar-widget">
        <h3 className="widget-title">Categories</h3>
        <hr />
        <ul className="list">
          <li>
            <label>
              <input type="checkbox" /> Men
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Women
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Mobile
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Laptop
            </label>
          </li>
        </ul>
      </div>

      <div className="sidebar-widget">
        <h3 className="widget-title">Tags</h3>
        <hr />
        <div className="tags-item">
          <a href="#">Eid</a>
          <a href="#">Puja</a>
          <a href="#">Hot</a>
          <a href="#">Best</a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
