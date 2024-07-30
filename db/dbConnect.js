import mongoose from "mongoose";

const db = async() => {
    
    try {
        await  mongoose.connect(process.env.LOCAL_MONGODB_URL);
        console.log('db is connected');
    } catch (error) {
        console.log('error While connecting db :',error);
    } 
}

export default db;