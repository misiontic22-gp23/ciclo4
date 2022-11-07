import {
  BrowserRouter, Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ClientLogin from "./Screens/client/Login";
import HomeScreen from "./Screens/HomeScreens";
import ClientRegister from "./Screens/client/Register";
import VetLogin from "./Screens/veterinario/Login";
import VetRegister from "./Screens/veterinario/Register";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} exact />
        <Route path="/cl-login" element={<ClientLogin />}/>
        <Route path="/cl-register" element={<ClientRegister />}/>
        <Route path="/vet-login" element={<VetLogin />}/>
        <Route path="/vet-register" element={<VetRegister />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
