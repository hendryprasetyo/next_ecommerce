import { BiErrorCircle } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { unauthPage } from "../../middlewares/authorizationPage";

import Link from "next/link";
import ReactTypingEffect from "react-typing-effect";

import styles from "./Register.module.css";
import { Footer, Loading, DashboardPopup } from "../../components";
import { useAuthContext } from "../../context/AuthContext";
import { AuthContext } from "../../context/AuthContext";
/* secure rouing */
export async function getServerSideProps(ctx) {
  await unauthPage(ctx);

  return {
    props: {},
  };
}

export default function Register() {
  const {
    doRegist,
    setMsgErr,
    setField,
    msgErr,
    msgSuccess,
    setMsgSuccess,
    field,
    loading,
    setLoading,
  } = useAuthContext();

  /* function input from user register */
  function setValue(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setField({
      ...field,
      [name]: value,
    });
  }

  /* function handle loading */
  function handleLoading() {
    setLoading(false);
  }

  return (
    <>
      <div className="bg-[#28292d]">
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

        {/* main register */}
        <div className={styles["container-register"]}>
          <div className={styles["box-register"]}>
            <form onSubmit={doRegist} className={styles["form-register"]}>
              <ReactTypingEffect
                text={"Sign Up"}
                speed={150}
                eraseDelay={1000}
                eraseSpeed={130}
                typingDelay={100}
                className="m-auto text-[1.8rem] text-[#45f4ff] mb-[-.5rem] mt-[-0.5rem]"
              />
              <div className={styles["inputBox-register"]}>
                <input
                  type="integer"
                  required
                  name="email"
                  onChange={setValue}
                />
                <span>Email</span>
                <i></i>
              </div>
              <div className={styles["inputBox-register"]}>
                <input
                  type="text"
                  required
                  name="username"
                  onChange={setValue}
                />
                <span>Username</span>
                <i></i>
              </div>
              <div className={styles["inputBox-register"]}>
                <input type="text" required name="name" onChange={setValue} />
                <span>Name</span>
                <i></i>
              </div>
              <div className={styles["inputBox-register"]}>
                <input
                  type="password"
                  required
                  name="password"
                  onChange={setValue}
                />
                <span>Password</span>
                <i></i>
              </div>
              <div className={styles["inputBox-register"]}>
                <input
                  type="password"
                  required
                  name="confPassword"
                  onChange={setValue}
                />
                <span>Confirm Password</span>
                <i></i>
              </div>

              {/* button go to login */}
              <div className={styles["links"]} onClick={handleLoading}>
                <Link
                  href={"/auth/login"}
                  className="text-[#45f3ff] mt-6 border border-[#45f3ff]  px-2 rounded-lg hover:py-1 transition-all"
                >
                  Login
                </Link>
              </div>
              <button type="submit" className={styles["btn-register"]}>
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

Register.getLayout = function PageLayout(page) {
  return (
    <>
      <AuthContext>
        {page}
        <Footer />
      </AuthContext>
    </>
  );
};
