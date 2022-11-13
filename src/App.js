import logo from './logo.svg';
import './App.css';
import StudentDetails from './Components/StudentDetails/StudentDetails';
import InsertStudent from './Components/InsertStudent/InsertStudent';
import StudentData from './Components/StudentData/StudentData';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';

function App() {
  return (
  <>
  <Navbar/>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage/>}></Route>
        <Route path="/newStudent" element={<InsertStudent/>}></Route>
        <Route path="/studentDetails" element={<StudentDetails/>} />
        <Route path="/studentData/:id" element={<StudentData/>} />
        
      </Routes>
      </BrowserRouter>
    
  </>
  );
}

export default App;
