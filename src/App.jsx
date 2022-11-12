import ClientRouter from "./components/ClientRouter";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {

  return (
    <div className="App">
      <Router>
        <ClientRouter />
      </Router>
    </div>
  );
}

export default App;
