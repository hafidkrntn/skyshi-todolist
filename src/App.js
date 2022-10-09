import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Detail from "./pages/Detail";
import Homepage from "./pages/Homepage";



function App() {
  return (
    <div className="App">
     <Navigation />
     <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
