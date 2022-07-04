import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import App from "./App";

const  First= () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/homepokemons" element={<App />}></Route>
                    <Route path="/matricula" element={<App />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default First;