import { useLoaderData } from "react-router-dom";

import Singledestination from "../Singledestination/Singledestination";


const Destination = () => {
    const alldata = useLoaderData();
    return (
        <div className="py-24">
            <p className="text-center text-3xl font-bold mb-2 w-3/4 mx-auto"><span className="text-orange-400">Travel</span> makes us <span className="text-orange-400">Happy</span> so take a Risk and go <span className="text-orange-400">Ahead</span></p>
            <p  className="text-center mb-8 text-orange-400">Travel exposes you to new cultures, landscapes, cuisines, and ways of life.</p>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                
                {
                 alldata.map(single=><Singledestination key={single.id} single={single}></Singledestination>)
                }
            </div>
        </div>
    );
};

export default Destination;