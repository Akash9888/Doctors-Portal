import React from "react";
import chair from "../../assets/images/chair.png";

const HomeBanner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={chair}
                    className="w-full md:max-w-2xl rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-4xl font-bold text-[#3A4256] md:text-5xl ">
                        Your New Smile Starts Here
                    </h1>
                    <p className="py-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                    <button
                        className="btn  "
                        style={{
                            background:
                                "linear-gradient(90deg, #19D3AE -22.5%, #0FCFEC 120.83%)",
                            border: "none",
                        }}>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;
