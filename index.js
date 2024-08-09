let { compiler } = require('iocompiler');
let { Telegraf } = require("telegraf")

let bot = new Telegraf(process.env.BOT_TOKEN)

bot.on("message", (ctx, next) => {
  ctx.reply("I Got your message processing...")

    // Change incomming message for compilation
    ctx.update.message.text = "/js console.log('lol')"

    // Give update to next handler with updated text
    next(ctx)
})

  /*
  * ttl: max time to execute code, default 60 seconds
  * allowed: array of telegram ids of users who can execute code on it
  */
// allowed users id if you not give this then all users can use your bot
compiler(bot, { ttl: 60, allowed: [1791106582]});

// launching telegraf bot in polling mode
bot.launch({ dropPendingUpdates: true });