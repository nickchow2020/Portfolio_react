import Nav from "./components/header/Nav";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Home"
import Portfolio from "./Portfolio"
import Contact from "./Contact";

function App() {
  return (
      <BrowserRouter>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/portfolio" element={<Portfolio />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
