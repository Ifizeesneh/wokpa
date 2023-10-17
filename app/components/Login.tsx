// Login.tsx

import Image from "next/image";
import React from "react";

const Login: React.FC = () => {
  return (
    <div className="flex justify-center p-2 flex-col md:flex-row items-center h-screen">
      {/* Left side */}
      <div className="w-full flex flex-col items-center max-w-lg p-4">
        <div className="md:text-xl font-bold mb-8">
          Log in with your socials below
        </div>

        {/* Google Login */}
        <div className="flex items-center mb-4">
          <button className="bg-[#EEEEEE] flex items-center gap-2 text-[#282828] px-6 py-4 rounded-3xl mr-4">
            <span>
              <Image
                src="/Google.svg"
                alt="Login Image"
                className="w-full h-auto"
                width={50}
                height={50}
              />
            </span>{" "}
            Continue with Google
            <span className="ml-7">
              <Image
                src="/ArrowDown.svg"
                alt="Login Image"
                className="w-full h-auto"
                width={50}
                height={50}
              />
            </span>
          </button>
        </div>

        {/* Email Login */}
        <div className="text-2xl font-bold mb-4">Log in with Email</div>
        <div className="mb-4 w-full max-w-sm">
          <input
            type="email"
            placeholder="Ifeoluwa@xyz"
            className="w-full px-3 py-4 bg-[#141414]  border rounded-3xl"
          />
        </div>
        <div className="mb-4 w-full max-w-sm">
          <input
            type="password"
            placeholder="******"
            className="w-full px-3 py-4 bg-[#141414]  border rounded-3xl"
          />
        </div>
        <div className="flex w-full justify-around  tems-center mt-6">
        <button className="bg-[#7B61FF] text-white px-6 py-3 i rounded-3xl w-28  mb-4">
          Log In
        </button>
        <p className="text-sm mt-6 text-gray-600">
          Forgot your password?
        </p>
        </div>

        

       
      </div>

      {/* Right side */}
      <div className="w-full max-w-xl">
        <Image
          src="/login.svg"
          alt="Login Image"
          className="w-full h-auto"
          width={200}
          height={100}
        />
        <div className="text-center text-[#7B61FF] font-bold text-3xl mt-4">Join a community of podcast lovers and creators</div>
      </div>
    </div>
  );
};

export default Login;
