import Chart from "./Chart";

import { User } from "../Profile/UserProfile"


function Dashboard() {
  return (
    <div className=" dark:text-white rounded-lg max-w-6xl mx-auto">
      <div className="flex flex-col py-8 px-16  overflow-y-auto w-full font-mono bg-opacity-100 bg-green-100 dark:bg-gray-800">
        <div className="  dark:text-white ">
          <h1 className="py-4 text-3xl text-gray-700 dark:text-gray-400">Dashboard</h1>
          <span className="text-4xl text-m">
            {User.name} ({User.stu_id})
          </span>
        </div>
        <div className="md:flex">
          <div className="flex flex-col rounded-md border-2 border-green-600 p-4 my-4 md:mr-4 justify-center">
            <h2>Current Balance : <span className="bg-green-400 px-1 rounded">{User.current_balance}</span > BDT  </h2>
          </div>
          <div className="flex flex-col border-red-600 border-2 rounded-md my-4 p-4 justify-start">
            <h2>This Month Expense : <span className="bg-red-400 px-1 rounded">{User.this_month_expense} BDT</span > </h2>
          </div>
        </div>

        <div className="md:flex">
          <div className="md:flex my-4 p-4 flex-col border-violet-600 rounded-md border-2 md:mr-4 justify-center">
            <h2>Last Payment : <span className="bg-purple-400 px-1 rounded">{User.last_payment.amount}</span > BDT </h2>
            <h2>Payment Date : {User.last_payment.date} </h2>
          </div>
          <div className="sm:flex p-4 my-4 border-violet-600 rounded-md border-2">
          <h2 className="inline-block sm:border-b-0 border-b-2 border-gray-900 pr-4 ">Last <b className="bg-purple-400 px-1 rounded">3</b> Payment :</h2>
          <div className="flex flex-col text-[14px]">
            <h2 className="block border-b-2 border-violet-400">800 BDT, 18 September 2024</h2>
            <h2 className="block border-b-2 border-violet-400">500 BDT, 06 September 2024</h2>
            <h2 className="block border-b-2 border-violet-400">1500 BDT, 10 July 2024</h2>
          </div>
        </div>
        </div>

        

        <div className="border-orange-600 h-full w-full rounded-md border  justify-center">
          <div className="text-2xl p-6 w-full">Expenses Graph</div>
          <div className="p-2 block h-full w-full ">
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
