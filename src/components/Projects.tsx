import styles from '../styles/Projects.module.css'
import Project from './Project';
import { projects } from '../utils/mockAssets'

export default function Projects() {
    function isEmpty() {
        if (projects.length == 0) return true;
        return false;
    }

    return (
        <section id='projects'>
            <span className={styles.projects}>
                <h1>PORTFOLIO</h1>
                <h4>Each project is a unique piece of development</h4>

                {
                    isEmpty()
                    ? <h2>COMING SOON ...</h2>
                    : projects.map(project => 
                        <Project
                            codeLink={project.codeLink}
                            description={project.description}
                            image={project.image}
                            key={project.name}
                            name={project.name}
                            stack={project.stack}
                            webLink={project.webLink}
                        />
                    )
                }
            </span>
        </section>
    )
}