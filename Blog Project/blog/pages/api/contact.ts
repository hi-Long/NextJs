import { MongoClient } from 'mongodb'
import { NextApiRequest, NextApiResponse } from "next";

const uri = "mongodb+srv://Me:long.217000@cluster0.b30e6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    let client, db

    try {
        client = await MongoClient.connect(uri)
        db = client.db()
    } catch (err) {
        return res.status(500).json({ message: 'Connecting to the database failed!' })
    }

    switch (req.method) {
        case 'POST':
            const { email, name, message } = req.body
            if (!email || !email.includes('@') || !message) {
                return res.status(422).json({ message: 'Invalid input!' })
            }
            console.log(req.body)
            try {
                await db.collection('blog-comments').insertOne(req.body)
                return res.status(201).json({ message: 'Successfully stored message!' })
            } catch (err) {
                return res.status(500).json({ message: 'Inserting to the database failed!' })
            }
    }
}

export default handler