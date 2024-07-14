import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Singledestination from "../Singledestination/Singledestination";


const Destination = () => {
    const alldata = useLoaderData();
    return (
        <div>
            <Header></Header>
            <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {
                 alldata.map(single=><Singledestination key={single.id} single={single}></Singledestination>)
                }
            </div>
        </div>
    );
};

export default Destination;