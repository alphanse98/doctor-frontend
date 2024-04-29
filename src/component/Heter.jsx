import React from "react";

const Heter = () => {
  const logIn = localStorage.getItem("AuthToken");

  const logout =()=> localStorage.clear();

  return (
    <div className="w-full text-gray-700 bg-white p-5 flex justify-between">
      <p>Employee Management app</p>
      <div className="flex gap-8">
        {!logIn ? (
          <>
            <a
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              href="login"
            >
              Login
            </a>
            <a 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              href="Register"
            >
              Resigter
            </a>
          </>
        ) : (
          <a
          onClick={()=>logout()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          href="login"
        >
          Logout
        </a>
          // <button onClick={()=>logout()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Logout</button>
        )}
      </div>
    </div>
  );
};

export default Heter;
