import config from "./config"
export let version = `𝐕𝐞𝐫𝐬𝐢𝐨𝐧: ${config.version}\n𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝐧𝐨.: ${config.versionNo}`

export let hcmp = `=========================
Math bot help commands
=========================

${config.startSymbol}commands to see available commands
${config.startSymbol}search <yourkeyword> to see search commands
${config.startSymbol}formula <commandname> to see formula
/leave to come out from session [many times your message will delete]
${config.startSymbol}add to add any code snippets
${config.startSymbol}remove <commandname> to remove any command`

export let hreal = `=========================
Compilation commands
=========================

New commands will come soon...

For more ${config.channel}
For queries ${config.group}
`

export let hAdmin = `=========================
Bot admin commands
=========================

${config.startSymbol}add to add new command
${config.startSymbol}remove to remove commandt
${config.startSymbol}inf info of chat id with link
${config.startSymbol}sendTask broadcast message
${config.startSymbol}sendto send to any chat by bot
`
export let hUtil = `=========================
Control and info commands
=========================

${config.startSymbol}leave to stop excecution
${config.startSymbol}ping to see bot's running status
${config.startSymbol}version to see version and features
${config.startSymbol}start for basic info
@help for this help list

${config.channel + " " + config.group}
${config.owner ? "Owner: " + config.owner : "𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: @PanditSiddharth"}
`

function ob(text: any, action: any) {
  return { text, callback_data: JSON.stringify({ ok: "help", action }) }
}

export let jUtil = {
  reply_markup: {
    inline_keyboard:
      [[ob("Admin", "admin"), ob("Math", "cmp"), ob("toReal", "real")], [
        ob("Close", "close")
      ]]
  }
}

export let jReal = {
  reply_markup: {
    inline_keyboard:
      [[ob("Admin", "admin"), ob("Math", "cmp"), ob("Utility", "util")], [
        ob("Close", "close")
      ]]
  }
}

export let jAdmin = {
  reply_markup: {
    inline_keyboard:
      [[ob("Utility", "util"), ob("Math", "cmp"), ob("toReal", "real")], [
        ob("Close", "close")
      ]]
  }
}

export let jcmp = {
  reply_markup: {
    inline_keyboard:
      [[ob("Utility", "util"), ob("Admin", "admin"), ob("toReal", "real")], [
        ob("Close", "close")
      ]]
  }
}