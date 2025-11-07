import React from "react";
import banner from "../../assets/svg/banner.jpg";
import { Search } from "./components/search";
import { CarCard } from "./components/car-card";
import { cars } from "../../data/product.js";

export const Home = () => {
    return (
        <section className="container mx-auto flex flex-col items-center px-4">
            <div className="relative w-full max-w-[1440px] h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-md mt-5">
                <img
                    className="w-full h-full object-cover"
                    src={banner}
                    alt="car"
                />

                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-center px-4">
                    <h2 className="font-semibold text-xl sm:text-2xl lg:text-4xl text-white drop-shadow-md">
                        Compact Cars
                    </h2>
                    <p className="font-normal text-sm sm:text-base text-white mt-2 max-w-[500px] mx-auto">
                        Rent cars as you are comfortable and where you are
                        comfortable.
                    </p>
                </div>

                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[600px]">
                    <Search />
                </div>
            </div>

            <div className="w-full max-w-[700px] mt-20 text-center pb-4">
                <h2 className="font-semibold text-2xl sm:text-3xl text-black">
                    Choose the car of your dreams
                </h2>
                <p className="text-sm sm:text-base text-[#555] mt-4">
                    We provide our customers with the most incredible driving
                    emotions. That’s why there are only world-class cars in our
                    fleet.
                </p>

                <div className="flex flex-wrap justify-center gap-3 mt-8">
                    <button className="w-[106px] h-[45px] border border-[#e5e7ea] text-black hover:text-white font-medium rounded-full hover:bg-[#238456] transition cursor-pointer">
                        Compact
                    </button>

                    <button className="w-[130px] h-[45px] border border-[#e5e7ea] text-black hover:text-white font-medium rounded-full hover:bg-[#238456] transition cursor-pointer">
                        Sports cars
                    </button>

                    <button className="w-[90px] h-[45px] border border-[#e5e7ea] text-black hover:text-white font-medium rounded-full hover:bg-[#238456] transition cursor-pointer">
                        Vans
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-10 w-full max-w-[1200px] px-4">
                {cars.map((item) => (
                    <CarCard
                        key={item.id}
                        carName={item.title}
                        carType={item.type}
                        img={item.img}
                    />
                ))}
            </div>

            <button className="cursor-pointer w-[173px] h-[58px] bg-[#238456] rounded-full font-medium text-base text-white flex items-center justify-center mt-10 hover:bg-[#1f734c] transition mb-[50px]">
                View all cars
            </button>
        </section>
    );
};
