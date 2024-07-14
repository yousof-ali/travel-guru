import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Header/Header";


const Details = () => {
    const{id}=useParams()
    const alldata = useLoaderData()
    const selectedData = alldata.filter(single=>single.id==id);
    return (
        <div>
            <Header></Header>
            <div className="mt-20 p-2 lg:p-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                 <div className="border md:col-span-2">
                      <h2 className="text-3xl font-bold">Details of <span className="text-orange-400">{selectedData[0].place_name}</span></h2>
                      <div>
                        <img className="md:w-3/4" src={selectedData[0].photourl} alt="" />
                      </div>
                      <div>
                        <h2>{selectedData[0].}</h2>
                      </div>
                 </div>
                 <div className="border md:col-span-1">
                    
                 </div>
            </div>
            
        </div>
    );
};

export default Details;