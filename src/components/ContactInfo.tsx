import styles from '../styles/ContactInfo.module.css'
import Image from 'next/image'

interface ContactInfo {
    icon: typeof import("*.svg"),
    type: string,
    value: string
}

export default function ContactInfo(props: ContactInfo) {
    return (
        <div className={styles.contactDetail}>
            <Image src={props.icon} alt={props.type}/>
            <h5>{props.type}:</h5>
            <p>{props.value}</p>
        </div>
    )
}