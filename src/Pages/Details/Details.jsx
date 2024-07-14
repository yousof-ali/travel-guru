import { useLoaderData, useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";


const Details = () => {
    const { id } = useParams()
    const alldata = useLoaderData()
    const selectedData = alldata.filter(single => single.id == id);
    return (
        <div className="py-24 px-2 md:px-0">
            <div className=" lg:p-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className=" md:col-span-2">
                    <h2 className="text-3xl font-bold mb-4">Details of <span className="text-orange-400">{selectedData[0].place_name}</span></h2>
                    <div className="space-y-4">
                        <div className="flex items-center justify-center">
                            <img className="" src={selectedData[0].photourl} alt="" />
                        </div>
                        <div>
                            <p className="flex items-center gap-2 mb-4">
                                <FaLocationDot />{selectedData[0].location}
                            </p>
                            <h2 className="text-2xl font-semibold">{selectedData[0].headline}</h2>
                            <p className="my-2 font-light">{selectedData[0].description}</p>
                        </div>
                    </div>
                </div>
                <div className=" md:col-span-1 bg-base-200 rounded-xl py-4">
                    <h2 className="text-center text-orange-500 text-3xl font-bold">Ticket Booking</h2>


                        

                            <div className="card shadow-sm">
                                <form className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" className="input input-bordered" required />
                                        
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Login</button>
                                    </div>
                                </form>
                            </div>


                </div>
            </div>

        </div>
    );
};

export default Details;