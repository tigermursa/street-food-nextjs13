import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-9  font-mono font-extrabold">
      <h1 className="text-6xl">Hello My name is Mursalin Hossain</h1>
      <br />
      <h2 className="text-5xl">Welcome To my Next js 13 Project</h2>
      <br />
      <h3 className="text-4xl">I am going to make a street food website here</h3>
      <Link href="/practice">  <button className="p-4 bg-slate-300 rounded-full">Go</button></Link>
    
    </div>
  );
};

export default page;
