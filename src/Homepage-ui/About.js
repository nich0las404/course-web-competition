import CodingFacts from "./coding-facts";
import Testimonials from "./testimonials";

function aboutPage(){
    return(
        <div id="about-section">
            <CodingFacts/>
            <Testimonials/>
        </div>
    )
}
export default aboutPage;