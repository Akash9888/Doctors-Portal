import { useState } from "react";
import AppoinmentBanner from "./AppoinmentBanner";
import BookAppoinment from "./BookAppoinment";

const Appoinments = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppoinmentBanner date={date} setDate={setDate} />
            <BookAppoinment date={date} />
        </div>
    );
};

export default Appoinments;
