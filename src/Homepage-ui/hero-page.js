import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function HeroPage(){
    const navigate = useNavigate();
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
          setIsLoaded(true);
        }, 1000); 
        return () => clearTimeout(timer); 
      }, []);
    return (
        <div id="hero-section" className="hero-page">
            <div className="inner-hero-page">
            <div className="gif-background hero-background-animation"></div>
            <div className={`open-background ${isLoaded ? "open" : ""}`}></div>
            <div className="title-container">
                <h1 className="title">learn programming for <span className="title-span"> Free</span></h1>
            </div>
            </div>
            <div className="btn-container">
                <button class="btn" onClick={() => navigate('/main')}>
                <div class="btn__bg">
                    <span class="btn__bg__layer btn__bg__layer-first"></span>
                    <span class="btn__bg__layer btn__bg__layer-second"></span>
                    <span class="btn__bg__layer btn__bg__layer-third"></span>
                </div>

                <span class="btn__text-out">Join Now</span>
                <span class="btn__text-in">Join Now</span>
                </button>
            </div>
        </div>
      );
}

export default HeroPage;