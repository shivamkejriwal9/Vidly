// import Raven from "raven-js";
// import * as Sentry from "@sentry/browser";

function init() {
  // Sentry.init({
  //   dsn: "https://828e4df0a8544066983184daa7673884@sentry.io/1886941"
  // });
}

function log(error) {
  // Sentry.captureException(error);
  console.error(error);
}

export default {
  init,
  log
};
