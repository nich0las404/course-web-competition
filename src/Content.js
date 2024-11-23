import HeroContent from "./Content-ui/hero-content-page";
import ContentNavbar from "./Content-ui/content-navbar";
import ContactFooter from "./Homepage-ui/contact";
import { useEffect } from "react";
function MainContent(){
    useEffect(() => {
        window.scrollTo(0,0)
    }, []);
    return (
        <>
        <ContentNavbar/>
        <HeroContent/>
        <ContactFooter/>
        </>
    )
}
export default MainContent;