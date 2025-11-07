import React from "react";
import banner from "../../assets/svg/banner.jpg";
import { Search } from "./components/search";
import { CarCard } from "./components/car-card";
import { cars } from "../../data/product.js";

export const Home = () => {
    return (
        <div className="container flex flex-col items-center px-4">
            <div className="w-full max-w-[358px] h-[300px] relative">
                <img className="w-full h-full" src={banner} alt="car" />

                <div className="absolute top-10 left-[37px] right-[38px] text-center">
                    <h2 className="font-semibold text-lg text-white">
                        Compact cars
                    </h2>
                    <p className="font-normal text-sm text-white mt-2">
                        Rent cars as you are comfortable and where you are
                        comfortable.
                    </p>
                </div>

                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-[350px]">
                    <Search />
                </div>
            </div>

            <div className="w-full max-w-[359px] mt-20 text-center pb-4">
                <h2 className="font-semibold text-2xl text-black">
                    Choose the car of your dreams
                </h2>
                <p className="text-base text-[#555] mt-4">
                    We provide our customers with the most incredible driving
                    emotions. That is why there are only world-class cars in our
                    fleet.
                </p>

                <div className="flex justify-center gap-3 mt-8">
                    <button className="w-[106px] h-[45px] border border-[#e5e7ea] text-black hover:text-white font-medium rounded-[100px] hover:bg-[#238456] transition cursor-pointer">
                        Compact
                    </button>

                    <button className="w-[119px] h-[45px] border border-[#e5e7ea] text-black hover:text-white font-medium rounded-[100px] hover:bg-[#238456] transition cursor-pointer">
                        Sports cars
                    </button>

                    <button className="w-[75px] h-[45px] border border-[#e5e7ea] text-black hover:text-white font-medium rounded-[100px] hover:bg-[#238456] transition cursor-pointer">
                        Vans
                    </button>
                </div>
            </div>

            {cars.map((item) => (
                <CarCard
                    key={item.id}
                    carName={item.title}
                    carType={item.type}
                    img={item.img}
                />
            ))}

            <button className="cursor-pointer w-[173px] h-[58px] bg-[#238456] rounded-[100px] font-medium text-base text-white flex items-center justify-center mt-5 hover:bg-[#1f734c] transition mb-[30px]">
                View all cars
            </button>
        </div>
    );
};
