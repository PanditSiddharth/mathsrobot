require("dotenv").config()

// Configure Your own bot free bot source code for helping students 

let ownerId = 1791106582
let config: Config = {
  codeLogs: -1001782169405, // chat id 
  chatLogs: -1001988408261, // chat id
  errorLogs: ownerId, // chat or persion id
  ownerId,
  admins: [1580821417, ownerId, 1643271211, 6044875199, 6167837549],
  contributers: {
    "1580821417":{
      name: "Tony stark",
      level: "Owner"
    },
    "1791106582":{
      name: "Siddharth Sharma",
      level: "dev",
    },
    "1643271211":{
      name: "Abhi ratn",
      level: "dev"
    },
    "6044875199":{
      name: "Unknown",
      level: "Sdev"
    },
    "6167837549":{
      name: "Md. Zaker",
      level: "Sdev"
    }
  },
  version: "1.0.0",
  versionNo: 1,
  ttl: 120,
  startSymbol: "/",
  owner: "", // You can give here your @username
  group: "@Logicb_support",
  channel: "@LogicBots",

  // set your bot token string in env
  token: process.env.TOKEN as string,

  // Write full path of these write here or in env vars
  python: process.env.PYTHON as string,
  java: process.env.JAVA as string,
  javac: process.env.JAVAC as string,
  go: process.env.GO as string,
  node: process.env.NODE as string
}

export default config;





// Don't change these types
type Chatid = string | number
type UserId = string | number
type Username = string;
interface Config {
  codeLogs: Chatid;
  chatLogs: Chatid;
  errorLogs: UserId;
  ttl: number;
  ownerId: UserId;
  admins: UserId[];
  version: string;
  contributers: any;
  versionNo: number | string;
  startSymbol: string;
  owner: string;
  group: Username;
  channel: Username;
  token: string;
  python: string;
  java: string;
  javac: string;
  go: string;
  node: string;
}