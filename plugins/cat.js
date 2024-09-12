const { smd } = require("../lib");

smd(
  {
    cmdname: "china",
    desc: "Send Images of randome Cats!",
    type: "misc",
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