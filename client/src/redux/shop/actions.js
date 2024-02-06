import axios from "axios";
import {
  CREATE_BRAND_FAILED,
  CREATE_BRAND_SUCCESS,
  CREATE_TAG_FAILED,
  CREATE_TAG_SUCCESS,
  DELETE_BRAND_FAILED,
  DELETE_BRAND_SUCCESS,
  DELETE_TAG_FAILED,
  DELETE_TAG_SUCCESS,
  GET_BRAND_FAILED,
  GET_BRAND_REQUEST,
  GET_BRAND_SUCCESS,
  GET_TAG_FAILED,
  GET_TAG_REQUEST,
  GET_TAG_SUCCESS,
  UPDATE_BRAND_FAILED,
  UPDATE_BRAND_STATUS_SUCCESS,
  UPDATE_BRAND_SUCCESS,
  UPDATE_TAG_FAILED,
  UPDATE_TAG_SUCCESS
} from "./actionTypes.js";

export const getAllBrands = () => async dispatch => {
  try {
    dispatch({
      type: GET_BRAND_REQUEST
    });
    await axios
      .get("http://localhost:5050/api/v1/product/brand")
      .then(res => {
        dispatch({
          type: GET_BRAND_SUCCESS,
          payload: res.data.brands
        });
      })
      .catch(error => {
        dispatch({
          type: GET_BRAND_FAILED,
          payload: error.response.data.message
        });
      });
  } catch (error) {
    dispatch({
      type: GET_BRAND_FAILED,
      payload: error.response.data.message
    });
  }
};

export const createBrand =
  ({ form_data }) =>
  async dispatch => {
    try {
      await axios
        .post("http://localhost:5050/api/v1/product/brand", form_data)
        .then(res => {
          dispatch({
            type: CREATE_BRAND_SUCCESS,
            payload: res.data.brand
          });
        })
        .catch(error => {
          dispatch({
            type: CREATE_BRAND_FAILED,
            payload: error.response.data.message
          });
        });
    } catch (error) {
      dispatch({
        type: CREATE_BRAND_FAILED,
        payload: error.response.data.message
      });
    }
  };

export const deleteBrand = id => async dispatch => {
  try {
    await axios
      .delete(`http://localhost:5050/api/v1/product/brand/${id}`)
      .then(res => {
        dispatch({
          type: DELETE_BRAND_SUCCESS,
          payload: id
        });
      })
      .catch(error => {
        dispatch({
          type: DELETE_BRAND_FAILED,
          payload: error.response.data.message
        });
      });
  } catch (error) {
    dispatch({
      type: DELETE_BRAND_FAILED,
      payload: error.response.data.message
    });
  }
};

// export const updateBrand =
//   ({ data, id, setModal }) =>
//   async dispatch => {
//     try {
//       await axios
//         .patch(`http://localhost:5050/api/v1/product/brand/${id}`, data)
//         .then(res => {
//           console.log("Action data======>", data);
//           dispatch({
//             type: UPDATE_BRAND_SUCCESS,
//             payload: res.data.brand
//           });
//           setModal(prevState => ({ ...prevState, show: false }));
//         })
//         .catch(error => {
//           console.log("Error in the action");
//           dispatch({
//             type: UPDATE_BRAND_FAILED,
//             payload: error.response?.data?.message
//           });
//         });
//     } catch (error) {
//       dispatch({
//         type: UPDATE_BRAND_FAILED,
//         payload: error.response?.data?.message
//       });
//     }
//   };

export const updateBrand =
  ({ data, id, setModal }) =>
  async dispatch => {
    try {
      const res = await axios.patch(
        `http://localhost:5050/api/v1/product/brand/${id}`,
        data
      );

      dispatch({
        type: UPDATE_BRAND_SUCCESS,
        payload: res.data.brands
      });

      setModal(prevState => ({ ...prevState, show: false }));
    } catch (error) {
      dispatch({
        type: UPDATE_BRAND_FAILED,
        payload:
          error.response?.data || "An error occurred while updating the brand."
      });
    }
  };

