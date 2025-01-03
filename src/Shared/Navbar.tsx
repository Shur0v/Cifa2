
import logo from "../assets/img/logo.svg";
import menu from "../assets/img/menu.svg";

const Navbar = () => {
  return (
    <div>
      <div className="nav w-full h-auto py-1 bg-color8/5 bg-opacity-25 absolute">
        <div className="items container mx-auto flex justify-between items-center p-1">
          {/* Logo */}
          <div className="logo flex-shrink-0 pl-3 sm:pl-0 sm:order-2 sm:mx-auto">
            <img src={logo} alt="" />
          </div>

          {/* Buttons */}
          <div className="button text-color1 flex items-center space-x-2 pr-3 sm:order-3 sm:pr-0">
            <button className="px-3 py-1 sm:px-6 sm:py-2 border-2 border-color2 bg-color3 text-lg font-medium rounded-lg">
              Login
            </button>
            <button className="px-3 py-1 sm:px-6 hidden sm:block sm:py-2 border-2 border-color2 bg-color3 text-lg font-medium rounded-lg">
              Register
            </button>
          </div>

          {/* Toggle */}
          <div className="toggle text-color1 flex-shrink-0 pr-6 sm:order-1 sm:pr-0">
            <img src={menu} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
