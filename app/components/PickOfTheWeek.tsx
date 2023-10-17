import Image from "next/image";
import React from "react";

const PickOfTheWeek = () => {
  return (
    <div className="p-4 w-full">
      <h2 className="text-2xl text-white font-semibold mb-4">Pick of the Week</h2>
      <div className="flex flex-col md:flex-row">
      <div className=" relative w-full max-w-lg">
          <Image src="/Rectangle 153.svg" className="w-full" width={600} height={600} alt="Frankly speaking" />
          <div className="absolute bottom-[10%] right-6 md:bottom-[10%] md:right-8">
            <Image src="/Listen.svg" width={140} height={140} alt="New Image" />
          </div>
          </div>
        <div className="">
          <div className="flex justify-between">
            <div>
              <h2 className="text-white">Top category</h2>
              <span>......</span>
            </div>
            <div>
              <button className="text-[#1EAEA3]">see all</button>
            </div>
          </div>
          <div className="flex flex-col w-full md:flex-row">
            <Image src="/wtf.svg" className="w-full" width={200} height={200} alt="Wokpa Logo" />
            <Image src="/TheJoe.svg" className="w-full" width={200} height={200} alt="Wokpa Logo" />
            <Image src="/HowDid.svg" className="w-full" width={200} height={200} alt="Wokpa Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickOfTheWeek;
