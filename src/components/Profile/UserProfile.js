import React from "react";

export const User = {
  profilePicture: require("../assets/foodBg.png"),
  name: "Mr Rahman",
  adSession: "2023-2024",
  departmanet: "Departent",
  stu_id: "231207",
  allotedHall: "S.M.R. Hall, JUST",
  residentStutus: "Non-Resident",
  roomNo: "N/A",
  email: "Student Email",
  mobile: "01XXX-XXXXXX",
  current_balance: 1500,
  this_month_expense: 500,
  last_payment: {
    date: "01 October 2024",
    amount: 1000,
    medium: "Online Mobile Banking / Bank Receipt",
  },
  expense_details: {
    current_month: {
      month: "Current Month",
      meal_counts: [
        [0, 1, 1],
        [0, 1, 2],
        [0, 3, 1],
        [0, 1, 1],
        [0, 1, 1],
        [0, 1, 2],
        [0, 0, 1],
        [0, 1, 1],
        [0, 1, 1],
        [0, 3, 1],
        [0, 1, 2],
        [0, 1, 2],
        [0, 3, 1],
        [0, 0, 0],
        [0, 1, 1],
        [0, 3, 1],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
    },
    last_month: {
      month: "Last Month",
      day_meals: {
        1: [0, 1, 1],
        2: [0, 1, 2],
        3: [0, 3, 1],
        4: [0, 1, 1],
        5: [0, 1, 1],
        6: [0, 1, 2],
        7: [0, 0, 1],
        8: [0, 1, 1],
        9: [0, 1, 1],
        10: [0, 3, 1],
        11: [0, 1, 2],
        12: [0, 1, 2],
        13: [0, 3, 1],
        14: [0, 0, 0],
        15: [0, 1, 1],
        16: [0, 3, 1],
        17: [0, 1, 2],
        18: [0, 1, 2],
        19: [0, 3, 1],
        20: [0, 1, 1],
        21: [0, 1, 2],
        22: [0, 1, 2],
        23: [0, 3, 1],
        24: [0, 1, 1],
        25: [0, 1, 1],
        26: [0, 3, 1],
        27: [0, 1, 2],
        28: [0, 1, 2],
        29: [0, 0, 0],
        30: [0, 0, 0],
        31: [0, 0, 0],
      },
    },
  },
};

const UserProfile = () => {
  return (
    <div className="dark:text-gray-400 text-gray-700 w-4/5 max-w-5xl mx-auto rounded overflow-hidden">
      <div className="sm:flex  px-6 py-4">
        <img
          className="block sm:mx-0 sm:flex-shrink-0 h-auto w-96"
          src={User.profilePicture}
          alt={User.name}
        />
      </div>
      <div className="px-6 py-4">
      <p className="text-xl dark:text-gray-100 text-gray-900">Student Info :</p>
        <div className=" text-lg mt-4 sm:mt-0 sm:ml-4 sm:text-left">
          <p className="text-3xl dark:text-gray-50 text-gray-950">{User.name}</p>
          <p className="leading-tight ">
            Admission-Session : {User.adSession}
          </p>
          <p className="leading-tight">
            Department : {User.departmanet}
          </p>
          <p className="leading-tight">
            Student ID No : {User.stu_id}
          </p>
        </div>
      </div>

      <div className="px-6 py-4">
        <p className="text-xl dark:text-gray-100 text-gray-900">Resident Info :</p>
        <div className="leading-tight text-lg mt-4 sm:mt-0 sm:ml-4 sm:text-left">
          <p className="">Alloted Hall : {User.allotedHall}</p>
          <p className="">Resident Stutus : {User.residentStutus}</p>
          <p className="">Room No : {User.roomNo}</p>
        </div>
      </div>
      <div className="px-6 py-4">
        <p className=" text-gray-900 dark:text-gray-100 text-xl">Contact Info :</p>
        <div className="leading-tight text-lg mt-4 sm:mt-0 sm:ml-4 sm:text-left">
          <p className="">Email Adress : {User.email}</p>
          <p className="">Mobile : {User.mobile}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
