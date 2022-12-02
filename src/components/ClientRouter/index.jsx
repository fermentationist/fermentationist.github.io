import {Route, Routes} from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Projects from "../../pages/Projects";
import Contact from "../../pages/Contact";

const ClientRouter = props => {
  return (
    <Routes>
      <Route path="/about" element={<About />}/>
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default ClientRouter;