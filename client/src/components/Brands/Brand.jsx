import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./brand.scss";
import { IoIosCreate } from "react-icons/io";
import BrandModal from "./BrandModal";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "name",
    headerName: "Name",
    type: "text",
    width: 150,
    editable: false
  },
  {
    field: "logo",
    headerName: "Logo",
    type: "file",
    width: 150,
    editable: true
  },
  {
    field: "status",
    headerName: "Status",
    type: "text",
    width: 150,
    editable: true
  },
  {
    field: "action",
    headerName: "Action",
    width: 130,
    renderCell: params => {
      return (
        <div className="button-group">
          <Button variant="warning">
            <FaEdit />
          </Button>

          <Button variant="danger">
            <MdDelete />
          </Button>
        </div>
      );
    }
  }
];

const rows = [
  { id: 1, name: "Snow", logo: "", status: "Published" },
  { id: 2, name: "Snow", logo: "", status: "Published" }
];

const Brand = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="table-content">
      <div className="table-content-header">
        <h2>Brands</h2>
        <Button variant="info" onClick={() => setModal(true)}>
          <span>Create brand</span> <IoIosCreate />
        </Button>
      </div>

      <div className="data-table my-3">
        <Box sx={{ height: "100%", width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5
                }
              }
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </div>

      <BrandModal show={modal} onHide={() => setModal(false)} />
    </div>
  );
};

export default Brand;
