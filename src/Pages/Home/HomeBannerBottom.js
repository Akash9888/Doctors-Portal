import treatment from "../../assets/images/treatment.png";

const HomeBannerBottom = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={treatment}
                    className="w-full md:max-w-md lg:mr-10 rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-4xl font-bold text-[#3A4256] md:text-5xl ">
                        Exceptional Dental Care, on Your Terms
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

export default HomeBannerBottom;
