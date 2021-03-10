import React from 'react';
import LayoutComponent from "./components/Layout";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
    return (
        <Router>
            <LayoutComponent/>
        </Router>
    )
}

export default App;