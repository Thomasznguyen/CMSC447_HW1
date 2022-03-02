import React from 'react';
import StudentPage from "./StudentPage";
import Students from "./Students";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {


  return (
      <div className="App">
        <Router>
          <Routes>
              <Route exact path='/' element={<StudentPage />}/>
              <Route path='/:id' element={<Students />}/>
          </Routes>
      </Router>
      </div>
  );
}

export default App;