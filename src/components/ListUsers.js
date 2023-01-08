// React & Hooks
import { useEffect, useState } from "react";

// React Redux
import { useSelector, useDispatch } from "react-redux";

// React Router
import { Link } from "react-router-dom";

// Store functions
import { deleteUser } from "../store/slices/usersSlice";

// Render the list of users
const ListUsers = () => {
    const villes = useSelector((state) => state.villes); // Get villes from the store
    const usersFromStore = useSelector((state) => state.users); // Get users from the store
    const [users, setUsers] = useState([]); // Set the users state

    useEffect(() => {
        setUsers(usersFromStore);
    }, [usersFromStore]); // Update the users state when the users from the store change

    // Handle the delete
    function handleDelete(id) {
        dispatch(deleteUser(id));
    }

    const dispatch = useDispatch();

    // Render the component
    return (
        <div className="flex flex-col m-3">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="flex flex-row m-3 gap-3">
                        <h2 className="inline-block text-2xl font-semibold leading-tight text-gray-800">
                            Filter par ville
                        </h2>
                        <select
                            defaultValue="Sélectionner une ville"
                            className="inline-block bg-gray-200 appearance-none border-2 border-gray-200 rounded px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            onChange={(e) => {
                                const ville = e.target.value;
                                const filteredUsers = usersFromStore.filter(
                                    (user) => user.ville === ville
                                );
                                setUsers(filteredUsers);
                            }}>
                            <option disabled>Sélectionner une ville</option>
                            {villes.map((ville) => (
                                <option key={ville.id} value={ville.nom}>
                                    {ville.nom}:{" "}
                                    {
                                        usersFromStore.filter(
                                            (user) => user.ville === ville.nom
                                        ).length
                                    }
                                </option>
                            ))}
                        </select>
                        <button
                            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => {
                                setUsers(usersFromStore);
                            }}>
                            Reset
                        </button>
                    </div>
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        ID
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Nom
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Prénom
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Ville
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {users.map((user) => (
                                    <tr key={user.id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {user.id}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {user.nom}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {user.prenom}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {user.ville}
                                            </div>
                                        </td>
                                        <td className="flex flex-row gap-2 justify-cente items-center px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <Link to={`/update/${user.id}`}>
                                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                    Editer
                                                </button>
                                            </Link>
                                            <button
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                                onClick={() => {
                                                    handleDelete(user.id);
                                                }}>
                                                Supprimer
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListUsers;
