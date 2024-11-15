import React, { useState, useEffect } from 'react';

const meals = [
  { id: 1, name: 'Spaghetti', price: 12 },
  { id: 2, name: 'Burger', price: 8 },
  { id: 3, name: 'Pizza', price: 15 },
  { id: 4, name: 'Salad', price: 6 },
  { id: 5, name: 'Steak', price: 20 }
];

const OrderComponent = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [orderCount, setOrderCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isOrderingAllowed, setIsOrderingAllowed] = useState(true);

  const todayDate = new Date().toDateString();

  useEffect(() => {
    // Check if it's within ordering hours (6 PM to 12 AM)
    const currentHour = new Date().getHours();
    if (currentHour < 18 || currentHour >= 24) {
      setIsOrderingAllowed(false);
    }

    // Check the order count for today
    const ordersToday = orderHistory.filter(order => {
      const orderDate = new Date(order.timestamp).toDateString();
      return orderDate === todayDate;
    });

    if (ordersToday.length >= 5) {
      setIsOrderingAllowed(false);
    } else {
      setIsOrderingAllowed(true);
    }

  }, [orderHistory]);

  const handleMealSelect = (meal) => {
    setSelectedMeal(meal);
    setTotalPrice(meal.price);
  };

  const handleOrderSubmit = () => {
    // Check time and order limit before confirming
    const currentHour = new Date().getHours();
    if (currentHour < 18 || currentHour >= 24) {
      alert('You can only order between 6 PM and 12 AM.');
      return;
    }

    const ordersToday = orderHistory.filter(order => {
      const orderDate = new Date(order.timestamp).toDateString();
      return orderDate === todayDate;
    });

    if (ordersToday.length >= 5) {
      alert('You have reached the maximum number of orders for today.');
      return;
    }

    setShowPopup(true);
  };

  const confirmOrder = () => {
    const newOrder = {
      id: orderHistory.length + 1,
      meal: selectedMeal,
      price: selectedMeal.price,
      timestamp: new Date().toISOString(),
    };

    setOrderHistory([...orderHistory, newOrder]);
    setOrderCount(orderCount + 1);
    setShowPopup(false);
    setSelectedMeal(null);
    setTotalPrice(0);
  };

  const cancelOrder = () => {
    setShowPopup(false);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Order Your Meal</h2>

      {isOrderingAllowed ? (
        <>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Meals:</h3>
            <div className="grid grid-cols-2 gap-4">
              {meals.map((meal) => (
                <div
                  key={meal.id}
                  onClick={() => handleMealSelect(meal)}
                  className="cursor-pointer bg-gray-100 p-4 rounded-lg hover:bg-gray-200"
                >
                  <p className="text-lg">{meal.name}</p>
                  <p className="text-sm text-gray-500">${meal.price}</p>
                </div>
              ))}
            </div>
          </div>

          {selectedMeal && (
            <div className="mb-4">
              <p className="font-semibold">Selected Meal: {selectedMeal.name}</p>
              <p>Total Price: ${totalPrice}</p>
            </div>
          )}

          <button
            onClick={handleOrderSubmit}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg w-full disabled:bg-gray-300"
            disabled={!selectedMeal || orderCount >= 5}
          >
            Submit Order
          </button>
        </>
      ) : (
        <p className="text-red-500">You can only order between 6 PM and 12 AM and up to 5 times a day.</p>
      )}

      {/* Order Confirmation Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-xl font-semibold mb-4">Confirm Your Order</h3>
            <p>Meal: {selectedMeal.name}</p>
            <p>Price: ${selectedMeal.price}</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={confirmOrder}
                className="px-4 py-2 bg-green-500 text-white rounded-lg"
              >
                Confirm
              </button>
              <button
                onClick={cancelOrder}
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderComponent;