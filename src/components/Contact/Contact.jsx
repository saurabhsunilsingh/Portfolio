import { getImageurl } from "../../utils";
import styles from "./Contact.module.css"

export default function Contact() {
    return <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h1>Contact</h1>
            <p>Feel free to reach out!</p>
        </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageurl("contact/emailIcon.png")} alt="email-icon" />
            <a href="mailto:saurabhsunilsingh@gmail.com">saurabhsunilsingh@gmail.com</a>
        </li>
        
        <li className={styles.link}>
            <img src={getImageurl("contact/linkedinIcon.png")} alt="linkedin-icon" />
            <a href="https://www.linkedin.com/in/saurabhsunilsingh/">linkedin.com/saurabhsunilsingh</a>
        </li>
        
        <li className={styles.link}>
            <img src={getImageurl("contact/githubIcon.png")} alt="email-icon" />
            <a href="https://github.com/saurabhsunilsingh">github.com/saurabhsunilsingh</a>
        </li>
    </ul>
    </footer>
}