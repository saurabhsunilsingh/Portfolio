
import { getImageurl } from "../../utils";
import styles from "./ProjectCard.module.css"

export default function ProjectCard({ project: { imageSrc, title, description, skills, demo, source } }) {
    return <div className={styles.container}>
        <img className={styles.Image} src={getImageurl(imageSrc)} alt={`Image of ${title}`} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
            {skills.map((skill, id) => (
                <li className={styles.skill} key={id}>{skill}</li>
            ))}
            <div>
                <a className={styles.link} href={demo}>Demo</a>
                <a className={styles.link} href={source}>Source</a>
            </div>
        </ul>
    </div>
}