import Image from 'next/image';
import React from 'react';


const SideNav = () => {
  return (
    <div className="bg-gray-800 h-screen p-4 w-[15%]">
      <div className="text-white mb-8"> 
      <div>
      <Image
        src="/Logo.svg"
        width={100}
        height={100}
        alt="Wokpa Logo"
      />
    </div>
      </div>

      {/*side menu items*/}
      <ul>
        <li className="text-white text-lg">Discover</li>
        <li className="text-white text-lg">Top 50 podcast</li>
        <li className="text-white text-lg">Categories</li>
        <li className="text-white text-lg">Add your Podcast</li>
      </ul>
    </div>
  );
};

export default SideNav;
