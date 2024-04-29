import React, { useEffect, useState } from "react";
import getDoctor from "../service/DoctorService";
import Heter from "../component/Heter";
import { useNavigate } from "react-router-dom";
import {deleteDoctor} from "../service/DoctorService"

const DoctorListPage = () => {
  const [DoctorList, setDoctorList] = useState([]);

  const navigate = useNavigate();

  const getDoctorData = async () => {
    let res = await getDoctor();
    setDoctorList(res?.data);
  };

  const removeDoctor = async(Doctor) => {
    try {
      await deleteDoctor(Doctor)
      getDoctorData(); // refetch Doctor list 
      alert("Doctor deleted successfully")
    } catch (error) {
      alert("Error")
    }
  };

  const EditDoctor =  (DoctorData)=>{
      localStorage.setItem("EditDoctorData",JSON.stringify(DoctorData) );
      navigate("/EditDoctor");
  }

  useEffect(() => {
    getDoctorData();
  }, []);

  return (
    <>
      <Heter />
      <div class="flex flex-col">
        <div class="-m-1.5 overflow-x-auto">
          <div class="p-1.5 min-w-full inline-block align-middle">
            <button
              onClick={() => navigate("/AddDoctor")}
              className=" m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Doctor
            </button>
            <div class="overflow-hidden">
              <table class="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      First Name
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Last Name
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                {/* table ui start */}
                {DoctorList?.map((item) => (
                  <tbody>
                    <tr class="odd:bg-white even:bg-gray-100">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                        {item?.firstName}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {item?.lastName}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {item?.email}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <button
                          onClick={()=>EditDoctor(item)}
                          type="button"
                          class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => removeDoctor(item)}
                          type="button"
                          class="m-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
                {/* table ui end */}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorListPage;
