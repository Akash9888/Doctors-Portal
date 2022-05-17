import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/FirebaseConfig";
const BookingModal = ({ details, date, setDetails }) => {
    const [user] = useAuthState(auth);
    console.log(details.slots);
    const booking = (e) => {
        e.preventDefault();
        console.log("ticket booked");
        setDetails(null);
    };
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal ">
                <div class="modal-box relative">
                    <label
                        for="booking-modal"
                        class="btn btn-sm btn-circle absolute right-2 top-2">
                        ✕
                    </label>
                    <h3 class="text-xl text-black font-semibold">
                        {details.name}
                    </h3>
                    <form onSubmit={booking}>
                        <label class="label">
                            <span class="label-text ">Date</span>
                        </label>
                        <input
                            type="text"
                            value={date.toLocaleDateString("en-US")}
                            readOnly
                            class="input input-bordered w-full "
                        />
                        <label class="label">
                            <span class="label-text ">Time Slot</span>
                        </label>
                        <select class="w-full select select-bordered">
                            {details.slots.map((slot) => {
                                return <option>{slot}</option>;
                            })}
                        </select>
                        <label class="label">
                            <span class="label-text ">Name</span>
                        </label>
                        <input
                            type="text"
                            value={user?.displayName}
                            readOnly
                            class="input input-bordered w-full "
                        />
                        <label class="label">
                            <span class="label-text ">Phone Number</span>
                        </label>
                        <input
                            type="text"
                            value={user?.phoneNumber}
                            readOnly
                            class="input input-bordered w-full "
                        />
                        <label class="label">
                            <span class="label-text ">Email</span>
                        </label>
                        <input
                            type="text"
                            value={user?.email}
                            readOnly
                            class="input input-bordered w-full "
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
        </div>
    );
};

export default BookingModal;
