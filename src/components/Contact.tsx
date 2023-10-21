"use client"
import styles from '../styles/Contact.module.css'
import FormTextInput from './FormTextInput'
import FormRadioInput from './FormRadioInput'
import emailjs from '@emailjs/browser'
import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { projectOptions } from '@/utils/mockData'

export default function Contact() {
    const form = useRef(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, [])

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
        <>
            {
                isClient &&
                <section id='contact'>
                    <span className={styles.contact}>
                        <form className={styles.contactForm} ref={form} onSubmit={sendEmail}>
                            <FormTextInput heading='full name' value='name' {...register('name')}/>
                            <FormTextInput heading='email address' value='email' {...register('email')}/>
                            <FormTextInput heading='timeline' value='timeline' {...register('timeline')}/>
                            <FormTextInput heading='budget' value='budget' {...register('budget')}/>
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
            }
        </>
    )
}