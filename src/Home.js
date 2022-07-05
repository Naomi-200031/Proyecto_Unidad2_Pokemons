import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import App from "./App";
import GetIn from "./navbar";
import Info from "./Me";

const  First= () => {
    return (
        <div>
            <GetIn />
            <BrowserRouter>
                <Routes>
                    <Route path="/homepokemons" element={<App />}></Route>
                    <Route path="/matricula" element={<Info />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default First;