import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Primeira from "./paginas/Primeira";
import Segunda from "./paginas/Segunda";
import Habitos from "./paginas/Habitos";

export const UserContext = createContext(null);

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Primeira />} />
          <Route path="/cadastro" element={<Segunda />} />
          <Route path="/Habitos" element={<Habitos />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}



