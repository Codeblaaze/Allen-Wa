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
        "https://api.thecatapi.com/v1/images/search",
        { caption: "*meoooow!*" },
        "img",
        m
      );
    } catch (e) {
      m.error(`${e}\n\nCommand: cat`, e, false);
    }
  }
);
