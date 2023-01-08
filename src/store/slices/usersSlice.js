import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 0, nom: "Jean", prenom: "Dupont", ville: "Paris" },
    { id: 1, nom: "Pierre", prenom: "Martin", ville: "Lyon" },
    { id: 2, nom: "Paul", prenom: "Dupond", ville: "Marseille" },
    { id: 3, nom: "Jacques", prenom: "Durand", ville: "Lille" },
];

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const newUser = {
                id: state.length,
                nom: action.payload.nom,
                prenom: action.payload.prenom,
                ville: action.payload.ville,
            };

            state.push(newUser);
        },
        deleteUser: (state, action) => {
            const index = state.findIndex((user) => user.id === action.payload);
            state.splice(index, 1);
        },
        updateUser: (state, action) => {
            const index = state.findIndex(
                (user) => user.id === action.payload.id
            );
            state[index] = {
                id: action.payload.id,
                nom: action.payload.nom,
                prenom: action.payload.prenom,
                ville: action.payload.ville,
            };
        },
    },
});

// Exporting the functions (actions)
export const { addUser, deleteUser, updateUser } = usersSlice.actions;

// Exporting the reducer itself
export default usersSlice.reducer;
