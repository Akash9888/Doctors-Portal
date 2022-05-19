import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../Firebase/FirebaseConfig";
import useBooking from "../../hooks/useBooking";
import Progress from "../../Components/Progress";
import axios from "axios";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
const BookingModal = ({ details, date, setDetails }) => {
    const [user] = useAuthState(auth);
    const { saveBookingData, loading, error, data } = useBooking(
        "http://localhost:5000/save/bookingData"
    );
    console.log("----------------------------------------");
    console.log(data);
    console.log(loading);
    console.log(error.message);
    console.log("***************");
    if (error) {
        toast.error(error.message);
    }
    if (loading) {
        console.log("load");
        return <Progress />;
    }
    if (data.length > 0) {
        console.log("########");
        console.log(data.length);
        toast(data);
        // console.log(data.status);
        // if (data.status == "failed") {
        //     toast.error("Allready have an appointment");
        // } else {
        //     toast.success("Appointment booked successfully");
        // }
    }
    let bookingData = {};
    const booking = (e) => {
        e.preventDefault();

        bookingData.treatmentType = details.name;
        bookingData.slot = e.target.slot.value;
        bookingData.date = e.target.date.value;
        bookingData.name = user?.displayName;
        bookingData.email = user?.email;
        bookingData.phone = e.target.phone.value;

        saveBookingData(bookingData);
    };
    return (
        <div>
            <input
                type="checkbox"
                id="booking-modal"
                className="modal-toggle"
            />
            <div className="modal ">
                <div className="modal-box relative">
                    <label
                        for="booking-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2">
                        ✕
                    </label>
                    <h3 className="text-xl text-black font-semibold">
                        {details.name}
                    </h3>
                    <form onSubmit={booking}>
                        <label className="label">
                            <span className="label-text ">Date</span>
                        </label>
                        <input
                            type="text"
                            id="date"
                            value={date.toLocaleDateString("en-US")}
                            readOnly
                            className="input input-bordered w-full "
                        />
                        <label className="label">
                            <span className="label-text ">Time Slot</span>
                        </label>
                        <select
                            id="slot"
                            className="w-full select select-bordered">
                            {details.slots.map((slot) => {
                                return <option>{slot}</option>;
                            })}
                        </select>
                        <label className="label">
                            <span className="label-text ">Name</span>
                        </label>
                        <input
                            type="text"
                            value={user?.displayName}
                            readOnly
                            className="input input-bordered w-full "
                        />
                        <label className="label">
                            <span className="label-text ">Phone Number</span>
                        </label>
                        <input
                            type="text"
                            id="phone"
                            required={true}
                            className="input input-bordered w-full "
                        />
                        <label className="label">
                            <span className="label-text ">Email</span>
                        </label>
                        <input
                            type="text"
                            value={user?.email}
                            readOnly
                            className="input input-bordered w-full "
                        />
                        <button
                            type="submit"
                            className="btn w-full mt-3"
                            style={{
                                background:
                                    "linear-gradient(90deg, #19D3AE -22.5%, #0FCFEC 120.83%)",
                                border: "none",
                            }}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookingModal;
