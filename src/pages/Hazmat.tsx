import Navbar from "../components/Navbar";
import banner_bg from "../assets/hazmat/hazmat.jpg"

const Hazmat = () => {
    return <>
        <Navbar isLightBackground={false} />

        <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "black" }}>
            <div className="container-lg">
            <img src={banner_bg} width="100%"></img>
            </div>
        </div>


        <h1>Hazmat</h1>
    </>;

};

export default Hazmat;
