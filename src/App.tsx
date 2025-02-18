import "./App.css";
import { Route, Routes } from "react-router-dom";
import { routes } from "./Routes/routes";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="logo">       
          <Header />        
      </div>
      <div className="card">
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
