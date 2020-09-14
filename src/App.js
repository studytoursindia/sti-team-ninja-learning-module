import React from "react";
import "./App.css";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import { Home } from "./pages/Home/Home";
import ContactUs from "./pages/ContactUs/ContactUs";
import Blog from "./pages/Blog/Blog";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/blog/" component={Blog} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/" component={Home} />
        {/* <Route path="/" render={() => <Home title="Hello" />} /> */}
      </Switch>
    </Router>
  );
}

export default App;
