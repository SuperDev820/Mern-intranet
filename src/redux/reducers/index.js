import { combineReducers } from "redux"
import auth from "./auth"
import subdomain from "./subdomain"

const reducer = combineReducers({
    auth,
    subdomain
})

export default reducer