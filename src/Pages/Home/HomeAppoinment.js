import doctor from "../../assets/images/doctor-small.png";
import appointment from "../../assets/images/appointment.png";

const HomeAppoinment = () => {
    return (
        <section
            className="flex justify-center items-center my-20 "
            style={{ background: `url(${appointment})` }}>
            <div className="flex-1 hidden lg:block mt-[-150px]">
                <img src={doctor} alt="" />
            </div>
            <div className="flex-1 p-6">
                <h2 className="text-xl font-bold text-[#19D3AE] mb-5 ">
                    Appoinment
                </h2>
                <h1 className="text-4xl font-semibold text-white mb-5">
                    Make an appointment Today
                </h1>
                <p className="text-lg text-white font-normal mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus quod odio incidunt voluptatibus. Corrupti magnam
                    accusantium fugiat quae vero, esse labore culpa? Laboriosam,
                    provident, aliquam vero ipsam nam architecto delectus
                    consequuntur quas sint labore cupiditate expedita aliquid
                    nesciunt quos atque.
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
        </section>
    );
};

export default HomeAppoinment;
