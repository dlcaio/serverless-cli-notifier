# serverless-cli-notifier

This is a [Serverless Framework](https://www.serverless.com) plugin that aims to help developers be more productive by sending desktop notifications when serverless [lifecycle events](https://www.serverless.com/framework/docs/guides/plugins/creating-plugins#lifecycle-events) are triggered.

It works by combining Serverless Framework lifecycle events - with the serverless hooks helper - and the [node-notifier](https://www.npmjs.com/package/node-notifier) NPM package.

## Currently Supported Lifecycle Events:

- **initialize**: Runs after all `serverless` commands

- **after:deploy:deploy**: Runs after a successful `serverless deploy` execution

## Install

Run `npm install` in your Serverless project.

`$ npm install --save-dev serverless-cli-notifier`

Add the plugin to your serverless.yml file

```yaml
plugins:
  - serverless-cli-notifier
```