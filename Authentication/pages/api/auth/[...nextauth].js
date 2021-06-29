import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { verifyPassword } from "../../../lib/auth";
import { connectToDbs } from "../../../lib/db";

export default NextAuth({
    session: { jwt: true },
    providers: [
        Providers.Credentials({
            async authorize(credentials) {
                const client = await connectToDbs()
                const usersCollection = client.db().collection('users')
                const user = await usersCollection.findOne({ email: credentials.email })
                console.log(user)
                if (!user) {
                    client.close()
                    throw new Error('No user found!')
                }

                const isValid = verifyPassword(credentials.password, user.password)

                if (!isValid) {
                    client.close()
                    throw new Error('Could not log u in!')
                }

                client.close()
                return { email: user.email }
            }
        })
    ]
})