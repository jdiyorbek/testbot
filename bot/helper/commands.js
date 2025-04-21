const User = require("../../model/User");
const { bot } = require("../bot");
const { menuKeyboard } = require("../keyboards");

const help = (msg) => {
  try {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, "Yordam")
  } catch (error) {
    console.log(error)
  }
}

const backToMenu = async(msg) => {
  try {
    const chatId = msg.chat.id;

    const updatedUser = await User.findOneAndUpdate({chatId}, {action: "menu"}).lean();
    
    if(!updatedUser) {
      bot.sendMessage(chatId, "Siz menuga qaytish uchun ro'yxatdan o'tmagansiz")
      return
    }      

    bot.sendMessage(chatId, "Menuga qaytdingiz", {
      ...menuKeyboard
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = {help, backToMenu}