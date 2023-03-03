import React from "react";
import HomeCard from "../admin/HomeCard";
import { adminNavs } from "../../constants/data";

const AdminHome = () => {
  return (
    <div className="min-w-[450px] min-h-[470px] grid content-around grid-cols-2 md:grid-cols-3">
      {adminNavs.map((nav) => (
        <div className="flex justify-center" key={nav.id}>
          <HomeCard
            key={nav.id + "-card"}
            title={nav.title}
            icon={nav.icon}
            to={nav.to}
          />
        </div>
      ))}
    </div>
  );
};

export default AdminHome;
