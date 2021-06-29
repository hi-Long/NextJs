import { getSession } from "next-auth/client"
import { hashPassword, verifyPassword } from "../../../lib/auth"
import { connectToDbs } from "../../../lib/db"

const handler = async (req, res) => {
    switch (req.method) {
        case 'PUT':
            const session = await getSession({ req: req })

            if (!session) {
                res.status(401).json({ message: 'Not Authenticated!' })
                return
            }

            const { newPassword, oldPassword, email } = req.body
            const client = await connectToDbs()
            const usersCollection = client.db().collection('users')
            const user = await usersCollection.findOne({ email: email })
            const oldPasswordIsValid = await verifyPassword(oldPassword, user.password)

            if (oldPasswordIsValid) {
                const hashedPassword = await hashPassword(newPassword)
                const response = await usersCollection.findOneAndUpdate({ email: email }, { $set: { password: hashedPassword } })
                res.status(200).json({ message: 'Your password is successfully changed!' })
            } else {
                throw new Error('Wrong password!')
            }
    }
}

export default handler