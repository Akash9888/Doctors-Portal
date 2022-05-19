import axios from "axios";
import { useEffect, useState } from "react";
import AppoinmentCard from "../../Components/AppoinmentCard";
import BookingModal from "./BookingModal";

const BookAppoinment = ({ date }) => {
    const [slots, setSlots] = useState([]);
    const [details, setDetails] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/appointmentData`)
            .then((response) => {
                setSlots(response.data);
                console.log(response.data);
                console.log(slots);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {});
    }, []);
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-center text-[#19D3AE] font-normal text-2xl">
                Available Appointments on {date.toLocaleDateString("en-US")}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 ">
                {slots.map((slot) => {
                    return (
                        <AppoinmentCard
                            key={slot._id}
                            slot={slot}
                            setDetails={setDetails}
                        />
                    );
                })}
            </div>

            {details && (
                <BookingModal
                    details={details}
                    setDetails={setDetails}
                    date={date}
                />
            )}
        </div>
    );
};

export default BookAppoinment;
