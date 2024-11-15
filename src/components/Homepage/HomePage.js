import React from "react";
import foodBg from "../assets/foodBg.png";
import MealPreviw from "./MealPreview";

const HomePage = () => {
  return (
    <main className=" ">
      <div
        className=" min-h-96  bg-cover bg-center"
        style={{ backgroundImage: `url(${foodBg})` }}
      >
        <div className=" min-h-96  bg-cover bg-center bg-gray-100 dark:bg-gray-800 bg-opacity-20 dark:bg-opacity-25">
          <div className="max-w-6xl w-4/5 mx-auto pt-16 px-4 sm:px-6 lg:px-8 text-gray-50 ">
            <h2 className=" pt-16 text-3xl sm:text-6xl font-semibold">
              Welcome...
            </h2>
            <div className=" text-gray-100">
              <h2 className="pt-8 text-2xl sm:text-4xl">
                Munshi Meherullah Hall Dining
              </h2>
              Manage your reservations, menus, and more with ease.
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl">
        <MealPreviw />
      </div>
    </main>
  );
};

export default HomePage;
