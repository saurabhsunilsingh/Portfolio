import { getImageurl } from "../../utils";
import  styles from "./About.module.css";

export default function About() {
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>ABOUT</h2>
        <div className={styles.content}>
            <img className={styles.aboutImage} src={getImageurl("about/aboutImage.png")} alt="sitting-with-a-laptop" />
        

        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageurl("about/cursorIcon.png")} alt="cursor-icon" />
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p> I am a Frontend Developer with experience in building responsive and optimised sites</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageurl("about/serverIcon.png")} alt="server-icon" />
                <div className={styles.aboutItemText}> 
                    <h3>Unqork Developer</h3>
                    <p> I have experience in building Unqork based applications in Insurance and Wealth Managment domain</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageurl("about/uiIcon.png")} alt="ui-icon" />
                <div className={styles.aboutItemText}>
                    <h3>UI Designer</h3>
                    <p> I have designed multiple landing pages and have created design systems as well.</p>
                </div>
            </li>
        </ul>
        </div>
    </section>
}