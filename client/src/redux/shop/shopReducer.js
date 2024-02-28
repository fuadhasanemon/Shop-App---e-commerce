import {
  CREATE_BRAND_SUCCESS,
  CREATE_CATEGORY_SUCCESS,
  CREATE_TAG_FAILED,
  CREATE_TAG_SUCCESS,
  DELETE_BRAND_SUCCESS,
  DELETE_TAG_SUCCESS,
  GET_BRAND_FAILED,
  GET_BRAND_REQUEST,
  GET_BRAND_SUCCESS,
  GET_CATEGORY_FAILED,
  GET_CATEGORY_PENDING,
  GET_CATEGORY_SUCCESS,
  GET_PRODUCT_FAILED,
  GET_PRODUCT_PENDING,
  GET_PRODUCT_SUCCESS,
  GET_TAG_FAILED,
  GET_TAG_REQUEST,
  GET_TAG_SUCCESS,
  UPDATE_BRAND_STATUS_SUCCESS,
  UPDATE_BRAND_SUCCESS,
  UPDATE_TAG_SUCCESS
} from "./actionTypes.js";
import { initialState } from "./initState.js";

// create shop reducer
const shopReducer = (state = initialState, { type, payload }) => {
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

    case DELETE_BRAND_SUCCESS:
      return {
        ...state,
        brands: state.brands.filter(data => data._id !== payload)
      };

    case UPDATE_BRAND_STATUS_SUCCESS:
      state.brands[state.brands.findIndex(data => data._id === payload._id)] =
        payload;
      return {
        ...state,
        brands: state.brands
      };

    case UPDATE_BRAND_SUCCESS:
      const updatedBrandIndex = state.brands.findIndex(
        data => data._id === payload._id
      );

      if (updatedBrandIndex !== -1) {
        const updatedBrands = [...state.brands];
        updatedBrands[updatedBrandIndex] = payload;

        return {
          ...state,
          brands: updatedBrands
        };
      }
      return state;

    case GET_TAG_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GET_TAG_SUCCESS:
      return {
        ...state,
        loading: false,
        tags: payload
      };

    case GET_TAG_FAILED:
      return {
        ...state,
        loading: false,
        tags: [],
        error: payload
      };

    case CREATE_TAG_SUCCESS:
      console.log("Create tag ===>", state);
      return {
        ...state,
        tags: [...state.tags, payload]
      };

    case DELETE_TAG_SUCCESS:
      return {
        ...state,
        tags: state.tags.filter(data => data._id !== payload)
      };

    case UPDATE_TAG_SUCCESS:
      const updatedTagIndex = state.tags.findIndex(
        data => data._id === payload._id
      );

      if (updatedTagIndex !== -1) {
        const updatedTag = [...state.tags];
        updatedTag[updatedTagIndex] = payload;

        return {
          ...state,
          tags: updatedTag
        };
      }
      return state;

    case GET_CATEGORY_PENDING:
      return {
        ...state,
        loading: true
      };

    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: [...payload]
      };

    case GET_CATEGORY_FAILED:
      return {
        ...state,
        loading: false,
        categories: [],
        error: payload
      };

    case CREATE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: [...state.categories, payload]
      };

    case GET_PRODUCT_PENDING:
      return {
        ...state,
        loading: true
      };

    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [...payload],
        loading: false,
        message: "Product loaded"
      };

    case GET_PRODUCT_FAILED:
      return {
        ...state,
        loading: false,
        error: payload
      };

    default:
      return state;
  }
};

export default shopReducer;
