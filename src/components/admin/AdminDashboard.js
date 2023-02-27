import React, { useState } from "react";
import SideBar from "./SideBar";
import AdminNavbar from "./AdminNavbar";
import ProductTable from "./ProductTable";

const AdminDashboard = () => {
  const [toggle, SetToggle] = useState(false);

  const toggleHandler = () => {
    SetToggle(!toggle);
  };

  return (
    <section>
      <header>
        <AdminNavbar sidebarHandler={toggleHandler} />
      </header>
      <main className="flex">
        <aside
          className={`${
            toggle ? "fixed md:relative w-[30%] sm:w-[20%]" : "hidden"
          }`}
        >
          <SideBar />
        </aside>
        <section className="w-full p-4">
          <ProductTable />
        </section>
      </main>
    </section>
  );
};

export default AdminDashboard;
