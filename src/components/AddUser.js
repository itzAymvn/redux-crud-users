// React & Hooks
import React from "react";

// React Redux
import { useSelector, useDispatch } from "react-redux";

// Store functions
import { addUser } from "../store/slices/usersSlice";

const AddUser = () => {
    // Get villes from the store & dispatch
    const villes = useSelector((state) => state.users.villes);
    const dispatch = useDispatch();

    // Handle the submit
    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const nom = formData.get("nom");
        const prenom = formData.get("prenom");
        const ville = formData.get("ville");

        const newUser = {
            nom,
            prenom,
            ville,
        };

        dispatch(addUser(newUser));
    }

    // Render the component
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <form
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="name">
                        Nom
                    </label>

                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        name="nom"
                        type="text"
                        placeholder="Le nom de l'utilisateur"
                    />
                </div>

                <div>
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="prenom">
                        Prenom
                    </label>

                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="prenom"
                        name="prenom"
                        type="text"
                        placeholder="Le prenom de l'utilisateur"
                    />
                </div>

                <div className="inline-block relative w-64">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="ville">
                        Ville
                    </label>

                    <select
                        id="ville"
                        name="ville"
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        {villes.map((ville) => (
                            <option key={ville.id} value={ville.nom}>
                                {ville.nom}
                            </option>
                        ))}
                    </select>
                </div>
                <button
                    className="bg-blue-500 block my-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit">
                    Ajouter
                </button>
            </form>
        </div>
    );
};

export default AddUser;
