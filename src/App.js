import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import Broadroutes from "./Broadroutes/Broadroutes";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Broadroutes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
