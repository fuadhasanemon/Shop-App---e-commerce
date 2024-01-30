import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import "./tag.scss";
import { IoIosCreate } from "react-icons/io";
import BrandModal from "./TagModal";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Switch } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteBrand, updateBrandStatus } from "../../redux/shop/actions";
import swal from "sweetalert";

const Tags = () => {
  const [modal, setModal] = useState({
    show: false,
    type: "create",
    dataId: null
  });

  const dispatch = useDispatch();

  const handleDeleteBrand = id => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        dispatch(deleteBrand(id));
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success"
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  const handleEditBrand = id => {
    setModal({ type: "edit", show: true, dataId: id });
  };

  const handleStatusUpdate = (id, status) => {
    dispatch(updateBrandStatus({ id, status: !status }));
  };

  const { tags } = useSelector(state => state.shop);

  return (
    <div className="table-content">
      <div className="table-content-header">
        <h2>Tags</h2>
        <Button
          variant="info"
          onClick={() =>
            setModal(prevState => ({
              ...prevState,
              show: true,
              type: "create"
            }))
          }
        >
          <span>Create tag</span> <IoIosCreate />
        </Button>
      </div>

      <div className="data-table my-3">
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>

              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tags.map(({ name, _id, status }, index) => {
              return (
                <tr className="align-middle" key={index}>
                  <td>{index + 1}</td>
                  <td>{name}</td>

                  <td>
                    <Switch
                      onChange={() => handleStatusUpdate(_id, status)}
                      checked={status}
                    />
                  </td>
                  <td>
                    <div className="button-group">
                      <Button
                        variant="warning"
                        onClick={() => handleEditBrand(_id)}
                      >
                        <FaEdit />
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => handleDeleteBrand(_id)}
                      >
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

      <BrandModal
        show={modal.show}
        setModal={setModal}
        onHide={() => setModal(prevState => ({ ...prevState, show: false }))}
        type={modal.type}
        dataId={modal.dataId}
      />
    </div>
  );
};

export default Tags;
