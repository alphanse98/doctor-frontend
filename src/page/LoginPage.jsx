import React, { useState } from "react";
import login from "../service/AuthService";
import { useNavigate } from "react-router-dom";
import Heter from "../component/Heter";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  // username: "alphanse1dvd",
  // password: "admin",

  const navigate = useNavigate();

  const updateValue = (e) => {
    let temCopy = { ...loginData };
    temCopy[e.target.name] = e.target.value;
    setLoginData(temCopy);
  };

  const Submit = async () => {
    if (loginData?.username != "" && loginData?.password != "") {
      try {
        const res = await login(loginData);
        localStorage.setItem("AuthToken", "Bearer " + res?.data);
        await navigate("/EmployeeList");
      } catch (error) {
        console.log("log in error", error);
        alert("Error check user name and password");
      }
    } else {
      alert("Fill user name and password");
    }
  };

  return (
    <div>
      <Heter/>
      <div class="flex h-screen w-screen items-center overflow-hidden px-2">
        <div class="relative flex w-96 flex-col space-y-5 rounded-lg border bg-white px-5 py-10 shadow-xl sm:mx-auto">
          <div class="mx-auto mb-2 space-y-3">
            <h1 class="text-center text-3xl font-bold text-gray-700">Login</h1>
          </div>

          <div>
            <div class="relative mt-2 w-full">
              <input
                type="text"
                id="email"
                name="username"
                value={loginData?.username}
                class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
                onChange={(event) => updateValue(event)}
              />
              <label
                for="email"
                class="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"
              >
                {" "}
                Enter Your user name{" "}
              </label>
            </div>
          </div>

          <div>
            <div class="relative mt-2 w-full">
              <input
                type="password"
                id="password"
                class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
                name="password"
                value={loginData?.password}
                onChange={(event) => updateValue(event)}
              />
              <label
                for="password"
                class="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"
              >
                {" "}
                Enter Your Password
              </label>
            </div>
          </div>
          <div class="flex w-full items-center">
            <button
              onClick={() => Submit()}
              class="shrink-0 inline-block w-36 rounded-lg bg-blue-600 py-3 font-bold text-white"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
