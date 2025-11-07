import logo from "../../assets/svg/logo.svg";
import { MenuIcon } from "../../assets/icons/menu-icon";

export const Header = () => {
    return (
        <div className="container flex items-center justify-between h-16 px-4 mt-5 pb-10 w-[400px]">
            <img src={logo} alt="Logo" className="h-10 w-[150px]" />
            <span className="cursor-pointer">
                <MenuIcon />
            </span>
        </div>
    );
};
