import {
  CREATE_BRAND_SUCCESS,
  GET_BRAND_FAILED,
  GET_BRAND_REQUEST,
  GET_BRAND_SUCCESS
} from "./actionTypes.js";

// create shop reducer
const shopReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case GET_BRAND_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GET_BRAND_SUCCESS:
      return {
        ...state,
        loading: false,
        brands: payload
      };

    case GET_BRAND_FAILED:
      return {
        ...state,
        loading: false,
        brands: [],
        error: payload
      };

    case CREATE_BRAND_SUCCESS:
      return {
        ...state,
        brands: [...state.brands, payload]
      };

    default:
      return state;
  }
};

export default shopReducer;
