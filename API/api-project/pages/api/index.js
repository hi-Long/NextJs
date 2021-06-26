import { MongoClient } from "mongodb"
import { insertDocument } from "../../helpers/db-utils"

const handler = async (req, res) => {
    switch (req.method) {
        case 'POST':
            const email = req.body.email
            if (!email || !email.includes('@')) {
                return res.status(422).json({ message: 'Invalid email address' })
            }
            let client
            try {
                const client = await connectDbs()
            } catch (err) {
                res.status(500).json({ message: 'Connecting to the database failed!' })
                return
            }
            try {
                await insertDocument(client, 'email', { email: email })
                client.close()
            } catch (err) {
                return res.status(500).json({ message: 'Inserting to the database failed!' })
            }

            return res.status(201).json({ message: 'Signed up' })
    }
}

export default handler