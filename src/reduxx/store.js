import {createStore} from "redux"
import rootReducers from "./action/reducerr";

const store = createStore(rootReducers);

export default store;
