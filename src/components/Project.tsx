import styles from '../styles/Project.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from '../utils/mockAssets'

export default function Project(props: Project) {
  return (
    <div className={styles.project}>
      <div className={styles.websiteImage}><Image src={props.image} alt='website snapshot'/></div>

      <div className={styles.websiteDetails}>
        <h3>{props.name.toUpperCase()}</h3>
        <p>{props.description}</p>

        <span className={styles.stackContainer}>
          {props.stack.map(tool => 
            <div key={tool} className={styles.button}>{tool}</div>
          )}
        </span>

        <span className={styles.links}>
          <Link href={props.codeLink} target="_blank" className={styles.link}>
            Code<Image src={require('/public/icons/github.svg')} alt='github repository link'/>
          </Link>
          <Link href={props.webLink} target="_blank" className={styles.link}>
            Demo<Image src={require('/public/icons/external-tab.svg')} alt='project website link'/>
          </Link>
        </span>
      </div>
    </div>
  )
}