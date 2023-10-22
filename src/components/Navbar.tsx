"use client"
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ScrollspyNav from 'react-scrollspy-nav'
import { useState } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const handleSelection = () => {
        setIsOpen(false);
    }

    return (
        <div className={styles.nav}>
            <ScrollspyNav
                scrollTargetIds={['hero', 'about', 'projects', 'contact']}
                offset={-100}
                activeNavClass={styles.navActive}
                scrollDuration={10}
            >
                <div className={styles.navHeader}>
                    <h5 className={styles.navLogo} role='business-logo'>M.</h5>
                    <Image
                        src={isOpen ? require('/public/icons/close.svg') : require('/public/icons/hamburger.svg')}
                        onClick={handleClick}
                        className={styles.icon}
                        alt='nav bar open and close icon'
                    />
                </div>

                <ul className={[styles.navList, isOpen && styles.navListOpen].join(' ')}> 
                    <Link href="#hero" onClick={handleSelection}>Home</Link>
                    <Link href="#about" onClick={handleSelection}>About Me</Link>
                    <Link href="#projects" onClick={handleSelection}>Projects</Link>
                    <Link href="#contact" onClick={handleSelection}>Contact</Link>
                </ul>
            </ScrollspyNav>
        </div>
    )
}