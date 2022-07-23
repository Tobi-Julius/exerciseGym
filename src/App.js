import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Nav from "./component/Nav";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Footer from "./component/Footer";

function App() {
  return (
    <Box width="367px" m="auto" sx={{ width: { xl: "1488px" } }}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
