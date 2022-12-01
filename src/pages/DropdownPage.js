import { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropdownPage() {
    const [selection, setSelection] = useState(null);

    const handleSelect = (option) => {
        setSelection(option);
    }

    const options = [
        {
            id: 1,
            label : "Red",
            value : "red"
        },
        {   id: 2,
            label : "Yellow",
            value : "yellow"
        },
        {
            id: 3,
            label : "Green",
            value : "green"
        }
    ]
    return (
        <div>
            <Dropdown options={options} value={selection} onChange={handleSelect}></Dropdown>
        </div>
    );
}

export default DropdownPage;