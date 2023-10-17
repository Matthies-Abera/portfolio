// TODO: ALLOW DOWNLOADING DV
import styles from '../styles/Hero.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    return (
        <section className={styles.hero}>
            <span>
                <div className={styles.infoContainer}>
                    <h1>Front-End React Developer</h1>
                    <p>Hi, I&apos;m Matthies Abera. A passionate Front-end React Developer based in Melbourne, Australia.</p>
                    <div className={styles.buttons}>
                        <Link href='#contact' className={styles.button}><h4>Contact Me</h4></Link>
                        <Link
                            href={''}
                            // target='_blank'
                            // rel='noopener noreferrer'
                            className={styles.button}
                        >
                            <h4>Download CV</h4>
                        </Link> 
                    </div>
                </div>

                <Image
                    src={require('/public/images/headshot.png')}
                    alt='headshot'
                    className={styles.image}
                />
            </span>
        </section>
    )
}