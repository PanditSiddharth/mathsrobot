import { Telegraf } from "telegraf";
import cmds from "./../commands"
import Hlp from '../helpers'
import * as fs from "fs"
let h = new Hlp()
import { Scenes } from "telegraf"
import config from "./../config"
import axios from "axios"

let add: any = {
  cmd: "",
  key: "",
  des: "",
  cmp: "",
  formula: ""
}
let ctt: any;
export let addScene = new Scenes.BaseScene<Scenes.SceneContext>("add");
addScene.enter(async (ctx: any) => {
  try {

    ctt = await ctx.reply(`
 See this:
  {
  cmd: "commandname",
  key: "keywords",
  des: "description",
  cmp: "which language [js, py, cpp]",
  formula: "enter formula"
}

Copy bellow written snippet and enter details as mentioned above then send it[do it under 1 minute]
 
 \`{
  "cmd": "",
  "key": "",
  "des": "",
  "cmp": "",
  "formula": ""
}\``, { parse_mode: "Markdown" });
  } catch (er: any) {

  }
});

let cas = 1;
let jsonn: any;
addScene.on("message", async (ctx: any) => {
  try {
    let msg: any = ctx.message.text;
    if (cas == 1) {
      jsonn = msg;
      ctx.deleteMessage(ctt.message_id)
      ctt = await ctx.reply("Enter code snippet")
      cas = 2;
    } else {

      try {
        jsonn = jsonn.replace(/\u00A0/mg, ' ')
        let jn: any = JSON.parse(jsonn)
        jn.userId = ctx.message.from.id;
        jn.code = msg;
        jn.command = "insert";
        let res = await axios.post(process.env.URI as any, jn);

        cas = 1;
        ctx.deleteMessage(ctt.message_id)
          .catch((a: any) => { })
        if (res.data.ok)
          reply(ctx, "Successfully added code with command /" + jn.cmd)
        else
          reply(ctx, "some error occured")
        ctx.scene.leave()
      } catch (error: any) {
        console.log(error)
        reply(ctx, "JSON Not in correct format")
        cas = 1;
        ctx.scene.leave()
      }
    }

  } catch (er: any) {

  }
});

let math = (bot: Telegraf) => {
  try {
    bot.hears(/^\/add/i, async (ctx: any) => {
      if (config.admins.includes(ctx.message.from.id))
        ctx.scene.enter("add")
      else
        reply(ctx, "You are not allowed to code snippets")
    })

    bot.hears(/^\/remove/i, async (ctx: any) => {
      if (!config.admins.includes(ctx.message.from.id))
        reply(ctx, "You are not allowed to remove code snippets")

      let word: any = ctx.message.text.match(/(?<=\/remove)\s*\w*/i)[0].trim().toLowerCase()

      try {
        if (!word)
          return reply(ctx, "Enter command name");

        let res: any = await axios.post(process.env.URI as any, { cmd: word, command: "remove" })

        if (res.data.ok)
          reply(ctx, "Successfully removed this command")
        else
          reply(ctx, "Some erro occured")
      } catch (error: any) { }

    })

    bot.hears(/^\/formula/i, async (ctx: any) => {
      reply(ctx, "currently not available..")
    });

    bot.hears(/^\/contributers/i, async (ctx: any) => {
      let ad = config.admins
      let cb = config.contributers
      let str = "Contributers: \n"
      for (let i = 0; i < ad.length; i++) {
        str += `[${cb[ad[i]].name}](tg://user?id=${ad[i]}) [[${cb[ad[i]].level}]] \n`
      }
      ctx.reply(str, {
        parse_mode: "Markdown",
        reply_markup: {
          inline_keyboard:
            [[{ text: "Close", callback_data: "close" }]]
        }
      })
    });

    bot.hears(/^\/code/i, async (ctx: any) => {

      let m: string = ctx.message.text

      if (m.length > 25)
        return

      if (m.length < 7)
        return reply(ctx, "write command also for which you want source code\nExample: `/code sum`", 7)

      let c = m.replace(/\/code|\s*/gi, "")

      if (!cmds[c])
        return

      try {
        const data = fs.readFileSync("./modules/" + c + "." + cmds[c].cmp, 'utf8');

        ctx.reply(ctx.message.from.id + " " + ctx.message.from.first_name + " used code command " + c, { chat_id: config.codeLogs })

        reply(ctx, data, 70)
        reply(ctx, "Copy it, This Code will be delete in 70 seconds")
      } catch (err) { }

    })

    bot.hears(/^\/commands/i, async (ctx: any) => {
      let keys: any = Object.keys(cmds)
      let cmdd = "";
      let count = 0;
      for (let i = 0; i < keys.length; i++) {
        count++;
        cmdd += "/" + keys[i] + " - " + cmds[keys[i]].des + "\n"
      }
      ctx.reply("Total " + count + " Math commands:\n" + cmdd, {
        reply_markup: {
          inline_keyboard:
            [[{ text: "Close", callback_data: "close" }]]
        }
      })
    })

    bot.hears(/^\/search/i, async (ctx: any) => {
      let word: any = ctx.message.text.match(/(?<=\/search)\s*\w*/i)[0].trim().toLowerCase()
      if (!word)
        return reply(ctx, "write keyword also for which you want to search commands")
      let searched = "";
      let count = 0;
      let res: any = await axios.post(process.env.URI as any, { key: word, command: "search" })
      console.log(res.data)
      if (!res.data.ok)
        reply(ctx, "Some erro occured")
      let arr = res.data.cmds;
      for (let i = 0; i < arr.length; i++) {

        count++
        searched += "/" + arr[i].cmd + " - " + arr[i].des + "\n"
      }

      if (searched) {
        searched = "Found " + count + " commands:\n" + searched
        // console.log(await ctx.getChatMember(ctx.message.from.id))

        ctx.reply(searched, {
          reply_markup: {
            inline_keyboard:
              [[{ text: "Close", callback_data: "close" }]]
          }
        })

      }
      else
        reply(ctx, "No commands found")
    })
  } catch (err: any) {
    console.log(err.message)
  }

  bot.on("callback_query", async (ctx: any, next: any) => {
    let msg: any = ctx.callbackQuery
    if (msg.data != "close")
      return next()
    ctx.deleteMessage().catch((e: any) => { })
  })

}

export default math;

async function reply(ctx: any, msg: any, tim: number = 10, mode: any = null) {
  ctx.reply(msg, { parse_mode: mode })
    .then(async (ms: any) => { await h.sleep(tim * 1000); return ms; })
    .then(async (ms: any) => { ctx.deleteMessage(ms.message_id).catch((err: any) => { }) })
    .catch((err: any) => { })

}