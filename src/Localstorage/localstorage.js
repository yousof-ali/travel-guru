const finditem = ()=>{
    let value = localStorage.getItem('itemsid')
    if(value){
        return JSON.parse(value);
    }
    return [];
}


const saveitems = (id)=>{
    const olderarray = finditem();
    const isin = olderarray.find(ids=>ids==id);
    if(!isin){
        olderarray.push(id);
        localStorage.setItem("itemsid",JSON.stringify(olderarray))
    }
}

const removeitems = (id)=>{
    const allid = finditem();
    const filterid = allid.filter(single=>single === id);
    console.log(filterid);
    localStorage.setItem("itemsid",JSON.stringify(filterid));

}

export {finditem,saveitems,removeitems}