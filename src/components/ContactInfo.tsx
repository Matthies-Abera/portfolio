import styles from '../styles/ContactInfo.module.css'
import Image from 'next/image'

export default function ContactInfo(props:{icon: typeof import("*.svg"), type: string, value: string}) {
    return (
        <div className={styles.row}>
            <Image src={props.icon} alt={props.type} />
            <h5>{props.type}:</h5>
            <p>{props.value}</p>
        </div>
    )
}