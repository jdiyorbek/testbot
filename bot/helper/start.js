const { bot } = require("../bot");
const User = require("../../model/User");
const { login } = require("./login");
const { loginKeyboard } = require("../keyboards");

const start = async (msg) => {
  try {
    const chatId = msg.chat.id;

    const user = await User.findOne({ chatId }).lean();

    if (!user) {
      const newUser = new User({
        chatId,
        action: "start",
      });
      await newUser.save();
    }

    bot.sendMessage(
      chatId,
      `Assalomu alaykum ${msg.chat.first_name}. Botga xush kelibsiz!\n\nBotdan foydalanmoqchi bo'lsagiz tizimga kiring.`,
      {
        ...loginKeyboard
      }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = start;
