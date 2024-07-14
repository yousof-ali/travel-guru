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
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Home;