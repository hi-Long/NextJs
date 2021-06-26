import { buildFeedbackPath, extractFeedback } from './feedback';
import { NextApiRequest, NextApiResponse } from 'next';
import Feedback from '../../models/feedback';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const feedbackId = req.query.feedbackId
    const filePath = buildFeedbackPath()
    const feedbacks = await extractFeedback(filePath)
    switch (req.method) {
        case 'GET':
            const selectedFeedback = feedbacks.find((f: Feedback) => f.id === feedbackId)
            res.status(200).json({ feedback: selectedFeedback })
    }
}

export default handler