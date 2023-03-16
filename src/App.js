
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { useState } from "react";
import Primeira from "./paginas/Primeira"
import Segunda from "./paginas/Segunda"


export default function App() {
    return (


        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Primeira />} />
                    <Route path="/cadastro" element={<Segunda />} />
                </Routes>
            </BrowserRouter>
        </>



    );
}



