import appointment from "../../assets/images/appointment.png";

const ContactForm = () => {
    return (
        <section style={{ background: `url(${appointment})` }}>
            <div className="m-auto w-full md:w-[60%] p-6 text-center">
                <h2 className="text-xl font-bold text-[#19D3AE] mb-3">
                    Contact Us
                </h2>
                <h1 className="text-4xl font-semibold text-white mb-5">
                    Stay Connected With Us
                </h1>

                <form action="">
                    <input
                        type="text"
                        placeholder="Email"
                        className="input w-full max-w-md mb-4"
                    />
                    <input
                        type="text"
                        placeholder="Subject"
                        className="input w-full max-w-md mb-4"
                    />

                    <textarea
                        className="textarea  h-24 w-full max-w-md mb-4"
                        placeholder="Your message.."></textarea>
                    <div>
                        <button
                            className="btn "
                            type="submit"
                            style={{
                                background:
                                    "linear-gradient(90deg, #19D3AE -22.5%, #0FCFEC 120.83%)",
                                border: "none",
                            }}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
