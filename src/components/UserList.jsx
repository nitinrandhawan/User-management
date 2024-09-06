import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
import ErrorAlert from "./ErrorAlert";
import UserCard from "./UserCard";
import { Link } from "react-router-dom";
import { userContext } from "../App";
import toast, { Toaster } from "react-hot-toast";

const UserList = () => {
  let { users, setUsers, error, setError,addUser,setAddUser,editingUser ,setEditingUser} = useContext(userContext);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
   const fetchData =async()=>{
    await axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {

      if (addUser) {
        console.log("add", addUser);
        setUsers([...users, addUser]);
        toast.success("User created successfully");
      } else if (editingUser) {
        
         if(editingUser && editingUser.id){
          toast.success("User Updated successfully");
          console.log('editingUser',users);
          
          let obj = users.filter((user) => {
            return user.id !== editingUser.id;
          });
  
          setUsers([editingUser, ...obj]);
        }
        else if(editingUser=='UserUpdatedAtUsers'){
          toast.success("User Updated successfully");
          console.log('UserUpdatedAtUsers',users);
  
          }
        
      } else if(users===null) {
        setUsers(response.data);
      }
      console.log(users, "response.data");
      setLoading(false);
     
    })
    .catch(() => {
      setError("Failed to fetch users");
      setLoading(false);
    });
   } 
  fetchData()
  setEditingUser('')
  setAddUser('')
  }, []);

  if (error) return <ErrorAlert message={error} />;

  return (
    <>
      <Toaster />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <div className=" flex items-center justify-between mx-5 my-4">
            <h2 className="text-2xl font-medium mb-4">User List</h2>
            <Link to={"/add-user"}>
              <button className="bg-orange-500 text-white px-4 py-2  rounded-xl hover:bg-orange-600">
                Add New User
              </button>
            </Link>
          </div>
          <div className="space-y-4 ml-[75px] mr-8">
            {users.map((user,i) => (
              <UserCard key={i*5} user={user} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default UserList;
