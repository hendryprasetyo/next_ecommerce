import React from "react";
import { BsQuestionCircle } from "react-icons/bs";

const Modal = (props) => {
  return props.trigger ? (
    <div
      className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-40 outline-none focus:outline-none"
      id="modal-id"
    >
      <div className="absolute bg-black opacity-80 inset-0 z-0" />
      <div
        className="w-full  max-w-md p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white"
        data-aos="zoom-in"
        data-aos-duration="500"
      >
        {/*content*/}
        <div className>
          {/*body*/}
          <div className="text-center p-5 flex-auto justify-center">
            <div className="text-[6rem] -m-1 flex justify-center text-red-500 mx-auto">
              <BsQuestionCircle />
            </div>
            <h2 className="text-xl font-bold py-4 ">Are you sure?</h2>
            <p className="text-sm text-gray-500 px-8">{props.text}</p>
          </div>
          {/*footer*/}
          <div className="p-3  mt-2 text-center space-x-4 md:block">
            <button
              className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
              onClick={() => props.setTrigger(false)}
            >
              Cancel
            </button>
            <button
              className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600"
              onClick={() => props.setTriggerOke(false)}
            >
              Oke
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};
export default Modal;
