import { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  }
  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex gap-2 mb-2 mt-10 items-center">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          type="text"
          className="border border-gray-300 w-full px-3 py-2"
          placeholder="Your Name"
          required
        />
      )}
      <input
        type="text"
        className="border border-gray-300 w-full px-3 py-2"
        placeholder="Your Email"
        required
      />
      <input
        type="text"
        className="border border-gray-300 w-full px-3 py-2"
        placeholder="Password"
        required
      />
      <div className="w-full flex justify-between text-sm -mt-2">
        <p className="cursor-pointer text-[#daa520] underline">Forgot your password?</p>
        {currentState === "Login" ? (
          <p
            className="cursor-pointer text-[#daa520]"
            onClick={() => setCurrentState("Sign Up")}
          >
            Create Account
          </p>
        ) : (
          <p
            className="cursor-pointer text-[#daa520]"
            onClick={() => setCurrentState("Login")}
          >
            Login Here
          </p>
        )}
      </div>
      <button className="text-sm bg-[#daa520] w-full px-4 py-2 text-white active:bg-[#daa520bc]" type="submit">{currentState === 'Login' ? 'Login' : 'Create Account' }</button>
    </form>
  );
};

export default Login;
