import { SAVE_AUTH } from "../../actions/types";

const initialAuth = { name: '', email: '', authenticated: false};

const authReducer = (state = initialAuth, action) => {
  switch (action.type) {
    case SAVE_AUTH:
        return {
            ...state, 
            authenticated: true
        }

    default:
        return state;
  }
};

export default authReducer;