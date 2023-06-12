import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "../../components/shared/Header";
import ToDo from "../pages/ToDo";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={`/`} element={<Navigate replace to="/todo" />} />
        <Route path={`/todo`} element={<ToDo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
