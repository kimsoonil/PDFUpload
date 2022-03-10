import React from 'react';
import './index.css';
import Routes from "./router";
import {BrowserRouter} from 'react-router-dom'
const App = () => {
   
    return (
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
    );
};

export default App;