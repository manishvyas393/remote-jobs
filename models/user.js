import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
      name: {
            type: String,
            required: true,
      },
      email: {
            type: String,
            required: true,
      },
      password: {
            type: String,
            required: true,
      },
      passwordResetToken: {
            type: String,
            default:null
      },

},
      {
            timestamps: true
      }
)
const User = mongoose.models.users ||mongoose.model("users", UserSchema)

export default User