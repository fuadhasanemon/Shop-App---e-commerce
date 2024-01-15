import axios from "axios";
import {
  CREATE_BRAND_FAILED,
  CREATE_BRAND_SUCCESS,
  GET_BRAND_FAILED,
  GET_BRAND_REQUEST,
  GET_BRAND_SUCCESS
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

export const createBrand = data => async dispatch => {
  try {
    await axios
      .post("http://localhost:5050/api/v1/product/brand", data)
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
