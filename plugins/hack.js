const { smd, sleep } = require('../lib');

smd({ cmdname: "premium", type: "misc", info: "Premuim unlock for Beauty Ai Users", filename: __filename }, async (citel) => {
  const messages = [
"Just a second, BYTE is starting",
    "BYTE started successfully!",
     "Now!!!!!!",
    "Injecting Malware",
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
    "System hyjacking on process.. \n Conecting to Server error to find 404 ",
    "Device successfully connected... \n Riciving data...",
    "Data hyjacked from divice 100% completed \n killing all evidence killing all malwares...",
    " HACKING COMPLETED ",
    " SENDING LOG DOCUMENTS...",
    " SUCCESSFULLY SENT DATA AND Connection disconnected",
    "Sending all Victom details to Ranil",
    "Looking for Hamza's Number",
    "Successfully detected hacker's number",
    "Sending details to Anonymous",
    "Deleting BACKDOORS",
    "Done"
  ];

  let editedMessage;
  for (const message of messages) {
    editedMessage = await citel.send(editedMessage || message);
    await sleep(1000);
    editedMessage = await citel.edit(editedMessage, message);
  }
});
