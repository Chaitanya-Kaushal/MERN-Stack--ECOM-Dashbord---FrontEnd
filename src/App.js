import Header from "./Components/Header";
import "./App.css";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Register from "./Components/Register";
import Footer from "./Components/Footer";
import PrivateComponent from "./Components/PrivateComponent";
import Login from "./Components/Login";
import AddProduct from "./Components/AddProduct";
import Product from "./Components/Product";
import UpdateProduct from "./Components/UpdateProduct";
import Profile from "./Components/Profile";

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<PrivateComponent />} >
        <Route path="/" element={ <Product/> } />
        <Route path="/Add" element={ <AddProduct/> } />
        <Route path="/update/:id" element={ <UpdateProduct/> } />
        <Route path="/profile" element={ <Profile/> } />
        <Route path="/logout" element={ <h1 className="text-3xl font-bold">Logout</h1> } />
        </Route>
        <Route path="/register" element={ <Register/> } />
        <Route path="/login" element={ <Login/> } />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
