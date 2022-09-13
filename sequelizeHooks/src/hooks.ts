import sequelize, { Sequelize, Model } from 'sequelize'

// 1. Define the model
const User = sequelize.define(
    "User",
    {
      firstName: Sequelize.toString,
      email: Sequelize.toString,
    },
    { timestamps: false }
  )

  // 2. Add the hook. This one is afterCreate hook
User.afterCreate(async (user, options) => {
    console.log("New User created:");
    console.log(user.firstName);
    console.log(user.email);
  });

  await User.create({
    firstName: "Nathan",
    email: "nathan@mail.com",
  });
  