import "./App.css";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Store from "./Components/Store";
import About from "./Components/About";
import NavbarC from "./Components/Navbar";
import ShoppingCartProvider from "./Context/ShoppingCartContext";

function App() {
  return (
    <div className="App">
      <ShoppingCartProvider>
        <NavbarC />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
