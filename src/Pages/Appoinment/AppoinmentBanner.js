import { useState } from "react";
import chair from "../../assets/images/chair.png";
import "react-calendar/dist/Calendar.css";
import { Calendar } from "react-calendar";
const AppoinmentBanner = ({ date, setDate }) => {
    const onChange = (newDate) => {
        setDate(newDate);
    };

    return (
        <section>
            <div className=" hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img
                        src={chair}
                        className="w-full md:max-w-lg lg:ml-10 rounded-lg shadow-2xl"
                    />

                    <Calendar
                        className="w-full"
                        onChange={onChange}
                        value={date}
                    />
                </div>
            </div>
        </section>
    );
};

export default AppoinmentBanner;
