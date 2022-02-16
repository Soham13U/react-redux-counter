import changeTheNumber from "./upDown";
//import all reducers in index.js and combine all of them. In this case there is only 1 reducer (changeTheNumber)
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    changeTheNumber:changeTheNumber
})

export default rootReducer;