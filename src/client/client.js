import 'babel-core/polyfill';
import Application from '../universal/Application';
import config from '../config/index';

const app = new Application({
  server: config.server.current,
  development: config.development,
  universal: config.universal,
  devTools: config.devTools
});

app.client(window.__state, document.getElementById('content'));
