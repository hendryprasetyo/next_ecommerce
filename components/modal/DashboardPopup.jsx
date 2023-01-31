import "aos/dist/aos.css";

export default function DashboardPopup(props) {
  return props.trigger ? (
    <>
      <div className="modal fade fixed top-0 bg-blue w-full items-center h-full outline-none overflow-x-hidden overflow-y-auto flex  justify-center z-20">
        <div className="modal-dialog modal-dialog-centered relative w-2/4 pointer-events-none">
          <div
            className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-black bg-clip-padding rounded-md outline-none text-current"
            data-aos="zoom-in"
            data-aos-duration="500"
          >
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 rounded-t-md">
              <div className="modal-body relative m-auto ">{props.icon}</div>
            </div>
            <div className="modal-body relative p-4 flex justify-center">
              <h1 className="text-white font-sans">{props.title}</h1>
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-center p-4 rounded-b-md">
              <button
                type="button"
                className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 activ e:bg-purple-800 transition duration-150 ease-in-out"
                onClick={() => props.setTrigger(false)}
              >
                {props.btn}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    ""
  );
}
