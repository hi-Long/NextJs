import { MongoClient } from "mongodb";

export const connectToDbs = async () => {
    const uri = "mongodb+srv://Me:long.217000@cluster0.b30e6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    return await MongoClient.connect(uri)
}

