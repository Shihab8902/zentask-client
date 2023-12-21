import About from "./About/About"
import Banner from "./Banner/Banner"
import OurClients from "./Clients/OurClients"
import Features from "./Features/Features"
import Navbar from "./Navbar/Navbar"


const Home = () => {
    return <section>
        <Navbar />
        <Banner />
        <Features />
        <About />
        <OurClients />



    </section>
}

export default Home