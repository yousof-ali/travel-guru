import { useEffect } from "react";
import { removeitems } from "../../Localstorage/localstorage";


const SingleBookmark = ({ single }) => {
    const {id, place_name, photourl, headline } = single[0]
    console.log(single[0])

    
    return (
        <div className="border p-4 rounded-xl shadow-md mb-4 flex justify-between items-center ">
            <div className="flex  items-center gap-8">
                <div className="w-40">
                    <img className="" src={photourl} alt="" />
                </div>
                <div>
                    <h2 className="mb-2">{place_name}</h2>
                    <p className="text-sm">{headline}</p>

                </div>
            </div>
            <button onClick={()=>removeitems(id)}  className="btn bg-orange-500 text-white hover:bg-orange-300">Remove</button> 
        </div>
    );
};

export default SingleBookmark;