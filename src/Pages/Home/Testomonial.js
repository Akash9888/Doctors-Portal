import React from "react";
import people1 from "../../assets/images/people1.png";
const Testomonial = () => {
    return (
        <section className="container mx-auto p-6 my-20">
            <h2 className="text-xl font-bold text-[#19D3AE] mb-5 ">
                Testomonial
            </h2>
            <h1 className="text-4xl font-semibold text-[#3A4256] mb-5">
                What Our Patient Says
            </h1>
            <div className="grid grid-rows-3 grid-flow-col md:grid-rows-1 gap-6">
                <div className="p-6 rounded-xl border bg-white  drop-shadow-2xl">
                    <p className="text-base font-normal text-black">
                        It is a long established fact that by the readable
                        content of a lot layout. The point of using Lorem a
                        more-or-less normal distribu to using Content here,
                        content
                    </p>
                    <div className="flex  items-center mt-8 space-x-5">
                        <div className="avatar">
                            <div className="w-[75px] h-[75px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={people1} />
                            </div>
                        </div>
                        {/* <img src={people1} width="75px" height="75px" alt="" /> */}
                        <div>
                            <h6>Akash</h6>
                            <p>California</p>
                        </div>
                    </div>
                </div>
                <div className="p-6 rounded-xl border bg-white  drop-shadow-2xl">
                    <p className="text-base font-normal text-black">
                        It is a long established fact that by the readable
                        content of a lot layout. The point of using Lorem a
                        more-or-less normal distribu to using Content here,
                        content
                    </p>
                    <div className="flex  items-center mt-8 space-x-5">
                        <div className="avatar">
                            <div className="w-[75px] h-[75px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={people1} />
                            </div>
                        </div>
                        {/* <img src={people1} width="75px" height="75px" alt="" /> */}
                        <div>
                            <h6>Akash</h6>
                            <p>California</p>
                        </div>
                    </div>
                </div>
                <div className="p-6 rounded-xl border bg-white  drop-shadow-2xl">
                    <p className="text-base font-normal text-black">
                        It is a long established fact that by the readable
                        content of a lot layout. The point of using Lorem a
                        more-or-less normal distribu to using Content here,
                        content
                    </p>
                    <div className="flex  items-center mt-8 space-x-5">
                        <div className="avatar">
                            <div className="w-[75px] h-[75px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={people1} />
                            </div>
                        </div>
                        {/* <img src={people1} width="75px" height="75px" alt="" /> */}
                        <div>
                            <h6>Akash</h6>
                            <p>California</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testomonial;
