import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { userContext } from "../App";
import toast, { Toaster } from "react-hot-toast";


const AddUserForm = () => {
  let { id } = useParams();

  let formDataStructure = {
    username: "",
    email: "",
    name: "",
    phone: "",
  };

  let { users,setUsers ,error, setError,setAddUser,setEditingUser } = useContext(userContext);
  let navigate = useNavigate();
  const [formData, setFormData] = useState(formDataStructure);
  const [changedFormData, setchangedFormData] = useState([]);
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      ...{ [e.target.name]: e.target.value },
    });
    setchangedFormData({
      ...formData,
      ...{ [e.target.name]: e.target.value },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    if (id) {
      let update = toast.loading("updating...");
setIsSubmitting(true)
      if (changedFormData && changedFormData !== formData) {
        console.log("change", changedFormData);
        console.log("prev", formData);
if(id && Array.isArray(users) && users.length > 0){
  setUsers((prevUsers) =>
    prevUsers.map((user) =>
      user.id == id
        ? { ...user, ...formData } 
        : user 
    )
  );
  setEditingUser('UserUpdatedAtUsers')
  setFormData(formDataStructure);
  toast.remove(update)
  setIsSubmitting(false)
  navigate('/')
}else{
  try {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      formData
    );
setIsSubmitting(true)
    console.log("User Updated:", response.data);
   if(response.data){
    setEditingUser(response.data) 
   } 
    toast.remove(update);
    setSuccess(true);
    setFormData(formDataStructure);
    setIsSubmitting(false)
    navigate("/");
  } catch (err) {
    toast.remove(update);
    console.log(err);
    if(err.status===500 || err.status===404){
      console.error("It dosen't exist in public api because you have created it")

    }
  
  }
}
       
      } else {
        toast.remove(update);
        toast.error("change something in form to update user");
      }
      console.log("formData", formData);
    } else {
      let addingUser = toast.loading("creating user...");
      setIsSubmitting(true)
      try {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/users",
          formData
        );
        console.log("User added:", response.data);
        if (response.data) {
          setAddUser(response.data) 
        }
        toast.remove(addingUser);
        setSuccess(true);
        setFormData(formDataStructure);
        setIsSubmitting(false)
        navigate("/");
      } catch (err) {
        toast.remove(addingUser);
        console.log(err);
        toast.error("Failed to update user");
        setError("Failed to add user. Please try again.");
      }
    }
  };

 

  useEffect(() => {
    console.log("users", users);
    console.log("id", id);
    
    const fetchFormData = () => {
      if (id && Array.isArray(users) && users.length > 0) {
        let loading = toast.loading("loading...");
        const foundUser = users.find((user) => user.id == id);
        if (foundUser) {
          console.log("got it");
          setFormData(foundUser);
          toast.remove(loading);
        }
      } else if (id) {
        axios
          .get(`https://jsonplaceholder.typicode.com/users/${id}`)
          .then((response) => {
            setFormData(response.data);
          });
      }
    };
    fetchFormData();
  }, [id,users]);

  return (
    <>
      <Toaster />
  

<div className="min-h-screen bg-orange-100 flex justify-center items-center px-4 sm:px-6 lg:px-8">
  <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg">
    <h2 className="text-2xl font-bold mb-6 text-center">Add New User</h2>
    {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
    {success && (
      <p className="text-green-500 mb-4 text-center">User added successfully!</p>
    )}
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-orange-300"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-orange-300"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Username
        </label>
        <input
          id="username"
          name="username"
          type="text"
          value={formData.username}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-orange-300"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="phone"
        >
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="text"
          value={formData.phone}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-orange-300"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-orange-300 w-full"
        disabled={isSubmitting}
      >
        Add User
      </button>
    </form>
  </div>
</div>

    </>
  );
};

export default AddUserForm;
