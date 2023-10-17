import React from 'react';
import Link from 'next/link'

const TopNav = () => {
  return (
    <div className="bg-gray-600 py-5 p-4 flex w-full items-center">
       <div className="flex items-center w-full">
        <input
          type="text"
          placeholder="Search by Podcast Name, Host name, Categories, Tags..."
          className="bg-white p-2 py-3 rounded-lg pr-10 w-full max-w-lg"
        />
        <span className="absolute right-4 top-4">
          {/*search icon */}
         
        </span>
      </div>
      <div className="flex items-center gap-4 w-full max-w-sm">
        <button className="">Download the App</button>
        <button><Link href="/signup">Signup</Link></button>
        <button><Link href="/login">Login</Link></button>
      </div>
    </div>
  );
};

export default TopNav;
