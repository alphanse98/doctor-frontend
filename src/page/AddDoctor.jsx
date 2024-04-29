import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Heter from "../component/Heter";
import {addDoctor} from "../service/DoctorService"

const AddDoctor = () => {
  const [Doctor, SetDoctor] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const navigate = useNavigate();

  const updateValue = (e) => {
    let temCopy = { ...Doctor };
    temCopy[e.target.name] = e.target.value;
    SetDoctor(temCopy);
  };

  const saveDoctor = async ()=>{
    if (Doctor?.firstName != "" && Doctor?.lastName != "" && Doctor?.email != "") {
    try {
        await addDoctor(Doctor)
        await alert("Add Doctor successfully")
        navigate("/DoctorList")
    } catch (error) {
        console.log("error",error);
        alert("Error")
    }
    }else{
        alert("Fill Doctor dateils")
    }
  }

  return (
    <div>
      <Heter />
      <button onClick={()=>navigate("/DoctorList")} class=" m-5 shrink-0 inline-block w-36 rounded-lg bg-blue-600 py-3 font-bold text-white">
        Doctor list
      </button>
      <div>
        <div class="max-w-sm mx-auto">
          <div class="mb-5">
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="base-input"
              onChange={(e)=>updateValue(e)}
              value={Doctor?.firstName}
              class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            />
          </div>
          <div class="mb-5">
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Las tName
            </label>
            <input
              type="text"
              name="lastName"
              id="base-input"
              onChange={(e)=>updateValue(e)}
              value={Doctor?.lastName}
              class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            />
          </div>
          <div class="mb-5">
            <label
              for="base-input"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              id="base-input"
              onChange={(e)=>updateValue(e)}
              value={Doctor?.email}
              class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            />
          </div>
          <button onClick={()=>saveDoctor()}  class=" m-1 shrink-0 inline-block w-36 rounded-lg bg-blue-600 py-3 font-bold text-white">Add </button>
        </div >
      
      </div>
    </div>
  );
};

export default AddDoctor;
