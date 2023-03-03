import React from "react";
import { BiConfused } from "react-icons/bi";

const NotFoundPage = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-6">
      <BiConfused size={100} />
      <h1 className="capitalize text-5xl">404 page not found!</h1>
    </div>
  );
};

export default NotFoundPage;
