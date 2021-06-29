import { hashPassword } from "../../../lib/auth"
import { connectToDbs } from "../../../lib/db"

const handler = async (req, res) => {
    const { email, password } = req.body
    console.log(email, password)

    if (!email || !password) {
        return res.status(422).json({ message: 'Invalid input!' })
    }

    const hashedPassword = await hashPassword(password)

    const client = await connectToDbs()
    const db = client.db()

    const existingUser = await db.collection('users').findOne({ email: email })

    switch (req.method) {
        case 'POST':
            if (!existingUser) {
                const result = await db.collection('users').insertOne({
                    email: email,
                    password: hashedPassword
                })
                res.status(201).json({ message: 'Created user!' })
            } else {
                return res.status(422).json({ message: 'User existed!' })
            }
            break
    }

    client.close()
}

export default handler