import styles from '../styles/ActionButton.module.css'
import Image from 'next/image'

interface ActionButton {
    active: string,
    function: (params: any) => any,
    icon: typeof import("*.svg"),
    name: string
}

export default function ActionButton(props: ActionButton) {
    function isActive() {
        if (props.active.toUpperCase() == props.name.toUpperCase()) return true;
        return false;
    }
    
    return (
        <div className={[styles.button, isActive() && styles.active].join(' ')} onClick={() => props.function(props.name)}>
            <Image src={props.icon} alt={props.name}/>
            <p>{props.name}</p>
        </div>
    )
}