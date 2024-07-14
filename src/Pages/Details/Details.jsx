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
                <div className=" md:col-span-1 bg-base-100 rounded-xl  ">
                    <h2 className="text-center text-orange-500 text-3xl font-bold mb-4">Ticket Booking</h2>
                    <div className="card bg-base-200">
                        <form className="card-body">
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your location</span>
                                </label>
                                <input type="text" placeholder="Your current location" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Mobile Number</span>
                                </label>
                                <input type="text" placeholder="Number" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Ticket quantity</span>
                                </label>
                                <input type="number" placeholder="Ticket quantity " className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" placeholder="Date " className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-orange-500 text-white hover:bg-orange-300">Booking</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Details;