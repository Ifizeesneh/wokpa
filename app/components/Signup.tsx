import Image from "next/image";
import React from "react";

const Signup: React.FC = () => {
  return (
    <div className="flex justify-center p-2 flex-col md:flex-row items-center h-screen">
      {/* Left side */}
      <div className="w-full flex flex-col items-center max-w-lg p-4">
        <div className="md:text-xl font-bold mb-8">
        Create an acoount
        </div>


        <div className="flex items-center mb-4">
          <button className="bg-[#EEEEEE] flex items-center gap-2 text-[#282828] px-6 py-3 rounded-3xl mr-4">
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
        <div className="flex items-center mb-4">
          <button className="bg-[#EEEEEE] flex items-center gap-2 text-[#282828] px-6 py-3 rounded-3xl mr-4">
            <span>
              <Image
                src="/Google.svg"
                alt="Login Image"
                className="w-full h-auto"
                width={50}
                height={50}
              />
            </span>{" "}
            Continue with Facebook
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
        <div className="flex items-center mb-4">
          <button className="bg-[#EEEEEE] flex items-center gap-2 text-[#282828] px-6 py-3 rounded-3xl mr-4">
            <span>
              <Image
                src="/Google.svg"
                alt="Login Image"
                className="w-full h-auto"
                width={50}
                height={50}
              />
            </span>{" "}
            Continue with apple ID
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
        <div className="flex items-center mb-4">
          <button className="bg-[#EEEEEE] flex items-center gap-2 text-[#282828] px-6 py-3 rounded-3xl mr-4">
            <span>
              <Image
                src="/Google.svg"
                alt="Login Image"
                className="w-full h-auto"
                width={50}
                height={50}
              />
            </span>{" "}
            Create account with your email
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
        <div className="mt-4">Already have an account? <span>Log in</span></div>
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

export default Signup;
