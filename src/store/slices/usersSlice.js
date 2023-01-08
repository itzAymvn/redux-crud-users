import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [
        { id: 0, nom: "Jean", prenom: "Dupont", ville: "Paris" },
        { id: 1, nom: "Pierre", prenom: "Martin", ville: "Lyon" },
        { id: 2, nom: "Paul", prenom: "Dupond", ville: "Marseille" },
        { id: 3, nom: "Jacques", prenom: "Durand", ville: "Lille" },
    ],
    villes: [
        { id: 0, nom: "Paris" },
        { id: 1, nom: "Lyon" },
        { id: 2, nom: "Marseille" },
        { id: 3, nom: "Lille" },
    ],
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const newUser = {
                id: state.users.length,
                nom: action.payload.nom,
                prenom: action.payload.prenom,
                ville: action.payload.ville,
            };

            state.users.push(newUser);
        },
        deleteUser: (state, action) => {
            const index = state.users.findIndex(
                (user) => user.id === action.payload
            );
            state.users.splice(index, 1);
        },
        updateUser: (state, action) => {
            const index = state.users.findIndex(
                (user) => user.id === action.payload.id
            );
            state.users[index] = {
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
