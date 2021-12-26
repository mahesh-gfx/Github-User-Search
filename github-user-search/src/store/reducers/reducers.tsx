const initialState = {
  username: "",
  loading: false,
  error: null,
};

const user = (state = initialState, action: { type: any; message: any; }) => {
  switch (action.type) {
    case "GET_USER_DETAILS":
      return { ...state, loading: true };
    case "GET_USER_SUCCESS":
      return { ...state, loading: false };
    case "GET_USER_FAIL":
      return { ...state, loading: false, error: action.message };
    default:
      return state;
  }
};

export default user;