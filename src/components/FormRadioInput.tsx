import styles from '../styles/FormRadioInput.module.css'
import Image from 'next/image'
import { FormRadioInput } from '@/utils/interfaces'

export default function FormRadioInput(props: FormRadioInput) {
    return (
        <div className={styles.formRadioInput}>
            <label htmlFor={props.htmlFor}>{props.heading.toUpperCase()}</label>
            <div className={styles.formRadioGrid}>
                {props.radioButtons.map(button => 
                    <label htmlFor={button.id} key={button.id}>
                        <Image src={button.image} alt={button.id} className={styles.formRadioImage}/>
                        {button.id.charAt(0).toUpperCase() + button.id.slice(1)}
                        <input type='radio' id={button.id} name={props.htmlFor} value={button.id} required/>
                    </label>
                )}
            </div>
        </div>
    )
}