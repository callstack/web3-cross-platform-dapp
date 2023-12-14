// ⚠️ Important: `@walletconnect/react-native-compat` needs to be imported before other `wagmi` packages.
// This is because it applies a polyfill necessary for the TextEncoder API.
import '@walletconnect/react-native-compat';

// Polyfills for Lens SDK
if (typeof btoa === 'undefined') {
  global.btoa = function (str) {
    return new Buffer(str, 'binary').toString('base64');
  };
}

if (typeof atob === 'undefined') {
  global.atob = function (b64Encoded) {
    return new Buffer(b64Encoded, 'base64').toString('binary');
  };
}
