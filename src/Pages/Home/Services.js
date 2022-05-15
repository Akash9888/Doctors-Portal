import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
const Services = () => {
    return (
        <div className="container mx-auto p-6 text-center my-10">
            <h6 className="text-xl font-bold text-[#19D3AE]">OUR SERVICES</h6>
            <h2 className="text-4xl font-normal text-[#3A4256]">
                Service We Provide
            </h2>
            <div className="grid grid-rows-3  grid-flow-col md:grid-rows-1 gap-6 my-10">
                <div
                    className="p-6 flex flex-col  justify-center items-center rounded-xl border bg-white  drop-shadow-2xl

">
                    <img
                        src={fluoride}
                        width="115px"
                        height="115px"
                        alt="clock.svg"
                    />

                    <div className="mt-6">
                        <h2 className="text-xl font-bold text-[#3A4256s]">
                            Fluoride Treatment
                        </h2>
                        <p className="text-lg font-normal">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Facere eum repudiandae voluptates sit totam
                            reiciendis expedita eveniet.
                        </p>
                    </div>
                </div>
                <div className="p-6 flex flex-col  justify-center items-center rounded-xl bg-white  drop-shadow-2xl">
                    <img
                        src={cavity}
                        width="100px"
                        height="115px"
                        alt="cavity.png"
                    />

                    <div className="mt-6">
                        <h2 className="text-xl font-bold text-[#3A4256s]">
                            Cavity Filling
                        </h2>
                        <p className="text-lg font-normal">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Facere eum repudiandae voluptates sit totam
                        </p>
                    </div>
                </div>
                <div className="p-6 flex flex-col  justify-center items-center rounded-xl bg-white  drop-shadow-2xl ">
                    <img
                        src={whitening}
                        width="100px"
                        height="115px"
                        alt="whitening.png"
                    />

                    <div className="mt-6">
                        <h2 className="text-xl font-bold text-[#3A4256s]">
                            Teeth Whitening
                        </h2>
                        <p className="text-lg font-normal">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Facere eum repudiandae voluptates sit totam
                            reiciendis expedita eveniet.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
