import axios from "axios";
import { useState } from "react";

const useBooking = (url) => {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const saveBookingData = (bookingData) => {
        setLoading(true);
        axios
            .post(url, bookingData)

            .then((response) => {
                setData(response.data);

                console.log(data);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return { saveBookingData, loading, error, data, setData };
};

export default useBooking;
