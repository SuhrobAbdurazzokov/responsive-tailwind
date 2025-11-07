import React from "react";
import { PersonIcon } from "../../../assets/icons/person-icon";
import { CarIcon } from "../../../assets/icons/car-icon";
import { GasolineIcon } from "../../../assets/icons/gasoline-icon";
import { CardIcon } from "../../../assets/icons/card-icon";

export const CarCard = ({ carName, carType, img }) => {
    return (
        <div className="bg-[#f5f5f5] rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 pb-3 pt-4 w-full max-w-[380px] mx-auto">
            {/* Header */}
            <div className="px-5 pt-4">
                <h3 className="font-semibold text-lg text-[#1a1a1a]">
                    {carName}
                </h3>
                <p className="text-sm text-[#555] mt-1">{carType}</p>
            </div>

            {/* Image */}
            <div className="w-full h-[200px] flex justify-center items-center mt-3">
                <img
                    src={img}
                    alt={carName}
                    className="object-contain h-full"
                />
            </div>

            {/* Footer */}
            <div className="px-5 py-4 border-t border-gray-200 text-sm text-[#333]">
                <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                        <PersonIcon />
                        <span>5 Seats</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CarIcon />
                        <span>Automatic</span>
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <CardIcon />
                        <span>21+ Years</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <GasolineIcon />
                        <span>1L / 2.5km</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
