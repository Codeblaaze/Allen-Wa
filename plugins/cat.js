const { smd } = require("../lib");

smd(
  {
    cmdname: "cat",
    desc: "Send Images of randome Cats!",
    type: "misc",
    filename: __filename,
  },
  async (m) => {
    try {
      await m.send(
        "https://cataas.com/gif",
        { caption: "*meoooow!*" },
        "gif",
        m
      );
    } catch (e) {
      m.error(`${e}\n\nCommand: cat`, e, false);
    }
  }
);
