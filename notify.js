const nodeNotifier = require("node-notifier");

const notify = (message) =>
  nodeNotifier.notify({
    title: "Serverless CLI Notifier",
    message,
    sound: true, // Only Notification Center or Windows Toasters
  });

module.exports = notify;
