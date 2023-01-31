import { useState } from "react";
import axios from "axios";
import Loading from "../../components/Loading";
import DashboardPopup from "../../components/modal/DashboardPopup";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";

export default function settings() {
  const [email, setNas] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [msgErr, setMsgErr] = useState(false, "");
  const [loading, setLoading] = useState(false);
  const [msgSuccess, setMsgSuccess] = useState(false);

  const Edit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.put("/api/auth/edit", {
        email: email,
        name: name,
        username: username,
        password: password,
        newPassword: newPassword,
      });
      setLoading(false);
      setMsgSuccess("Edit Successfuly!");
    } catch (error) {
      if (error.response) {
        setLoading(false);
        setMsgErr(error.response.data.msg);
      }
    }
  };
  return (
    <>
      {/* <div className="h-screen w-full bg-gray-200"> */}
      {/* modal error */}
      <DashboardPopup
        trigger={msgErr}
        setTrigger={setMsgErr}
        title={msgErr}
        icon={
          <BiErrorCircle className="text-9xl flex items-center justify-center text-red-500" />
        }
        btn="oke"
        aria-label="Loading Spinner"
        data-testid="loader"
      />

      {/* modal success */}
      <DashboardPopup
        trigger={msgSuccess}
        setTrigger={setMsgSuccess}
        title={msgSuccess}
        icon={
          <AiOutlineCheckCircle className="text-9xl flex items-center justify-center text-green-400" />
        }
        btn="oke"
        aria-label="Loading Spinner"
        data-testid="loader"
      />

      {/* Loading component */}
      <Loading trigger={loading} />
      <div className="bg-gray-200 h-screen w-full pt-2 font-mono my-16">
        <div className="container mx-auto">
          <div className="inputs w-full max-w-2xl p-6 mx-auto">
            <h2 className="text-2xl text-gray-900">Account Setting</h2>
            <form className="mt-6 border-t border-gray-400 pt-4">
              <div className="pb-6">
                <label
                  htmlFor="name"
                  className="font-semibold text-gray-700 block pb-1"
                >
                  Email
                </label>
                <div className="flex">
                  <input
                    id="username"
                    className="border-1 rounded-r px-4 py-2 w-full"
                    type="integer"
                    defaultValue="Jane Name"
                    value={email}
                    onChange={(e) => setNas(e.target.value)}
                  />
                </div>
              </div>
              <div className="pb-6">
                <label
                  htmlFor="name"
                  className="font-semibold text-gray-700 block pb-1"
                >
                  Full Name
                </label>
                <div className="flex">
                  <input
                    id="username"
                    className="border-1  rounded-r px-4 py-2 w-full"
                    type="text"
                    defaultValue="Jane Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <div className="pb-4">
                <label
                  htmlFor="about"
                  className="font-semibold text-gray-700 block pb-1"
                >
                  Username
                </label>
                <input
                  id="email"
                  className="border-1  rounded-r px-4 py-2 w-full"
                  type="text"
                  defaultValue="example@example.com"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="pb-6">
                <label
                  htmlFor="name"
                  className="font-semibold text-gray-700 block pb-1"
                >
                  Password
                </label>
                <div className="flex">
                  <input
                    id="username"
                    className="border-1  rounded-r px-4 py-2 w-full"
                    type="password"
                    placeholder="*******"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="pb-6">
                <label
                  htmlFor="name"
                  className="font-semibold text-gray-700 block pb-1"
                >
                  New Password
                </label>
                <div className="flex">
                  <input
                    id="username"
                    className="border-1  rounded-r px-4 py-2 w-full"
                    type="password"
                    placeholder="*******"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="rounded-xl py-1 bg-yellow-300 flex justify-center w-16 text-lg h-9">
                <button type="submit">save</button>
              </div>
              {/* <div className="w-full md:w-full px-3 mb-6 bg-green-500">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-text-1"
                  >
                    NAS
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                    id="grid-text-1"
                    type="text"
                    placeholder="Enter NAS"
                    required
                  />
                </div> */}
              {/* <div className="w-full md:w-full px-3 mb-6 ">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    password
                  </label>
                  <button className="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md ">
                    change your password
                  </button>
                </div>
                <div className="w-full md:w-full px-3 mb-6">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    pick your country
                  </label>
                  <div className="flex-shrink w-full inline-block relative">
                    <select className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
                      <option>choose ...</option>
                      <option>USA</option>
                      <option>France</option>
                      <option>Spain</option>
                      <option>UK</option>
                    </select>
                    <div className="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-full px-3 mb-6">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    fav language
                  </label>
                  <div className="flex-shrink w-full inline-block relative">
                    <select className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
                      <option>choose ...</option>
                      <option>English</option>
                      <option>France</option>
                      <option>Spanish</option>
                    </select>
                    <div className="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="personal w-full border-t border-gray-400 pt-4">
                  <h2 className="text-2xl text-gray-900">Personal info:</h2>
                  <div className="flex items-center justify-between mt-4">
                    <div className="w-full md:w-1/2 px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        first name
                      </label>
                      <input
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                        type="text"
                        required
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        last name
                      </label>
                      <input
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                        type="text"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-full px-3 mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      user name
                    </label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                      type="text"
                      required
                    />
                  </div>
                  <div className="w-full md:w-full px-3 mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Bio
                    </label>
                    <textarea
                      className="bg-gray-100 rounded-md border leading-normal resize-none w-full h-20 py-2 px-3 shadow-inner border border-gray-400 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                      required
                      defaultValue={""}
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      className="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3"
                      type="submit"
                    >
                      save changes
                    </button>
                  </div>
                </div> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
