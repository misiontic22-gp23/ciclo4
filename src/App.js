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
import PetRegister from "./Screens/client/Pet_register";
import ClDashboard from "./Screens/client/Dashboard";
import VetDashboard from "./Screens/veterinario/Dashboard";
import Appointment from "./Screens/client/Appointment";
import Medicalhistory from "./Screens/veterinario/medical_history";
function App() {
  return (
    <BrowserRouter>
      <Medicalhistory />
      <Routes>
        <Route path="/" element={<HomeScreen />} exact />
        <Route path="/cl-login" element={<ClientLogin />}/>
        <Route path="/cl-register" element={<ClientRegister />}/>
        <Route path="/vet-login" element={<VetLogin />}/>
        <Route path="/vet-register" element={<VetRegister />}/>
        <Route path="/pet-register" element={<PetRegister />}/>
        <Route path="/cl-dashboard" element={<ClDashboard />}/>
        <Route path="/vet-dashboard" element={<VetDashboard />}/>
        <Route path="/appointment" element={<Appointment />}/>
        <Route path="/medical-history" element={<Medicalhistory />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
