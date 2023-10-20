import styles from '../styles/FormTextInput.module.css'

interface FormTextInput {
    heading: string,
    value: string
}

export default function FormTextInput(props: FormTextInput) {
    return (
        <div className={styles.formTextInput}>
            <label htmlFor={props.value}>{props.heading.toUpperCase()}</label>
            {
                props.value == 'info'
                ?   <textarea id={props.value} className={styles.moreInformation} required/>
                :   <input type='text' id={props.value} required/>
            }
        </div>
    )
}