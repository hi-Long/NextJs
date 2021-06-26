import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { FC, useRef, useState } from 'react'
import Feedback from '../models/feedback'
import FeedBackPage from './feedbacks'

const Home: FC<{ feedbacks: Feedback[] }> = props => {
  const emailRef = useRef<HTMLInputElement>(null)
  const feedbackRef = useRef<HTMLInputElement>(null)

  // const [feedbacks, setFeedbacks] = useState([])

  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault()

    const email = emailRef.current!.value
    const feedback = feedbackRef.current!.value

    const newFeedback: Feedback = {
      id: new Date().getMilliseconds().toString(),
      email: email,
      feedback: feedback
    }

    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(newFeedback),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json()).then(data => console.log(data))
  }

  // const loadFeedbacksHandler = () => {
  //   fetch('/api/feedback', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }).then(response => response.json())
  //     .then(data => {
  //       console.log(data)
  //       setFeedbacks(data.data)
  //     })
  // }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor='email' >Your email address</label>
          <input type='email' id='email' ref={emailRef}></input>
        </div>
        <div>
          <label htmlFor='feedback'>Your feedback</label>
          <input id='feedback' ref={feedbackRef}></input>
        </div>
        <button>Send Feedback</button>
      </form>
      <hr></hr>
      {/* <button onClick={loadFeedbacksHandler}>Load feedbacks</button> */}
    </div>
  )
}

export default Home
