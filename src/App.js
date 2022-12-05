
import "./CSS/sb-admin-2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Dashboard";

import { BrowserRouter, Routes, Route } from "react-router-dom";


import Portal from "./Portal";
import Studentview from "./Students/Studentview";
import CreateStudent from "./Students/CreateStudent";
import EditStudent from "./Students/EditStudent"
import Students from "./Students/Students"


import Teachers from "./Teachers/Teachers"
import Createteacher from "./Teachers/Createteacher";
import Teacherview from "./Teachers/Teacherview";
import Teacheredit from "./Teachers/Teacheredit";

import Login from "./Login";
function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/portal" element={<Portal />}>
        <Route path="dashboard" element={<Dashboard/>} />
       
          <Route path="student" element={<Students/>}/>
          <Route path="createstudent" element={<CreateStudent />} />
          <Route path="student/:userviewid" element={<Studentview />} />
          <Route path="studentedit/:id" element={<EditStudent />} />
          
          <Route path="teacher" element={<Teachers />} />
          <Route path="create-teacher" element={<Createteacher />} />
          <Route path="teacherview/:id" element={<Teacherview />} />
          <Route path="teacheredit/:id" element={<Teacheredit/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;