export const updateBrandStatus =
  ({ id, status }) =>
  async dispatch => {
    try {
      await axios
        .patch(`http://localhost:5050/api/v1/product/brand-status/${id}`, {
          status
        })
        .then(res => {
          dispatch({
            type: UPDATE_BRAND_STATUS_SUCCESS,
            payload: res.data.brand
          });
        })
        .catch(error => {
          dispatch({
            type: DELETE_BRAND_FAILED,
            payload: error.response.data.message
          });
        });
    } catch (error) {
      dispatch({
        type: DELETE_BRAND_FAILED,
        payload: error.response.data.message
      });
    }
  };

export const getAllTags = () => async dispatch => {
  try {
    dispatch({
      type: GET_TAG_REQUEST
    });
    await axios
      .get("http://localhost:5050/api/v1/product/tag")
      .then(res => {
        // console.log("resssss====tags====>", res.data.tags);
        dispatch({
          type: GET_TAG_SUCCESS,
          payload: res.data.tags
        });
      })
      .catch(error => {
        dispatch({
          type: GET_TAG_FAILED,
          payload: error.response.data.message
        });
      });
  } catch (error) {
    dispatch({
      type: GET_TAG_FAILED,
      payload: error.response.data.message
    });
  }
};

export const createTag =
  ({ form_data }) =>
  async dispatch => {
    try {
      await axios
        .post("http://localhost:5050/api/v1/product/tag", {
          name: form_data.get("name")
        })
        .then(res => {
          console.log("trigger create tag", res);
          dispatch({
            type: CREATE_TAG_SUCCESS,
            payload: res.data.tag
          });
        })
        .catch(error => {
          dispatch({
            type: CREATE_TAG_FAILED,
            payload: error.response.data.message
          });
        });
    } catch (error) {
      dispatch({
        type: CREATE_TAG_FAILED,
        payload: error.response.data.message
      });
    }
  };

export const deleteTag = id => async dispatch => {
  try {
    await axios
      .delete(`http://localhost:5050/api/v1/product/tag/${id}`)
      .then(res => {
        dispatch({
          type: DELETE_TAG_SUCCESS,
          payload: id
        });
      })
      .catch(error => {
        dispatch({
          type: DELETE_TAG_FAILED,
          payload: error.response.data.message
        });
      });
  } catch (error) {
    dispatch({
      type: DELETE_TAG_FAILED,
      payload: error.response.data.message
    });
  }
};

// export const updateTag =
//   ({ data, id, setModal }) =>
//   async dispatch => {
//     try {
//       console.log("Update action dataId and data", id, data.get("name"));
//       let dataUpdated = data.get("name");
//       const res = await axios.patch(
//         `http://localhost:5050/api/v1/product/tag/${id}`,
//         data.get("name")
//       );

//       console.log("update tag====>", res.data);

//       dispatch({
//         type: UPDATE_TAG_SUCCESS,
//         payload: res.data.tags
//       });

//       setModal(prevState => ({ ...prevState, show: false }));
//     } catch (error) {
//       dispatch({
//         type: UPDATE_TAG_FAILED,
//         payload:
//           error.response?.data || "An error occurred while updating the tag."
//       });
//     }
//   };

export const updateTag =
  ({ data, id, setModal }) =>
  async dispatch => {
    try {
      const name = data.get("name");
      await axios
        .put(`http://localhost:5050/api/v1/product/tag/${id}`, {
          name
        })
        .then(res => {
          dispatch({
            type: UPDATE_TAG_SUCCESS,
            payload: res.data.data
          });
          setModal(prevState => ({ ...prevState, show: false }));
        })
        .catch(error => {
          dispatch({
            type: UPDATE_TAG_FAILED,
            payload: error.response.data.message
          });
        });
    } catch (error) {
      dispatch({
        type: UPDATE_TAG_FAILED,
        payload: error.response.data.message
      });
    }
  };
