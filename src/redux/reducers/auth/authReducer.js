import * as types from "../../actions/types";

const initialAuth = { name: '', email: '', authenticated: false};

const authReducer = (state = initialAuth, action) => {
  switch (action.type) {
    // case types.FETCH_AUTH:
    //     return state;
    //     break;
    case types.SAVE_AUTH:
        let auth = state;
        auth.name = action.payload.name;
        auth.email = action.payload.email;
        auth.authenticated = true;

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