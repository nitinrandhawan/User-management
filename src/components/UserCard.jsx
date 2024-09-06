import axios from "axios";
import React, { useContext } from "react";
import { userContext } from "../App";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  let { users, setUsers, setError } = useContext(userContext);

  const handleDelete = (id) => {
    let userDelete = toast.loading("deleting...");

    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        setUsers(users.filter((user) => user.id !== id));
        toast.remove(userDelete);
        toast.success("User Deleted Successfully");
      })
      .catch(() => setError("Error deleting user"));
  };
  return (
    <>
     <div className="bg-white p-4 rounded flex flex-col md:flex-row justify-between items-center md:text-center">
  <div className="mb-4 md:mb-0">
    <h3 className="text-[22px] text-center md:text-left">{user.name}</h3>
    <p className="text-sm text-gray-500 text-center md:text-left">{user.username}</p>
  </div>
  <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3 md:justify-center items-center md:text-center">
    <Link to={`/view/${user.id}`}>
      <button className="bg-orange-500 text-white px-4 py-2 rounded-xl hover:bg-orange-600">
        View
      </button>
    </Link>
    <Link to={`/edit/${user.id}`}>
      <button className="bg-[#fcecd6] text-black px-4 py-2 rounded-xl hover:bg-[#ffd9a8]">
        Edit
      </button>
    </Link>
    
    <button
      className="bg-[#dc2626] text-white px-4 py-2 rounded-xl hover:bg-red-500 "
      onClick={() => handleDelete(user.id)}
    >
      Delete
    </button>
 
  </div>
</div>

    </>
  );
};

export default UserCard;
