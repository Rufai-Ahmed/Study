import {connect} from 'mongoose'

const URL: string = 'mongodb://localhost:27017/studyDB'

export const dbConfig = async () => {
    try {
        
        return await connect(URL).then(()=>{
            console.log("DB connected");
            
        })

    } catch (error) {
        console.log(error);
        
    }
}