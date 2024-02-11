import React, { useEffect, useState } from "react";
import "./category.scss";
import { IoIosCreate } from "react-icons/io";
import { Button, Table } from "react-bootstrap";
import { Switch } from "@mui/material";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import CreateCatModal from "./CreateCatModal";
import { useSelector } from "react-redux";

const Category = () => {
  const [modal, setModal] = useState(false);

  const { categories } = useSelector(state => state.shop);

  return (
    <div className="table-content">
      <div className="table-content-header">
        <h2>Categories</h2>
        <Button variant="info" onClick={() => setModal(true)}>
          <span>Create Category</span> <IoIosCreate />
        </Button>
      </div>

      <div className="data-table my-3">
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Logo</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map(({ name, photo, status }, index) => {
              return (
                <tr className="align-middle" key={index}>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                  <td>
                    <img
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "cover"
                      }}
                      src={`http://localhost:5050/categories/${photo}`}
                      alt=""
                    />
                  </td>
                  <td>
                    <Switch onChange="" checked={status} />
                  </td>
                  <td>
                    <div className="button-group">
                      <Button variant="warning" onClick="">
                        <FaEdit />
                      </Button>
                      <Button variant="danger" onClick="">
                        <MdDelete />
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <CreateCatModal show={modal} onHide={() => setModal(false)} />
    </div>
  );
};

export default Category;
