const links = [
  {
    name: "Website",
    href: "#",
    // icon: require("./assets/facebook-icon.png"),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com",
    // icon: require("./assets/facebook-icon.png"),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com",
    // icon: require("./assets/instagram-icon.png"),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com",
    // icon: require("./assets/linkedin-icon.png"),
  },
];

const Footer = () => {
  return (
    <footer className="font-bolder text-gray-300 bg-gray-900">
      <div className="border-b-gray-200 mx-auto sm:w-3/4 max-w-3xl ">
        <div className="p-2 flex justify-between">
          {links.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="bg-gray-400 bg-opacity-25 rounded-md mx-2 p-2 place-self-center text-sm font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
      <p className="text-center py-2 ">
        All rights Preserved by © M.M. Hall, JUST.
      </p>
    </footer>
  );
};

export default Footer;
