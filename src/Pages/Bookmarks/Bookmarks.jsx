import { useEffect, useState } from "react";
import { finditem } from "../../Localstorage/localstorage";
import { useLoaderData } from "react-router-dom";
import SingleBookmark from "../SingleBookmark/SingleBookmark";



const Bookmarks = () => {
    
    const alldata = useLoaderData()
    const[filtered , setfiltered] = useState([]);
    console.log(alldata)
    
    useEffect(()=>{
        const allIds = finditem()
        console.log(allIds)
        if(alldata.length>0){

            const filterdata = [];
            for(const id of allIds){
                const data = alldata.filter(single=>single.id==id);
                if(data){
                    filterdata.push(data);
                }
            }
            setfiltered(filterdata)
        }
        
    },[alldata])
    

   console.log(filtered)
    
    return (
        <div className="py-24 md:w-10/12 lg:w-6/12  mx-auto px-2 md:px-0">
            {
               
               filtered.map((single,indx)=><SingleBookmark key={indx} single={single}></SingleBookmark>)
                
            }
        </div>
    );
};

export default Bookmarks;