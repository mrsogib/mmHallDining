import foodBg from "../assets/foodBg.png";

const Items = [
  {
    image: foodBg, // Replace with your image path
    title: "Fish Curry",
    description: "A tasty and healthy meal to enjoy.",
  },
  {
    image: require("../assets/foodBg.png"), // Replace with your image path
    title: "Chicken Curry",
    description: "An exquisite gourmet dish for special occasions.",
  },
  {
    image: require("../assets/foodBg.png"), // Replace with your image path
    title: "Egg Curry",
    description: "A fresh and nutritious salad.",
  },
  {
    image: require("../assets/foodBg.png"), // Replace with your image path
    title: "Khuchuri",
    description: "A sweet and delightful dessert.",
  },
  {
    image: require("../assets/foodBg.png"), // Replace with your image path
    title: "Biriyani",
    description: "A sweet and delightful dessert.",
  },
  {
    image: require("../assets/foodBg.png"), // Replace with your image path
    title: "Feast Meal",
    description: "A sweet and delightful dessert.",
  },
];

const MealPreviw = ({ image, title, description }) => {
  return (
    // "pb-1" is critical. don't remove !
    <div className="pt-6 pb-1"> 
      <div className="">
        {Items.map((item) => (
          <div
            key={item.name}
            className="md:flex mx-auto bg-orange-400 bg-opacity-25 w-4/5 rounded-lg shadow-md overflow-hidden  mb-6 text-sm font-medium"
          >
            <img
              className=" md:h-auto h-64 md:w-1/2 w-full"
              src={item.image}
              alt={item.title}
            />
            <div className="m-6 ">
              <p className="m-6 text-3xl md:text-5xl mt-2 text-orange-600">{item.title}</p>
              <p className="m-6 text-orange-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MealPreviw;
