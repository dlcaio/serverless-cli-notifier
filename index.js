'use strict';

const notify = require("./notify");

class ServerlessCLINotifier {
  constructor(serverless) {
    this.serviceName = serverless.service.service;
    this.command = serverless.processedInput.commands[0];
    this.hooks = {
      'initialize': () => this.init(),
      'after:deploy:deploy': () => this.afterDeploy(),
    };
  }

  init = () => 
    notify(
      `Command "${this.command}" triggered on ${this.serviceName}.`
    );
  

  afterDeploy = () => 
    notify(
      `Deployment complete on ${this.serviceName}.`
    );
  
}

module.exports = ServerlessCLINotifier;

