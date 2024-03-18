import React, { useState } from "react";

import "./index.css";

import items from "./data";
import Menu from "./menu";
import Categories from "./categories";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
console.log(allCategories);
const OurMenu = () => {
  document.title = "Our Menu";
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    const newItems = items.filter((item) => item.category === category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default OurMenu;
