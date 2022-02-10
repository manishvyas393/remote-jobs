import mongoose from "mongoose"
const dbConnect = () => {

      mongoose.connect(process.env.Db_Url || "", err => {
            if (err) throw err;
            console.log('Connected to mongodb.')
      })
}

export default dbConnect