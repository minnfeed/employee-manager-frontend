import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" exact element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
