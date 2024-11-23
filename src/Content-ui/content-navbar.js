import logo from '../images/logo.png'
import { useNavigate } from 'react-router-dom';
function ContentNavbar(){
    const navigate = useNavigate();

    const handleNav = (e, path) => {
        e.preventDefault();
        navigate(path);
    };

    const handleScrollToContact = (e) => {
        e.preventDefault();
        // Navigate to the correct route (if necessary)
        navigate('/main');
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
            const contactElement = document.getElementById('contact-container');
            if (contactElement) {
                contactElement.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);  // Slight delay to allow route to change
    };
    return (
        <div className="navbar-container">
            <nav>
                <ul class='nav-bar'>
                    <li class='nav-logo'><img className='nav-logo-img' src={logo}/></li>
                    <input type='checkbox' id='check' />
                    <span class="menu">
                        <li><a href='/' onClick={(e) => handleNav(e, '/')}>Home</a></li>
                        <li><a href='/main#contact-container' onClick={handleScrollToContact}>Contact</a></li>
                        <label for="check" class="close-menu"><i class="fas fa-times"></i></label>
                    </span>
                    <label for="check" class="open-menu"><i class="fas fa-bars"></i></label>
                </ul>
            </nav>
        </div>
    )
}
export default ContentNavbar;