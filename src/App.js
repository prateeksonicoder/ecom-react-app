import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Layout from "./components/Layout/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
//import LearnHooks from './components/Modules/LearnHooks';


function App () {
  return (
    <BrowserRouter>
    <Routes>
      < Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="/about" element={<About />}/>
        
        </Route>
          
          </Routes>
          </BrowserRouter>
  );
};

export default App;