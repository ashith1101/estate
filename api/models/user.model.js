import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar:{
        type:String,
        default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fuser-profile&psig=AOvVaw1DBhJaGxSL41efMEl0FgYp&ust=1704452456194000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPjF2q3Kw4MDFQAAAAAdAAAAABAD"
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
