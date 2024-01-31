const mongoose = require("mongoose");

const UserModelSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
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
    age: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    strict: true,
  }
);

module.exports = mongoose.model("User", UserModelSchema, "users");
user.post("/users", async (req, res) => {
  const newUser = new UserModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.email,
    age: Number(req.body.age),
  });

  try {
    const user = await newUser.save();

    res.status(201).send({
      statusCode: 201,
      message: "User added successfully",
      payload: user,
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: "Internal server error",
      error,
    });
  }
});

module.exports = user;