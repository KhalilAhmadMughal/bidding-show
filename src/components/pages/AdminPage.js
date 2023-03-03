import React, { useState, useEffect } from "react";
import SideBar from "../admin/SideBar";
import AdminNavbar from "../admin/AdminNavbar";
import ProductTable from "../admin/ProductTable";

const AdminPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((Response) => Response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <section className="bg-primary w-full min-h-screen h-full text-white font-poppins">
      <header className="fixed w-full flex justify-end black-gradient-2__bg z-20">
        <AdminNavbar />
      </header>
      <main className="flex pt-16 relative w-full h-full">
        <aside className="fixed -left-[100%] sm:left-0 sm:w-[20%]">
          <SideBar />
        </aside>
        <section className="w-full flex sm:justify-end">
          <div className="sm:w-[80%] p-4">
            <ProductTable products={products} />
          </div>
        </section>
      </main>
    </section>
  );
};

export default AdminPage;
