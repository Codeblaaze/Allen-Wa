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
        "https://itzpire.com/random/photography",
        { caption: "*meoooow!*" },
        "img",
        m
      );
    } catch (e) {
      m.error(`${e}\n\nCommand: cat`, e, false);
    }
  }
);
const { smd } = require("../lib");

smd(
  {
    cmdname: "china",
    desc: "Send Images of randome Chinese girl!",
    type: "misc",
    filename: __filename,
  },
  async (m) => {
    try {
      await m.send(
        "https://widipe.com/china",
        { caption: "*Hello...*" },
        "img",
        m
      );
    } catch (e) {
      m.error(`${e}\n\nCommand: china`, e, false);
    }
  }
);

