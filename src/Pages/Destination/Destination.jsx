import { NavLink } from "react-router-dom";

import Singledestination from "../Singledestination/Singledestination";
import "./Destination.css"
import { useEffect, useState } from "react";


const Destination = () => {
    const [displayData, setDisplayData] = useState([])
    const [tempData, setTempData] = useState([])

    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((result) => {
                setDisplayData(result)
                setTempData(result)
            })
    }, [])


    const handleCategory = (category) => {
        if (category === "all") {
            setDisplayData(tempData)
        }
        else if (category === "forest") {
            const newData = tempData.filter(single => single.category === "forest");
            setDisplayData(newData);
        }
        else if (category === "house") {
            const newData = tempData.filter(single => single.category === "house");
            setDisplayData(newData);
        }
        else if (category === "sea") {
            const newData = tempData.filter(single => single.category === "sea");
            setDisplayData(newData);
        }
    }

    return (
        <div className="py-24">
            <p className="text-center text-3xl font-bold mb-2 w-3/4 mx-auto"><span className="text-orange-400">Travel</span> makes us <span className="text-orange-400">Happy</span> so take a Risk and go <span className="text-orange-400">Ahead</span></p>
            <p className="text-center mb-8 text-orange-400">Travel exposes you to new cultures, landscapes, cuisines, and ways of life.</p>

            <div className=" mb-6">
                <ul id="category" className=" flex justify-center gap-6 ">
                    <li>
                    <NavLink onClick={() => handleCategory("all")} > All </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => handleCategory("forest")}> Forest </NavLink>
                    </li>
                    <li>
                    <NavLink onClick={() => handleCategory("house")}> House </NavLink>
                    </li>
                    <li>
                    <NavLink onClick={() => handleCategory("sea")}> Sea </NavLink>
                    </li>
                </ul>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 ">

                {
                    displayData.map(single => <Singledestination key={single.id} single={single}></Singledestination>)
                }
            </div>
        </div>
    );
};

export default Destination;