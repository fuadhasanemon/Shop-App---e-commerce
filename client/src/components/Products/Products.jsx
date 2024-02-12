import React, { useState } from "react";
import "./products.scss";
import { Button, Table } from "react-bootstrap";
import { IoIosCreate } from "react-icons/io";
import { Switch } from "@mui/material";
import CreateProduct from "./CreateProduct";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Spinner from "react-bootstrap/Spinner";

const Products = () => {
  const [modal, setModal] = useState(false);

  const { products, loading } = useSelector(state => state.shop);
  return (
    <div className="table-content">
      <div className="table-content-header">
        <h2>Products</h2>
        <Button variant="info" onClick={() => setModal(true)}>
          <span>Create product</span> <IoIosCreate />
        </Button>
      </div>

      <div className="data-table my-3">
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Photo</th>
              <th>Category</th>
              <th>Tag</th>
              <th>Brand</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <Spinner animation="border" role="status">
                <span className="visually-hidden text-center">Loading...</span>
              </Spinner>
            )}

            {products?.map(
              (
                {
                  name,
                  photo,
                  sale_price,
                  regular_price,
                  _id,
                  categories,
                  tags,
                  brands,
                  status
                },
                index
              ) => {
                return (
                  <tr className="align-middle" key={index}>
                    <td>{index + 1}</td>
                    <td>{name}</td>
                    <td>
                      `${sale_price} ? <span>${regular_price}</span>{" "}
                      <span>${sale_price}</span> : <span>${regular_price}</span>
                      `
                    </td>
                    <td>
                      <img
                        style={{
                          width: "40px",
                          height: "40px",
                          objectFit: "cover"
                        }}
                        src={`http://localhost:5050/products/${photo}`}
                        alt=""
                      />
                    </td>

                    <td>{categories}</td>
                    <td>{tags}</td>
                    <td>{brands}</td>
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
              }
            )}
          </tbody>
        </Table>
      </div>

      <CreateProduct show={modal} onHide={() => setModal(false)} />
    </div>
  );
};

export default Products;
