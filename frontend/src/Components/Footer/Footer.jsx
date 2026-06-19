import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
// Assuming you have similar Button and Input components
// import Button1 from "../button1/button1";
// import InputBox from "../input-box/input-box";

const Footer = () => {
  // const [email, setEmail] = useState("");
  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  return (
    <footer className={styles.footer}>
      <div className={styles.description}>
        <img src="/NGCNLogo.png" alt="Logo" className={styles.logo} />
        <p>
          NGCN is a research group focused on advancing the state-of-the-art in
          computing and networking technologies.
        </p>
      </div>

      <nav className={styles.navigation}>
        <h4>Quick Links</h4>
        <ul>
          <li>
            <Link to="/">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to="/research">
              <p>Research</p>
            </Link>
          </li>
          <li>
            <Link to="/publications">
              <p>Publications</p>
            </Link>
          </li>
          <li>
            <Link to="/people">
              <p>People</p>
            </Link>
          </li>
          <li>
            <Link to="/gallery">
              <p>Gallery</p>
            </Link>
          </li>
          <li>
            <Link to="/blogs">
              <p>Blog</p>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <p>Contact</p>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <p>About Us</p>
            </Link>
          </li>
        </ul>
      </nav>

      <div className={styles.contactInfo}>
        <h4>Contact Us</h4>
        <ul>
          {/* // Updated contact details */}
          <li>
            <p>📍 IIITDM Kurnool, Andhra Pradesh</p>
          </li>
          <li>
            <p>📧 ngcngroup@gmail.com</p>
          </li>
        </ul>
      </div>

      <div className={styles.socialMedia}>
        <h4>Follow Us</h4>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/company/next-gen-computing-and-networking-ngcn/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://x.com/NGCN_Group"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/ngcngroup"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.newsletter}>
        <h4>Join Our Newsletter</h4>
        <p>Get updates on new products and special offers!</p>
        <div className={styles.newsletterForm}>
          {/* You can reuse your InputBox and Button components here */}
          <input
            type="email"
            placeholder="Enter your email"
            className={styles.newsletterInput}
          />
          <button className={styles.newsletterButton}>Subscribe</button>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>Copyright © 2024 NGCN. All Rights Reserved.</p>
        {/* <div className={styles.legalLinks}> */}
          {/* <a href="/terms">Terms & Conditions</a>
          <span>|</span>
          <a href="/privacy">Privacy Policy</a> */}
        {/* </div> */}
        <div>
          <p className="footer-credits">
            Made with ❤️ by
            <a href="mailto:vishwajeetsingh1567@gmail.com"> Vishwajeet, </a>
            <a href="mailto:shashwatp108@gmail.com">Shashwat, </a>
            <a href="mailto:purvi41493842@gmail.com">Jyoti </a>&
            <a href="mailto:aadityagautam010@gmail.com"> Aaditya </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
