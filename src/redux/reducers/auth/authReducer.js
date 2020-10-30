import * as types from "../../actions/types";

const initialAuth = { name: '', email: ''};

const authReducer = (state = initialAuth, action) => {
  switch (action.type) {
    // case types.FETCH_AUTH:
    //     return state;
    //     break;
    case types.SAVE_AUTH:
        return action.payload;
        break;

    // case types.DELETE_BOOK:
    //     const id2Remove = action.payload.id;
    //     return state.filter(e => e.id !== id2Remove);
    //     break;

    default:
        return state;
  }
};

export default authReducer;