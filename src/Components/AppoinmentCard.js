const AppoinmentCard = ({ slot, setDetails }) => {
    const { _id, name, slots } = slot;
    console.log(slots);

    return (
        <div class="rounded-xl border bg-white  drop-shadow-2xl text-center ">
            <div class="card-body">
                <h2 class="text-xl font-semibold  text-[#19D3AE]">{name}</h2>
                <p className="text-base text-black font-normal">
                    {slots.length ? (
                        <span>{slots[0]}</span>
                    ) : (
                        <span className="text-orange-500">
                            Try Another Days
                        </span>
                    )}
                </p>
                <p className="text-base text-black font-normal uppercase">
                    {slots.length} {slots.length > 1 ? "spaces" : "space"}{" "}
                    available
                </p>
                <div class="card-actions justify-center">
                    <label
                        for="booking-modal"
                        className="btn"
                        disabled={slots.length == 0}
                        style={{
                            background:
                                "linear-gradient(90deg, #19D3AE -22.5%, #0FCFEC 120.83%)",
                            border: "none",
                        }}
                        onClick={() => {
                            setDetails(slot);
                        }}>
                        book appoinment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentCard;
