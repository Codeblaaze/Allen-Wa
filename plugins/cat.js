const { smd } = require("../lib");

smd(
  {
    cmdname: "cat",
    react: "🐱"
    desc: "Send Images of randome Cats!",
    type: "misc",
    filename: __filename,
  },
  async (m) => {
    try {
      await m.send(
        "https://cataas.com/cat?position=center",
        { caption: "*meoooow!*" },
        "img",
        m
      );
    } catch (e) {
      m.error(`${e}\n\nCommand: cat`, e, false);
    }
  }
);
