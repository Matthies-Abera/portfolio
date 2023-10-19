import styles from './page.module.css'
import AboutMe from '@/components/AboutMe'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <section></section>
    </main>
  )
}