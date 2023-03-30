const { Schema, model } = require("mongoose");

const validateEmail = (email) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "must provide username"],
      unique: true,
    },
    email: {
      type: String,
      lowercase: true,
      validate: [validateEmail, "Please fill a valid email address"],
      required: [true, "must provide email"],
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = model("User", UserSchema);

module.exports = User;
