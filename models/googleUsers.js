import mongoose from 'mongoose';

const googleUserSchema = new mongoose.Schema({
      name: {
            type: String,
            required: true,
      },
      email: {
            type: String,
            required: true,
      },
      email_verified: {
            type: String,
            required: true,
      },
      picture: {
            type: String,
            default: null
      },

},
      {
            timestamps: true
      }
)
const User = mongoose.models.google_users || mongoose.model("google_users", googleUserSchema)

export default User