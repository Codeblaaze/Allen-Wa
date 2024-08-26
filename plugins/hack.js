const { smd, sleep } = require('../lib');

smd({ cmdname: "premium", type: "misc", info: "Premuim unlock for Beauty Ai Users", filename: __filename }, async (citel) => {
  const messages = [
"Checking User Key",
    "Key scanned successfully!",
     "Updating database...",
    " █ 10%",
    " █ █ 20%",
    " █ █ █ 30%",
    " █ █ █ █ 40%",
    " █ █ █ █ █ 50%",
    " █ █ █ █ █ █ 60%",
    " █ █ █ █ █ █ █ 70%",
    " █ █ █ █ █ █ █ █ 80%",
    " █ █ █ █ █ █ █ █ █ 90%",
    " █ █ █ █ █ █ █ █ █ █ 100%",
    " Updated Successfully...",
    "Congratulations 🎉 Now you are a premium user for this bot"
  ];

  let editedMessage;
  for (const message of messages) {
    editedMessage = await citel.send(editedMessage || message);
    await sleep(1000);
    editedMessage = await citel.edit(editedMessage, message);
  }
});
smd({ cmdname: "updatebot", type: "misc", info: "update bot", filename: __filename }, async (citel) => {
  const messages = [
"Just a second, Updating Services...",
    "Allen Bot V2 Checking for updates...",
     "Update detected V2.1.0",
    "Installing update....",
    "Update Installed Successfully ✅"
  ];

  let editedMessage;
  for (const message of messages) {
    editedMessage = await citel.send(editedMessage || message);
    await sleep(1000);
    editedMessage = await citel.edit(editedMessage, message);
  }
});
