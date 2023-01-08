import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 0, nom: "Paris" },
    { id: 1, nom: "Lyon" },
    { id: 2, nom: "Marseille" },
    { id: 3, nom: "Lille" },
];

const villeSlice = createSlice({
    name: "ville",
    initialState,
});

// Exporting the reducer itself
export default villeSlice.reducer;
