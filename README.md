# serverless-cli-notifier

This is a Serverless Framework plugin that aims to help developers be more productive by sending desktop notifications upon serverless [lifecycle events](https://www.serverless.com/framework/docs/guides/plugins/creating-plugins#lifecycle-events).

It works by combining Serverless Framework lifecycle events - with the serverless hooks helper - and the [node-notifier](https://www.npmjs.com/package/node-notifier) NPM package.

## Currently Supported Lifecycle Events:

- **initialize**: Runs on every `serverless` command

- **after:deploy:deploy**: Runs after a successful `serverless deploy` command

## Install

Run `npm install` in your Serverless project.

`$ npm install --save-dev serverless-cli-notifier`

Add the plugin to your serverless.yml file

```yaml
plugins:
  - serverless-cli-notifier
```