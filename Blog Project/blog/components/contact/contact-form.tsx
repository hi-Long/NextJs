import axios from 'axios'
import React, { FC, useRef } from 'react'
import Message from '../../models/Message'
import { uiActions } from '../../store'
import { useAppDispatch } from '../../store/hooks'
import Notification from '../../models/Notification'
import classes from './contact-form.module.css'

const ContactForm: FC<{}> = props => {
    const dispatch = useAppDispatch()

    const emailRef = useRef<HTMLInputElement>(null)
    const nameRef = useRef<HTMLInputElement>(null)
    const messageRef = useRef<HTMLTextAreaElement>(null)

    const sendMessageHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        const email = emailRef.current!.value
        const name = nameRef.current!.value
        const message = messageRef.current!.value
        const newMessage: Message = { email, name, message }

        let newNotification: Notification

        try {
            const response = await axios.post('/api/contact', newMessage)
            console.log(response)
            newNotification = { title: 'aa', message: 'bb', status: 'success' }
            dispatch(uiActions.setNotification(newNotification))
        } catch (err) {
            console.log(err.message)
        }
    }

    return <section className={classes.contact}>
        <h1>How can I help you?</h1>
        <form className={classes.form} onSubmit={sendMessageHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor='email'>Your email</label>
                    <input type='email' id='email' ref={emailRef}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor='name'>Your name</label>
                    <input type='text' id='name' ref={nameRef}></input>
                </div>
            </div>
            <div className={classes.control}>
                <label htmlFor='message'>Your message</label>
                <textarea rows={5} id='message' ref={messageRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button>Send message</button>
            </div>
        </form>
    </section>
}

export default ContactForm

function useDispatch() {
    throw new Error('Function not implemented.')
}
