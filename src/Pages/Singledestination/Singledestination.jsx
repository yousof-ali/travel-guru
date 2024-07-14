import { Link } from "react-router-dom";


const Singledestination = ({ single }) => {
    const { id, headline, photourl, place_name } = single;
    return (
        <div className="card bg-base-100  shadow-xl">
            <figure>
                <img
                    src={photourl}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{place_name}</h2>
                <p>{headline}</p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${id}`}>
                        <button className="text-white btn bg-orange-400 border-none">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Singledestination;