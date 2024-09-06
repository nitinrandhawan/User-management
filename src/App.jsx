import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddUserForm from "./components/AddUserForm.jsx";
import UserList from "./components/UserList.jsx";
import ViewUser from "./components/ViewUser.jsx";

export const userContext = createContext({});
function App() {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);
  const [addUser,setAddUser]=useState('')
const [editingUser,setEditingUser]=useState('')
  return (
    <userContext.Provider value={{users,setUsers,error,setError,addUser,setAddUser,editingUser,setEditingUser}}>
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Home />} >
          <Route path="/" element={<UserList />} />
          <Route path="add-user" element={<AddUserForm />} />
          <Route path="edit/:id" element={<AddUserForm />} />
          <Route path="view/:id" element={<ViewUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
