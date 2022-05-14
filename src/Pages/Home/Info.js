import React from "react";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
const Info = () => {
    return (
        <div className="container mx-auto p-6">
            <div className="grid grid-rows-3  grid-flow-col md:grid-rows-1 gap-6">
                <div
                    className="p-6 flex flex-col  justify-center items-center rounded-xl text-white md:flex-row md:justify-around "
                    style={{
                        background:
                            " linear-gradient(90deg, #19D3AE -38.67%, #0FCFEC 129.78%)",
                    }}>
                    <img
                        src={clock}
                        width="80px"
                        height="80px"
                        alt="clock.svg"
                    />

                    <div className="mt-3">
                        <h2 className="text-xl font-bold">Opening Hours</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                    </div>
                </div>
                <div
                    className="p-6 flex flex-col  justify-center items-center rounded-xl text-white md:flex-row md:justify-around "
                    style={{
                        background: " #3A4256",
                    }}>
                    <img
                        src={marker}
                        width="62px"
                        height="86px"
                        alt="clock.svg"
                    />

                    <div className="mt-3">
                        <h2 className="text-xl font-bold">
                            Visit Our Location
                        </h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                    </div>
                </div>
                <div
                    className="p-6 flex flex-col  justify-center items-center rounded-xl text-white md:flex-row md:justify-around "
                    style={{
                        background:
                            " linear-gradient(90deg, #19D3AE -38.67%, #0FCFEC 129.78%)",
                    }}>
                    <img
                        src={phone}
                        width="77px"
                        height="77px"
                        alt="clock.svg"
                    />

                    <div className="mt-3">
                        <h2 className="text-xl font-bold">Contact Us Now</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;
