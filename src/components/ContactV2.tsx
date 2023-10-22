"use client"
import styles from '../styles/ContactV2.module.css'
import emailjs from '@emailjs/browser'
import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import Image from 'next/image'

export default function ContactV2() {
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
        <>  { isClient &&
                <section id='contact'>
                    <span className={styles.contact}>
                        <form className={styles.contactForm} ref={form} onSubmit={sendEmail}>
                            <div className={styles.formTextInput}>
                                <label htmlFor="name">FULL NAME</label>
                                <input type='text' id='name' {...register("name")} required/>
                            </div>

                            <div className={styles.formTextInput}>
                                <label htmlFor="email">EMAIL ADDRESS</label>
                                <input type='text' id='email' {...register("email")} required/>
                            </div>

                            <div className={styles.formTextInput}>
                                <label htmlFor="timeline">TIMELINE</label>
                                <input type='text' id='timeline' {...register("timeline")} required/>
                            </div>

                            <div className={styles.formTextInput}>
                                <label htmlFor="budget">BUDGET</label>
                                <input type='text' id='budget' {...register("budget")} required/>
                            </div>

                            <div className={styles.formRadioInput}>
                                <h4>I NEED HELP WITH ...</h4>
                                <div className={styles.formRadioGrid}>
                                    <label htmlFor='design'>
                                        <Image src={require('/public/icons/rocket.svg')} alt="rocket" className={styles.formRadioImage}/>
                                        Web Design
                                        <input type='radio' id='design' name="project_type" value="web design" required/>
                                    </label>
                                    <label htmlFor='development'>
                                        <Image src={require('/public/icons/cloud.svg')} alt="rocket" className={styles.formRadioImage}/>
                                        Development
                                        <input type='radio' id='development' name="project_type" value="development" required/>
                                    </label>
                                    <label htmlFor='application'>
                                        <Image src={require('/public/icons/app.svg')} alt="rocket" className={styles.formRadioImage}/>
                                        Application
                                        <input type='radio' id='application' name="project_type" value="application" required/>
                                    </label>
                                </div>
                            </div>

                            <div className={styles.formTextInput}>
                                <h4>MORE INFORMATION</h4>
                                <textarea id='info' {...register("moreInfo")} className={styles.moreInformation} required/>
                            </div>

                            <input type="submit" value="SUBMIT PROJECT" role='submit'/>
                        </form>
                    </span>
                </section>
            }
        </>
    )
}