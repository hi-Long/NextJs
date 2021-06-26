import React, { FC, Fragment, useState } from "react"
import Feedback from "../models/feedback"
import { buildFeedbackPath, extractFeedback } from "./api/feedback"

const FeedBackPage: FC<{ feedbacks: Feedback[] }> = props => {
    const [feedback, settFeedback] = useState()

    const loadFeedbackHandler = (id: string) => {
        fetch('/api/' + id)
            .then(response => response.json())
            .then(data => {
                settFeedback(data.feedback)
            })
    }

    return (
        <Fragment>
            {feedback && <p>{feedback}</p>}
            <ul>
                {props.feedbacks.map(f => (
                    <li key={f.id}>
                        {f.feedback}<button onClick={loadFeedbackHandler(null, f.id)}></button>
                    </li>
                ))}
            </ul>
        </Fragment>
    )
}

export const getStaticProps = async () => {
    const dataPath = buildFeedbackPath()
    const data = await extractFeedback(dataPath)

    return {
        props: { feedbacks: data }
    }
}

export default FeedBackPage