import ContactFooter from "./contact";
import { useNavigate } from "react-router-dom";

function FooterPage(){
    const navigate = useNavigate()
    return(
        <>
            <div id="footer-section" className="footer-container">
                <div className="gif-background gif-background2"></div>
                <h1 className="footer-title">
                "Success starts the moment you stop making excuses"
                </h1>
                <button class="chronicle-button" onClick={() => {navigate('/main')}}>
                    <span className="chronicle-span">
                        <em className="chronicles-em1">
                            Start Now
                        </em>
                    </span>
                    <span className="chronicle-span">
                        <em className="chronicles-em2">
                            Click here
                        </em>
                    </span>
                </button>
            </div>
            <ContactFooter/>
        </>
    )
}

export default FooterPage;