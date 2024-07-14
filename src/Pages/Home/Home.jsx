import { Link } from "react-router-dom";
import Header from "../Header/Header";


const Home = () => {
    return (
        <div
            className="hero min-h-screen relative "
            style={{
                backgroundImage: "url(https://i.ibb.co/mvRyJMs/imgonline-com-ua-resize-Kr-H12b-QEFjvva-E.jpg)",
            }}>
            <Header></Header>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className=" flex flex-col items-center md:flex-row justify-between gap-16 md:gap-8">
                    <div className="flex-1">
                    <h1 className="mb-2 text-5xl font-bold">Enjoy your Journey with Travel Guru</h1>
                    <p>Travel opens up new horizons, allowing us to explore different cultures, landscapes, and experiences that stimulate our curiosity and sense of wonder.</p>
                    <Link to={'/destination'} className="btn bg-orange-500 border-none mt-2 hover:bg-orange-300 text-white">Your Destination</Link>
                    </div>
                    <div className="flex-1 carousel rounded-box w-96">
                        <div className="carousel-item w-1/2 relative ">
                            <img
                                src="/src/assets/Sajek.png"
                                className="w-full rounded-md" />
                                <div className="bg-black rounded-b-xl bg-opacity-30 absolute bottom-0 pl-4 w-full">
                                    <p className="text-3xl text-white text-left py-4">Sajek</p>
                                </div>
                        </div>
                        <div className="carousel-item w-1/2 relative mx-10">
                            <img
                                src="/src/assets/Sreemongol.png"
                                className="w-full rounded-md" />
                                <div className="bg-black  rounded-b-xl bg-opacity-30 absolute bottom-0 pl-4 w-full">
                                    <p className="text-3xl text-white text-left py-4">Sreemongol</p>
                                </div>
                        </div>
                        <div className="carousel-item w-1/2 relative ">
                            <img
                                src="/src/assets/sundorbon.png"
                                className="w-full rounded-md" />
                                <div className="bg-black rounded-b-xl bg-opacity-30 absolute bottom-0 pl-4 w-full">
                                    <p className="text-3xl text-white text-left py-4">Sundorban</p>
                                </div>
                        </div>                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;