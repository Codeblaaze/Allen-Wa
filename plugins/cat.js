const { smd } = require("../lib");

smd(
  {
    cmdname: "china",
    desc: "Send Images of randome Chinese girl",
    type: "fun",
    filename: __filename,
  },
  async (m) => {
    try {
      await m.send(
        "https://widipe.com/china",
        { caption: "*hellooo*" },
        "img",
        m
      );
    } catch (e) {
      m.error(`${e}\n\nCommand: china`, e, false);
    }
  }
);
smd(
  {
    cmdname: "thai",
    desc: "Send Images of random thai girl",
    type: "fun",
    filename: __filename,
  },
  async (m) => {
    try {
      await m.send(
        "https://widipe.com/thailand",
        { caption: "*hellooo*" },
        "img",
        m
      );
    } catch (e) {
      m.error(`${e}\n\nCommand: thai`, e, false);
    }
  }
);