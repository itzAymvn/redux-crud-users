import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slices/usersSlice";
import villeSlice from "./slices/villeSlice";

const store = configureStore({
    reducer: {
        users: usersSlice,
        villes: villeSlice,
    },
});

export default store;
