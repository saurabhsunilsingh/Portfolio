import { getImageurl } from "../../utils";
import styles from "../Hero/Hero.module.css"

export default function Hero() {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                Hi, I am Saurabh
            </h1>
            <p className={styles.description}>I am a developer with 3 years of experience using React, Unqork and NodeJS</p>
            <a className={styles.contactBtn} href="mailto:saurabhsunilsingh@gmail.com">Contact Me</a>
        </div>
        <img className={styles.heroImage} src={getImageurl("hero/heroImage.png")} alt="hero-image" />
        <div className={StyleSheet.topBlur}></div>
        <div className={StyleSheet.bottomBlur}></div>
    </section>
}