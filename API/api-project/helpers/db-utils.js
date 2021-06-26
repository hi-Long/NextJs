export const connectDbs = async () => {
    return await MongoClient.connect('mongodb+srv://Me:long.217000@cluster0.b30e6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
}

export const insertDocument = async (client, collection, document) => {
    const db = client.db()
    const result = await db.collection(collection).insertOne({
        eventId,
        ...req.body
    })
}