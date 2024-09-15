
import Login from './pages/Login.tsx'
import Layout from './components/Layout.tsx'
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Registration from './pages/Registration.tsx';
import Consultataion from './components/Consultataion.tsx';
import ConsultationInfo from './components/ConsultationInfo.tsx';
function App() {

  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/consultation" element={<Consultataion />} />
        <Route path="/consultationinfo" element={<ConsultationInfo />} />
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
