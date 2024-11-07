import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Reception from "./pages/Reception/Reception";
import Floor from "./pages/Floor/Floor";
import PrivateRoute from "./utils/PrivateRoute";
import Layout from "./components/Layout/Layout";
import Forbidden from "./pages/Forbidden/Forbidden";

const App: React.FC = () => {
 //FILL HERE
 return (
   <Router>
    <Layout>
      <Routes>
        <Route path='/reception' element={<Reception/>}/>
        <Route path='/floor' element={<PrivateRoute component={<Floor/>}/>}/>
        <Route path='/forbidden' element={<Forbidden/>}/>
        <Route path='*' element={<Navigate to='/reception' replace/>}/>
      </Routes>
    </Layout>
   </Router>
 );
};



export default App;
