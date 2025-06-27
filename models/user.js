let mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://root:root@dataaccosiation.w7looks.mongodb.net/data-association?retryWrites=true&w=majority&appName=dataaccosiation"
);

let userSchema = mongoose.Schema({
  username: String,
  name: String,
  age: Number,
  email: String,
  password: String,
  profilePic: {
    type: String,
    default: "default.jpg",
  },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "post" }],
});

module.exports = mongoose.model("user", userSchema);
