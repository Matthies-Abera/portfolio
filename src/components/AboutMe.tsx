"use client"
import styles from '../styles/AboutMe.module.css'
import ActionButton from './ActionButton'
import ContactInfo from './ContactInfo'
import Image from 'next/image'
import { useState } from 'react'

export default function AboutMe() {
    const [interest, setInterest] = useState('sports');
    const handleInterest = (selected: string) => {
        setInterest(selected);
    }

    return (
        <section>
            <span className={styles.aboutMe}>
                <div className={styles.imageDesktop}><Image src={require(`/public/images/${interest}.jpg`)} alt='selected image'/></div>

                <div className={styles.description}>
                    <h1>About Me</h1>
                    <p>
                        I am driven by a love for challenging sport feats and outdoor adventures, always seeking to push my boundaries.<br/><br/>
                        As a proficient front-end web developer, I excel in HTML5, CSS3, and JavaScript, utilizing my skills to create engaging user interfaces.<br/><br/>
                        With a passion for both sports and design, I strive to craft captivating web experiences that inspire and captivate users.
                    </p>
                    <div className={styles.contactInfo}>
                        <ContactInfo icon={require('/public/icons/name.svg')} type='Name' value='Matthies Abera'/>
                        <ContactInfo icon={require('/public/icons/phone.svg')} type='Phone' value='0401 249 113'/>
                        <ContactInfo icon={require('/public/icons/email.svg')} type='Email' value='matthiesabera@gmail.com'/>
                    </div>
                </div>

                <div className={styles.interests}>
                    <h2>My Interests</h2>
                    <div className={styles.imageMobile}><Image src={require(`/public/images/${interest}.jpg`)} alt='selected image'/></div>
                    <div className={styles.actionButtons}>
                        <ActionButton icon={require('/public/icons/sports.svg')} name='Sports' active={interest} function={() => handleInterest('sports')}/>
                        <ActionButton icon={require('/public/icons/explore.svg')} name='Explore' active={interest} function={() => handleInterest('explore')}/>
                        <ActionButton icon={require('/public/icons/cinema.svg')} name='Cinema' active={interest} function={() => handleInterest('cinema')}/>
                        <ActionButton icon={require('/public/icons/photography.svg')} name='Photography' active={interest} function={() => handleInterest('photography')}/>
                    </div>
                </div>
            </span>
        </section>
    )
}