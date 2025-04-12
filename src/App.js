import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import JsonManipulasi from "./JSONManipulasi";
import PermainanMinion from "./PermainanMinion"; // Impor permainan pertama
import PermainanMatrix from "./PermainanMatrix";
import { ToastContainer } from "react-toastify";

import { Helmet } from "react-helmet"; // Impor Helmet dari react-helmet

import "react-toastify/dist/ReactToastify.css"; // Mengimpor CSS untuk toast

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Permainan Minion</Link>
            </li>
            <li>
              <Link to="/matrix">Permainan Matrix</Link>
            </li>
            <li>
              <Link to="/json">JSON Manipulasi</Link>
            </li>
          </ul>
        </nav>

        <Helmet>
          <title>Tugas Seleksi Calon Kandidat Rizal Sujana</title>
          <meta
            name="description"
            content="Selamat datang di Tugas Seleksi Calon Kandidat Rizal Sujana. Pilih permainan untuk mulai bermain!"
          />
          <meta name="keywords" content="Permainan, JSON, Manipulasi, Matrix" />
        </Helmet>

        <Routes>
          <Route path="/" element={<PermainanMinion />} />
          <Route path="/matrix" element={<PermainanMatrix />} />
          <Route path="/json" element={<JsonManipulasi />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
