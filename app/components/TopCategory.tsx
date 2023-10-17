import Image from "next/image";
import React from "react";

const TopCategory = () => {
  return (
    <div className="p-4  bg-[#30303080] rounded-xl w-full max-w-7xl">
        
      <h2 className="text-2xl font-semibold mb-4">
        <span className="flex items-center">
        <Image src="/category.svg" width={80} height={80} alt="category" />
        <h2>Top Categories</h2> 
        </span>
      </h2>
      <div className="flex">
      <div className="flex flex-col space-y-3 justify-between w-full">
        {/* Top Buttons */}
        <div className="flex gap-4">
        <button className="bg-[#575757] text-white p-2 px-4 rounded-md shadow-md hover:bg-gray-500">
           <span className="flex gap-2">
           <Image src="/image 18.svg"  width={30} height={30} alt="Frankly speaking" />
           <h3>Comedy</h3>
            </span> 
          </button>
           <button className="bg-[#575757] text-white p-2 w-22 rounded-md shadow-md hover:bg-gray-500">
           <span className="flex items-center gap-2  w-full">
           <Image src="/health.svg"  width={30} height={30} alt="Frankly speaking" />
           <h3 className="text-sm">Health & Fitness </h3>
            </span> 
          </button>
           <button className="bg-[#575757] text-white p-2 rounded-md shadow-md hover:bg-gray-500">
           <span className="flex gap-2 items-center">
           <Image src="/love.svg"  width={30} height={30} alt="Frankly speaking" />
           <h3>Love & Romance</h3>
            </span> 
          </button>
           <button className="bg-[#575757] text-white p-2 px-4 rounded-md shadow-md hover:bg-gray-500">
           <span className="flex gap-2 items-center">
           <Image src="/education.svg"  width={30} height={30} alt="Frankly speaking" />
           <h3 className="text-sm">Education</h3>
            </span> 
          </button>
           <button className="bg-[#575757] text-white p-2 px-4 rounded-md shadow-md hover:bg-gray-500">
           <span className="flex gap-2 items-center">
           <Image src="/religion.svg"  width={30} height={30} alt="Frankly speaking" />
           <h3 className="text-sm">Religion</h3>
            </span> 
          </button>
        </div>

        {/* Bottom Buttons */}
        <div className="flex gap-4">
           <button className="bg-[#575757] text-white p-2 px-4 rounded-md shadow-md hover:bg-gray-500">
           <span className="flex gap-2 items-center">
           <Image src="/music.svg"  width={30} height={30} alt="Frankly speaking" />
           <h3>Music</h3>
            </span> 
          </button>
           <button className="bg-[#575757] text-white p-2 px-4 rounded-md shadow-md hover:bg-gray-500">
           <span className="flex gap-2 items-center">
           <Image src="/tech.svg"  width={30} height={30} alt="Frankly speaking" />
           <h3>Technology</h3>
            </span> 
          </button>
           <button className="bg-[#575757] text-white p-2 px-4 rounded-md shadow-md hover:bg-gray-500">
           <span className="flex gap-2 items-center">
           <Image src="/government.svg"  width={30} height={30} alt="Frankly speaking" />
           <h3>Government & Politics</h3>
            </span> 
          </button>
        </div>
      </div>

      <div className="flex w-full max-w-xs">
        <button className=" w-full text-[#1EAEA3] p-2 rounded-md shadow-md hover:bg-gray-600">
       <span className="flex items-center gap-2 text-lg">See All Category <Image src="/Vector.svg"  width={8} height={8} alt="Frankly speaking" /> </span>
        </button>
      </div>
      </div>
    </div>
  );
};

export default TopCategory;
