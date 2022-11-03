import logo from './logo.svg';
import './App.css';
import StudentDetails from './Components/StudentDetails/StudentDetails';
import InsertStudent from './Components/InsertStudent/InsertStudent';
import StudentData from './Components/StudentData/StudentData';
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/newStudent" element={<InsertStudent/>}></Route>
        <Route path="/" element={<StudentDetails/>} />
        <Route path="/studentData/:id" element={<StudentData/>} />
        
      </Routes>
      </BrowserRouter>
  </>
  );
}

export default App;
