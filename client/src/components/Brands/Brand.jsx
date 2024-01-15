import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import "./brand.scss";
import { IoIosCreate } from "react-icons/io";
import BrandModal from "./BrandModal";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Switch } from "@mui/material";
import { useSelector } from "react-redux";

const Brand = () => {
  const [modal, setModal] = useState(false);

  const { brands } = useSelector(state => state.shop);
  return (
    <div className="table-content">
      <div className="table-content-header">
        <h2>Brands</h2>
        <Button variant="info" onClick={() => setModal(true)}>
          <span>Create brand</span> <IoIosCreate />
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
            {brands.map(({ name, slug, photo }, index) => {
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
                      src={`http://localhost:5050/brands/${photo}`}
                      alt=""
                    />
                  </td>
                  <td>
                    <Switch /> Published
                  </td>
                  <td>
                    <div className="button-group">
                      <Button variant="warning">
                        <FaEdit />
                      </Button>
                      <Button variant="danger">
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

      <BrandModal show={modal} onHide={() => setModal(false)} />
    </div>
  );
};

export default Brand;
