import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

// Components
import AddUser from "./components/AddUser";
import ListUsers from "./components/ListUsers";
import UpdateUser from "./components/UpdateUser";

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<ListUsers />} />
                <Route path="/addUser" element={<AddUser />} />
                <Route path="/listUsers" element={<ListUsers />} />
                <Route path="/update/:id" element={<UpdateUser />} />
            </Routes>
        </>
    );
};

export default App;
