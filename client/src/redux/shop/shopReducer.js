// create shop reducer
const shopReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case "INIT":
      return state;

    default:
      return state;
  }
};

export default shopReducer;
