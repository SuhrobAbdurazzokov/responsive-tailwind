import logo from "../../assets/svg/logo.svg";
import { MenuIcon } from "../../assets/icons/menu-icon";
import moon from "../../assets/svg/moon.svg";
import login from "../../assets/svg/login.svg";

export const Header = () => {
    return (
        <header className="container mx-auto flex items-center justify-between h-20 px-4 mt-5 w-full max-w-[1440px]">
            <img src={logo} alt="Logo" className="h-10 w-auto" />

            <nav className="hidden lg:flex items-center gap-8">
                <p className="text-gray-700 hover:text-[#238456] cursor-pointer transition">
                    Categories
                </p>
                <p className="text-gray-700 hover:text-[#238456] cursor-pointer transition">
                    About Us
                </p>
                <p className="text-gray-700 hover:text-[#238456] cursor-pointer transition">
                    Help Center
                </p>
            </nav>

            <div className="hidden lg:flex items-center gap-6">
                <p className="text-gray-800 font-medium whitespace-nowrap">
                    +1 855 420 0000
                </p>

                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 flex items-center justify-center bg-[#f5f5f5] rounded-full cursor-pointer hover:bg-[#eaeaea] transition">
                        <img src={moon} alt="Dark mode" className="w-5 h-5" />
                    </div>

                    <button className="flex items-center gap-2 px-4 h-12 bg-[#238456] rounded-full text-white font-medium hover:bg-[#1d6d47] transition">
                        <span>Login</span>
                        <img src={login} alt="Login" className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="lg:hidden cursor-pointer">
                <MenuIcon />
            </div>
        </header>
    );
};
