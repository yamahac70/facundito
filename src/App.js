import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./css/NavBar"; 
import Product from "./Components/Product";
import Carrito from "./Components/Carrito";
import EditForm from "./Components/EditForm";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar/>}>
            <Route path="Product" element={<Product/>}/>
            <Route path="Carrito" element={<Carrito/>} />
            <Route path="*" element={<Navigate replace to="/"/>}/>
            <Route path="/edit" element= { <EditForm/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
