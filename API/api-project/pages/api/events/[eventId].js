import { MongoClient } from "mongodb"
import { connectDbs } from "../../../helpers/db-utils"

const handler = async (req, res) => {
    const eventId = req.query.eventId

    let client

    try {
        client = await connectDbs()
    } catch (err) {
        res.status(500).json({ message: 'Connecting to the database failed!' })
        return
    }
    
    const db = client.db()

    const { email, name, text } = req.body
    switch (req.method) {
        case 'POST':
            if (!email.includes('@') || !name || name.trim() === '') {
                return res.status(422).json({ message: 'Invalid input.' })
            }

            const result = await db.collection('comment').insertOne({
                eventId,
                ...req.body
            })

            console.log(result)

            return res.status(201).json({
                message: 'The comment is added',
                comment: {
                    id: result.insertedId,
                    ...req.body
                }
            })
        case 'GET':
            const documents = await db.collection('comment').find().sort({ _id: -1 }).toArray()
            return res.status(201).json({
                message: 'All comments',
                comments: documents
            })
    }
    client.close()
}

export default handler