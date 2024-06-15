import BannerImg from "../../../assets/banner-img.png"
import "./Banner.scss";
import { useNavigate } from "react-router-dom";


const Banner = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };
    
    return (
    <div className="hero-banner">
    <div className="content">
    <div className="text-content">
        <h1>SUP<span>E</span>R M<span>A</span>RT DAY</h1>
        <h1>IS HERE</h1>
        <p>
UP TO 60% OFF 
 Headphones Bluetooth Speakers & Wireless Earbuds
 </p>
        <div className="ctas">
            <div className="banner-cta">Read More</div>
<div className="banner-cta v2" onClick={() => handleNavigation("/product/8")}>Shop Now</div>
        </div>
    </div>
    <img className="banner-img"  src={BannerImg} alt=""/>
    </div>
</div>
    )
};

export default Banner;
