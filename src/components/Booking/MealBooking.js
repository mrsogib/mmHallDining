import { useState, useEffect } from "react";

const meals = [
  {
    id: 1,
    name: "Fish, Regular",
    price: 45,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Chicken, Regular",
    price: 45,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Egg, Khichuri",
    price: 45,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Lotpoti, Khichuri",
    price: 45,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Feast Meal : Chicken",
    price: 50,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Feast Meal : Beef",
    price: 60,
    image: "https://via.placeholder.com/150",
  },
];

const MealBooking = () => {
  // useState is needed for react rendering purpose
  // const [arr/obj, fn_for_updating_arr/obj] = useState(initial_arr/obj_state)
  const [bookedMeals, setBookedMeals] = useState([]);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [bookings, setBookings] = useState([]);
  const [orderCount, setOrderCount] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const canBook =
    orderCount < 5 &&
    currentTime.getHours() >= 18 &&
    currentTime.getHours() < 24;

  const bookMeal = (meal) => {
    const existingMeal = bookedMeals.find((m) => m.id === meal.id);
    if (existingMeal) {
      setBookedMeals(
        bookedMeals.map((m) =>
          m.id === meal.id ? { ...m, quantity: m.quantity + 1 } : m
        )
      );
    } else {
      setBookedMeals([...bookedMeals, { ...meal, quantity: 1 }]);
    }
  };

  const deleteMeal = (mealId) => {
    const meal = bookedMeals.find((m) => m.id === mealId);
    if (meal.quantity > 1) {
      setBookedMeals(
        bookedMeals.map((m) =>
          m.id === mealId ? { ...m, quantity: m.quantity - 1 } : m
        )
      );
    } else {
      setBookedMeals(bookedMeals.filter((meal) => meal.id !== mealId));
    }
  };

  const submitMeals = () => {
    const totalCost = bookedMeals.reduce(
      (total, meal) => total + meal.price * meal.quantity,
      0
    );
    const newBooking = {
      id: bookings.length + 1,
      meals: bookedMeals,
      totalCost,
      timestamp: new Date(),
    };
    setBookings([...bookings, newBooking]);
    setOrderCount(orderCount + 1);
    setConfirmationMessage(
      `Your meals have been successfully booked! $${totalCost} has been charged to your account.`
    );
    setBookedMeals([]);
  };

  // to "render" how much the ongoing book gonna cost
  const preTotalCost = bookedMeals.reduce(
    (total, meal) => total + meal.price * meal.quantity,
    0
  );
  const remainingOrders = 5 - orderCount;

  return (
    <div className="dark:text-gray-100 max-w-6xl mx-auto p-4">
      <div>
        <p className="text-gray-950 bg-opacity-80 inline-flex mb-4 bg px-2 bg-yellow-200 rounded-lg">
          Bookings are available daily from{" "}
          <b className="px-1">6:00 PM to 12:00 AM</b>.
        </p>
      </div>
      <div>
        <p className="text-gray-950 bg-opacity-80 bg-yellow-200 inline-flex text-lg mb-4 bg px-2 rounded-lg">
          You can make
          <span className="px-1 font-bold"> {remainingOrders} </span> more
          orders.
        </p>
      </div>
      <h1 className="text-3xl my-4">Meal Booking System</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"> */}
        {meals.map((meal) => (
          <div
            key={meal.id}
            className="hover:shadow-2xl dark:hover:shadow-gray-500 mb-4 w-[95%] border rounded-lg shadow-md"
            //className="mb-4 sm:w-[90%] w-[70%] border rounded-lg shadow-md"
          >
            <img
              src={meal.image}
              alt={meal.name}
              className=" rounded-t-lg w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{meal.name}</h2>
              <p className="text-lg font-semibold overflow-auto ">
                ${meal.price}
              </p>
              <button
                onClick={() => bookMeal(meal)}
                className="mt-2 bg-orange-500 text-white px-4 py-2 rounded"
                disabled={!canBook}
              >
                Add Meal
              </button>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-2xl my-4">Booked Meals</h2>
      <div>
        <ul>
          {bookedMeals.map((meal) => (
            <li
              key={meal.id}
              className="inline-flex justify-between items-center border p-2 rounded-lg mt-2"
            >
              <span className="px-2">
                {meal.name} - ${meal.price} x {meal.quantity}
              </span>
              <button
                onClick={() => deleteMeal(meal.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove Item
              </button>
            </li>
          ))}
        </ul>
        {bookedMeals.length > 0 && (
          <>
            <p className="mt-4 text-lg font-bold">
              Total Cost: ${preTotalCost}
            </p>
            <button
              onClick={submitMeals}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
            >
              Book Meals
            </button>
          </>
        )}
        {confirmationMessage && (
          <p className="mt-4 text-green-500 font-bold">{confirmationMessage}</p>
        )}
      </div>
      <h2 className="text-2xl  my-4">Previous Orders</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id} className="border p-4 rounded-lg mt-2">
            <p className="font-bold">Order #{booking.id}</p>
            <p>Placed on: {booking.timestamp.toLocaleString()}</p>
            <ul>
              {booking.meals.map((meal) => (
                <li key={meal.id}>
                  {meal.name} - ${meal.price} x {meal.quantity}
                </li>
              ))}
            </ul>
            <p className="font-bold">Total Cost: {booking.totalCost} BDT.</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealBooking;
