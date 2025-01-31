import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CRUDComponent from "./components/CRUDComponent";
import MetadataComponent from "./components/MetadataComponent";

const App = () => {
  return (
    <Router>
      <div>
        <h1>Welcome to the App</h1>
        <nav>
          <ul>
            <li><Link to="/crud">CRUD Operations</Link></li>
            <li><Link to="/metadata">Metadata & Headers</Link></li>
          </ul>
        </nav>

        <Routes>
        {/* <Route path="/" element={<App />} /> dont provide or define the path in same component we will get error react-router-dom.js?v=f0c02484:1192 Uncaught Error: You cannot render a <Router> inside another <Router>. You should never have more than one in your app. create a home page and render  here  */}

          <Route path="/crud" element={<CRUDComponent />} />
          <Route path="/metadata" element={<MetadataComponent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
