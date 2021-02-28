import React from "react";
import Nav from "./components/navBar";
import Header from "./components/header"
import Footer from './components/footer'
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home";
import Contact from "./components/contact";
import Portfolio from "./components/portfolio";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() { 
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
