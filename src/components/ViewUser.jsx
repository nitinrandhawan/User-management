import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import {  useNavigate, useParams } from 'react-router-dom'
import { userContext } from '../App'

function ViewUser() {
    let navigate=useNavigate()
    let {id}=useParams()
let {users}=useContext(userContext)
let [user,setUser]=useState({})
const fetchData=()=>{
   let loading= toast.loading('loading...')
   if (id && Array.isArray(users) && users.length > 0) {
    const foundUser = users.find((user) => user.id == id);
    if (foundUser) {
      console.log("got it");
      setUser(foundUser);
      toast.remove(loading);
    }
  } else if (id) {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setUser(response.data)
      });
  }
}

useEffect(()=>{
   fetchData()
},[])

  return (
    <>
    <Toaster/>
 

<div className="min-h-[610px] bg-orange-100 flex justify-center items-center px-4 sm:px-6 lg:px-8">
  <div className="max-w-2xl mx-auto w-full sm:w-[650px] bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 p-6">
    <div className="p-4">
      <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
      <p className="text-gray-600 mt-2"><b>Username:</b> {user.username}</p>
      <p className="text-gray-600 mt-2"><b>Website:</b> {user.website}</p>
      <p className="text-gray-600 mt-2"><b>Email:</b> {user.email}</p>
      <p className="text-gray-600 mt-2"><b>Phone:</b> {user.phone}</p>
    </div>
    <div className="p-4">
      <button
        onClick={() => navigate('/')}
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-orange-300 w-full"
      >
        View All
      </button>
    </div>
  </div>
</div>
    </>
  )
}

export default ViewUser