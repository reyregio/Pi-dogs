import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { Detail, Home, Landing, Form } from "./views";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const location = useLocation();

  return (
    <div className="App">
    {location.pathname !== "/" && <NavBar />}
    <Route exact path="/" component={Landing} />
    <Route exact path="/home" component={Home} />
    <Route path="/create" component={Form} />
    <Route path="/home/:id" component={Detail} />
    </div>
    );
  }
  
  export default App;
  