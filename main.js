import { Httpx } from 'https://jslib.k6.io/httpx/0.0.3/index.js';
export { browse } from './scenarios/browse.js';
export { checkout } from './scenarios/checkout.js';

// global environment
globalThis.BASE_URL = __ENV.BASE_URL || 'http://ecommerce.test.k6.io';

// global min/max sleep durations (in seconds):
globalThis.PAUSE_MIN = __ENV.PAUSE_MIN || 1;
globalThis.PAUSE_MAX = __ENV.PAUSE_MAX || 5;

// initialize a Httpx client with the base URL, global headers and a request timeout:
globalThis.session = new Httpx({
  baseURL: BASE_URL,
  headers: {
    'User-Agent': 'k6 (https://k6.io)',
  },
  timeout: 60000 // 60 sec (k6 default)
});


const configFile = __ENV.CONFIG_FILE || './config/test.json';
const testConfig = JSON.parse(open(configFile));

export const options = Object.assign({}, testConfig);

// used to store global variables
globalThis.VARS = [];


globalThis.PAUSE_MIN = __ENV.PAUSE_MIN || 5;
globalThis.PAUSE_MAX = __ENV.PAUSE_MAX || 15;

export default function() {
  console.log("No scenarios found in config/test.json. Executing default function...");
}
