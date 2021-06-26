import fs from 'fs/promises'
import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'

export const buildFeedbackPath = () => {
  return path.join(process.cwd(), 'data', 'feedback.json')
}

export const extractFeedback = async (filePath: string) => {
  const fileData = await fs.readFile(filePath)
  return JSON.parse(fileData.toString())
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const reqBody = req.body
  let filePath = buildFeedbackPath()
  let data = null
  switch (req.method) {
    case 'POST':
      const newFeedback = reqBody
      data = await extractFeedback(filePath)
      data.push(newFeedback)
      fs.writeFile(filePath, JSON.stringify(data))
      res.status(201).json({ message: 'Success!', feedback: newFeedback })
    case 'GET':
      data = await extractFeedback(filePath)
      console.log(data)
      res.status(200).json({ message: 'This works!', data: data })
  }
}

export default handler