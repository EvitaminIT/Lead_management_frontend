import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";




export default function Test() {
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });

    const handleValueChange = newValue => {
        console.log("newValue:", newValue);
        setValue(newValue);
    };

    return (
        <div>
            <Datepicker value={value} onChange={handleValueChange} />
        </div>
    )
}
