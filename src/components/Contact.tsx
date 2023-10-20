"use client"
import styles from '../styles/Contact.module.css'
import FormTextInput from './FormTextInput'
import FormRadioInput from './FormRadioInput'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { projectOptions } from '@/utils/mockAssets'

export default function Contact() {
    const form = useRef(null);

    const { register, reset, control } = useForm({
        defaultValues: {
            name: "",
            email: "",
            timeline: "",
            budget: "",
            moreInfo: ""
        }
    });

    const sendEmail = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        let current:HTMLFormElement|string|null = form.current;
        if (current == null) current = "";

        emailjs.sendForm('service_lu8btbr', 'template_okmt9nm', current, 'VpvD9k4Yge4JhYz0Z')
        .then((result: { text: any }) => {
            console.log(result.text);
            console.log("message sent");
        }, (error: { text: any }) => {
            console.log(error.text);
        });

        reset();
    };
        
    return (
        <section>
            <span className={styles.contact}>
                <form className={styles.contactForm} ref={form} onSubmit={sendEmail}>
                    <FormTextInput heading='full name' value='name' {...register('name')}/>
                    <FormTextInput heading='email address' value='email' {...register('email')}/>
                    <FormTextInput heading='timeline' value='timeline' {...register('timeline')}/>
                    <FormTextInput heading='budget' value='name' {...register('budget')}/>
                    <FormRadioInput
                        radioButtons={projectOptions.radioButtons}
                        heading={projectOptions.heading}
                        htmlFor={projectOptions.htmlFor}
                    />
                    <FormTextInput heading='more information' value='info' {...register('moreInfo')}/>
                    <input type="submit" value="SUBMIT PROJECT"/>
                </form>
            </span>
        </section>
    )
}