import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ExerciseDetail from "./pages/ExerciseDetail"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Box } from "@mui/material"
import "./App.css"

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1480px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
