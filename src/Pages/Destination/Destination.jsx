import { NavLink } from "react-router-dom";

import Singledestination from "../Singledestination/Singledestination";
import "./Destination.css"
import { useEffect, useState } from "react";


const Destination = () => {
    const [displayData, setDisplayData] = useState([]);
    const [tempData, setTempData] = useState([]);
    const [activeTab,setActiveTab] = useState(1);
    const [loading,setLoading]=useState(true);

    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((result) => {
                setDisplayData(result)
                setTempData(result)
                setLoading(false)
            })
    }, [])


    const handleCategory = (category) => {
        if (category === "all") {
            setDisplayData(tempData);
            setActiveTab(1);
        }
        else if (category === "forest") {
            const newData = tempData.filter(single => single.category === "forest");
            setDisplayData(newData);
            setActiveTab(2);
        }
        else if (category === "house") {
            const newData = tempData.filter(single => single.category === "house");
            setDisplayData(newData);
            setActiveTab(3);
        }
        else if (category === "sea") {
            const newData = tempData.filter(single => single.category === "sea");
            setDisplayData(newData);
            setActiveTab(4);
        }
    }

    return (
        <div className="py-24">
            <p className="text-center text-3xl font-bold mb-2 w-3/4 mx-auto"><span className="text-orange-400">Travel</span> makes us <span className="text-orange-400">Happy</span> so take a Risk and go <span className="text-orange-400">Ahead</span></p>
            <p className="text-center mb-8 text-orange-400">Travel exposes you to new cultures, landscapes, cuisines, and ways of life.</p>

            <div className=" mb-6">
                <div role="tablist" className="tabs bg-base-100 flex gap-2 items-center justify-center tabs-boxed">
                    
                    <a className={`tab ${activeTab == 1 ? "act" :"dact"}`} onClick={() => handleCategory("all")} > All </a>
                    
                    <a className={`tab ${activeTab == 2 ? "act" :"dact"}`}  onClick={() => handleCategory("forest")}> Forest </a>
                    
                    <a className={`tab ${activeTab == 3 ? "act" :"dact"}`}  onClick={() => handleCategory("house")}> House </a>
                    
                    <a className={`tab ${activeTab == 4 ? "act" :"dact"}`}  onClick={() => handleCategory("sea")}> Sea </a>
                    
                </div>
            </div>
            {
                loading&&<p className="text-center text-2xl pt-24"><span className="loading loading-spinner text-error"></span></p>
            }
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 ">

                {
                    displayData.map(single => <Singledestination key={single.id} single={single}></Singledestination>)
                }
            </div>
        </div>
    );
};

export default Destination;