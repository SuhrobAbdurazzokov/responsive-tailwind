import React from "react";
import { SearchIcon } from "../../../assets/icons/search-icon";

export const Search = () => {
    return (
        <div className="relative w-full h-[60px] ">
            <input
                className="h-full w-full rounded-full pl-4 pr-16 shadow-2xl focus: outline-none bg-white"
                type="text"
                placeholder="Find the car of your dreams"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#299764] rounded-full p-3">
                <SearchIcon />
            </div>
        </div>
    );
};
