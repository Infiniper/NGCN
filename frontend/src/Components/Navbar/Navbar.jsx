import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './Navbar.module.css'; // Import the CSS module

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Dynamically apply classes using the 'styles' object
    // This combines the base 'nav-links' class with the 'active' class when the menu is open
    const navLinksClasses = `${styles['nav-links']} ${isMenuOpen ? styles.active : ''}`;

    return (
        <div className={styles['nav-elements']}>
            <button className={styles['hamburger-menu']} onClick={toggleMenu}>
                &#9776; {/* Hamburger Icon */}
            </button>

            <div className={styles.logo}>
                <Link to="/"><button><img src="/NGCNLogo.png" alt="Logo" /></button></Link>
            </div>
            
            <div className={navLinksClasses}>
                <Link to="/"><button><p>Home</p></button></Link>
                <Link to="/about"><button><p>About Us</p></button></Link>
                <Link to="/kesdesikan"><button><p>Founder</p></button></Link>
                <Link to="/people"><button><p>People</p></button></Link>
                <Link to="/research"><button><p>Research</p></button></Link>
                <Link to="/publications"><button><p>Publications</p></button></Link>
                <Link to="/gallery"><button><p>Gallery</p></button></Link>
                <Link to="/blogs"><button><p>Blog</p></button></Link>
                <Link to="/contact"><button><p>Contact</p></button></Link>
            </div>
        </div>
    );
}

export default Navbar;