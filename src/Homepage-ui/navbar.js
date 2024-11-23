import logo from '../images/logo.png'

function Navbar(){
    return (
        <div className="navbar-container">
            <nav>
                <ul class='nav-bar'>
                    <li class='nav-logo'><img className='nav-logo-img' src={logo}/></li>
                    <input type='checkbox' id='check' />
                    <span class="menu">
                        <li><a href="#hero-section">Home</a></li>
                        <li><a href="#about-section">About</a></li>
                        <li><a href="#footer-section">Contact</a></li>
                        <label for="check" class="close-menu"><i class="fas fa-times"></i></label>
                    </span>
                    <label for="check" class="open-menu"><i class="fas fa-bars"></i></label>
                </ul>
            </nav>
        </div>
      );
}

export default Navbar;