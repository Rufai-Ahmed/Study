import { connect } from "mongoose";

const URL: string =
  "mongodb+srv://abbeyrufai234:abbeyrufai234@cluster0.yokwex4.mongodb.net/studyDB?retryWrites=true&w=majority";

export const dbConfig = async () => {
  try {
    return await connect(URL).then(() => {
      console.log("DB connected");
    });
  } catch (error) {
    console.log(error);
  }
};
