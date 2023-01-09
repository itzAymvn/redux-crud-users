import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

// Components
import AddOrUpdateUser from "./components/AddOrUpdateUser";
import ListUsers from "./components/ListUsers";

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<ListUsers />} />
                <Route path="/listUsers" element={<ListUsers />} />
                <Route path="/addUser" element={<AddOrUpdateUser />} />
                <Route path="/update/:id" element={<AddOrUpdateUser />} />
            </Routes>
        </>
    );
};

export default App;
