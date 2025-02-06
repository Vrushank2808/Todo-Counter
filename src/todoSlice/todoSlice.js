import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counterSlice/counterSlice";
// import counterReducer from "../counterSlice/counterSlice";

export default configureStore({
    reducer: { counter: counterReducer }
});