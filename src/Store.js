import {createStore} from "redux"
import LaptopReducer from "./LaptopReducer"
import MobileReducer from "./MobileReducer"
import { combineReducers } from "redux"
var rootReducer=combineReducers({laptop:LaptopReducer,mobile:MobileReducer})
const store=createStore(rootReducer)
export default store